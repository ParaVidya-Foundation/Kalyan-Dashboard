"use client";

import KundliButton from "./Kundli-buttons";
import { KundliChart } from "@/components/charts/kundli-chart";
import { useKundliStore } from "@/lib/store";
import { Card, CardContent } from "@/components/ui/card";

type ChartKey = "birthChart" | "navamsa" | "dashamsa";

export function Chartsection() {
  const { currentKundli } = useKundliStore();

  // 🔹 Chart configuration (typed)
  const charts: { key: ChartKey; title: string }[] = [
    { key: "birthChart", title: "Birth Chart" },
    { key: "navamsa", title: "Navamsa Chart" },
    { key: "dashamsa", title: "Dashamsa Chart" },
  ];

  // 🔹 Button configuration
  const buttons = [
    { text: "Free Kundli", color: "#FF5733", api: () => console.log("Free Kundli API called!") },
    { text: "Premium Kundli", color: "#2ECC71", api: () => console.log("Premium Kundli API called!") },
    { text: "Detailed Kundli", color: "#3498DB", api: () => console.log("Detailed Kundli API called!") },
  ];

  if (!currentKundli) {
    return <p className="text-center text-gray-500">No Kundli data available</p>;
  }

  return (
    <div className="p-8 space-y-12">
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {charts.map((chart) => (
          <Card key={chart.key}>
            <CardContent className="p-6">
              <KundliChart
                chartData={currentKundli.charts[chart.key]} // ✅ TS now knows this is safe
                title={chart.title}
                size="medium"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center items-center gap-8">
        {buttons.map((btn, index) => (
          <KundliButton key={index} text={btn.text} color={btn.color} api={btn.api} />
        ))}
      </div>
    </div>
  );
}
