import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// TODO: Später durch echte Top-Links ersetzen
const topLinks = [
  {
    id: 1,
    name: "YouTube Video",
    shortUrl: "short.xyz/yt123",
    clicks: 1245,
    lastClick: "2024-01-15",
  },
  {
    id: 2,
    name: "GitHub Repo",
    shortUrl: "short.xyz/gh456",
    clicks: 892,
    lastClick: "2024-01-14",
  },
  {
    id: 3,
    name: "Portfolio Site",
    shortUrl: "short.xyz/me789",
    clicks: 567,
    lastClick: "2024-01-13",
  },
];

export const PerfomingTabel = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Top-Performing Links</CardTitle>
              <CardDescription>
                Ihre meistgeklickten Links im Überblick
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Nach Klicks sortieren
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table Header - nur auf Desktop sichtbar */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b">
              <div className="col-span-4">Link Name</div>
              <div className="col-span-4">Short URL</div>
              <div className="col-span-2 text-right">Klicks</div>
              <div className="col-span-2 text-right">Letzter Klick</div>
            </div>

            {/* Link Rows */}
            {topLinks.map((link) => (
              <div
                key={link.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-4 py-3 border-b last:border-b-0 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <div className="md:col-span-4">
                  <p className="font-medium">{link.name}</p>
                  <p className="text-xs text-muted-foreground md:hidden">
                    Link Name
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-primary text-sm break-all">
                    {link.shortUrl}
                  </p>
                  <p className="text-xs text-muted-foreground md:hidden">
                    Short URL
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <p className="font-mono font-semibold">
                    {link.clicks.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground md:hidden">
                    Klicks
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <p className="text-sm">{link.lastClick}</p>
                  <p className="text-xs text-muted-foreground md:hidden">
                    Letzter Klick
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
