const USER = "UmarTanwar3527";

// Server-side and cached hourly, so visitors never hit GitHub's rate limit directly.
export async function getPublicRepoCount(): Promise<number | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(`https://api.github.com/users/${USER}`, {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const user: { public_repos: number } = await res.json();
    return user.public_repos;
  } catch (err) {
    console.error("GitHub fetch failed", err);
    return null;
  }
}
