export async function CreateGoal ({ data, token }) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }

    const res = await fetch(
      'https://goal-tracking-backend-production.up.railway.app/api/goals/add',
      requestOptions
    )

    return res
  } catch (error) {
    throw new Error(error.message)
  }
}
