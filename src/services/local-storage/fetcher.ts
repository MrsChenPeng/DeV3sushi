// Simple local storage fetcher
export default async function fetcher(key) {
  const value = localStorage.getItem(key)
  if (!value) return undefined
  return JSON.parse(value)
}

// https://github.com/vercel/swr/blob/master/examples/storage-tab-sync/pages/index.js
