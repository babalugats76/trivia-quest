/**
 * Get the correct path for public assets (images, audio, etc.)
 * Automatically handles base path for GitHub Pages deployment
 */
export function getAssetPath(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
}
