import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// TODO: Später durch echte Daten ersetzen
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// TODO: Später durch echte Daten ersetzen
const weeklyStats = [
  { day: "Mon", clicks: 145 },
  { day: "Tue", clicks: 203 },
  { day: "Wed", clicks: 178 },
  { day: "Thu", clicks: 245 },
  { day: "Fri", clicks: 298 },
  { day: "Sat", clicks: 210 },
  { day: "Sun", clicks: 167 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#9B33E2",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
  clicks: {
    label: "Clicks",
    color: "#9B33E2",
  },
} satisfies ChartConfig;

export const TabsChartView = () => {
  return (
    <>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="weekly">Wöchentlich</TabsTrigger>
        </TabsList>

        {/* Overview Tab - Monatliche Übersicht */}
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monatliche Klickübersicht</CardTitle>
              <CardDescription>
                Vergleich Klicks der letzten 6 Monate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weekly Tab - Wöchentliche Übersicht */}
        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Wöchentliche Klickübersicht</CardTitle>
              <CardDescription>
                Klicks der letzten 7 Tage im Vergleich
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={weeklyStats}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="var(--color-clicks)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-clicks)" }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};
