import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Globe, MousePointerClick } from "lucide-react";

export const StatCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gesamtklicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Durchschn. Klicks/Tag
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">408</div>
            <p className="text-xs text-muted-foreground">Letzte 7 Tage</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
