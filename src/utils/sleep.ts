export async function runWithSleep<T>(fn: Promise<T>, minTime = 3000): Promise<T> {
  const response = await Promise.all([fn, sleep(minTime)])
  return response[0]
}

export function sleep(time = 3000) {
  return new Promise(resolve => setTimeout(resolve, time))
}
