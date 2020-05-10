const GITHUB_API = "https://api.github.com"

export async function grab(user: string): Promise<Array<any>> {
  const resp = await fetch(`${GITHUB_API}/users/${user}/events`)
  return await resp.json()
}
