import { Client, Databases, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject(PROJECT_ID)

const database = new Databases(client)

/**
 * Update or insert search count
 */
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 1. Check if search term already exists
    const result = await database.listDocuments(
      DATABASE_ID,
      TABLE_ID,
      [Query.equal('searchTerm', searchTerm)]
    )

    // 2. Update count if exists
    if (result.documents && result.documents.length > 0) {
      const doc = result.documents[0]

      await database.updateDocument(
        DATABASE_ID,
        TABLE_ID,
        doc.$id,
        {
          count: (doc.count || 0) + 1,
        }
      )
    } 
    // 3. Otherwise create new document
    else {
      await database.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        {
          searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      )
    }
  } catch (error) {
    console.error('updateSearchCount error:', error)
  }
}

/**
 * Get top 5 trending movies
 */
export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(
      DATABASE_ID,
      TABLE_ID,
      [
        Query.orderDesc('count'),
        Query.limit(5),
      ]
    )

    return result.documents || []
  } catch (error) {
    console.error('getTrendingMovies error:', error)
  }
}
