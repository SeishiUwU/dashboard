export async function getVideoList() {
    const res = await fetch('/api/videos');
    if (!res.ok) {
      throw new Error(`Failed to fetch video list: ${res.status}`);
    }
    return res.json();          // -> Array of ["session1.mp4", ...]
  }