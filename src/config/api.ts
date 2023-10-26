export const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
    authorization: process.env.NEXT_PUBLIC_TOKEN,
  },
}
