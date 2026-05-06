import { StatCards } from "@/components/analytics-comp/StatCards";
import { TabsChartView } from "@/components/analytics-comp/TabsChartView";
import { PerfomingTabel } from "@/components/analytics-comp/PerfomingTabel";

export const Analytics = () => {
  return (
    <div className="space-y-6 p-2 md:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Überblick über Ihre Klickstatistiken und Link-Performance
          </p>
        </div>
      </div>
      <StatCards />

      <TabsChartView />

      <PerfomingTabel />
    </div>
  );
};
