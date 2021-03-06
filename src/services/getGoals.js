export default async function GetGoals (token) {
  try {
    const url =
      'https://goal-tracking-backend-production.up.railway.app/api/goals/'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, requestOptions)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
