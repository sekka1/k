/**
 * Registry of apps published on this site. Each app is a self-contained set
 * of static files (HTML/JS/CSS) served from its own sub-folder under
 * `public/apps/<slug>/`, and is opened directly by the browser rather than
 * being routed through the React app.
 */
export interface AppEntry {
  slug: string;
  name: string;
  description: string;
  path: string;
}

export const apps: AppEntry[] = [
  {
    slug: "zenith-visual-experiment",
    name: "Zenith Visual Experiment",
    description: "A canvas-based visual experiment with sweeping arcs that react to your mouse.",
    path: "/apps/zenith-visual-experiment/index.html",
  },
];
