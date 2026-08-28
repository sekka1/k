import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apps } from "@/apps";

export function AppsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Apps</h1>
          <p className="mt-1 text-sm text-slate-500">
            Pick an app below to launch it in your browser.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <a key={app.slug} href={app.path} target="_blank" rel="noreferrer">
              <Card className="h-full transition hover:border-slate-400 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-slate-900">
                    {app.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{app.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
          {apps.length === 0 && (
            <p className="text-sm text-slate-400">No apps published yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
