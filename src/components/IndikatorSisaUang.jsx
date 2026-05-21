// components/IndikatorSisaUang.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function IndikatorSisaUang(prop) {
  // Angka hardcode untuk simulasi logika budget
  const TOTAL_BUDGET = prop.budget;
  const TOTAL_SPENT = prop.spent;
  const REMAINING_BUDGET = TOTAL_BUDGET - TOTAL_SPENT;

  // Menghitung persentase sisa uang untuk progress bar
  const percentageLeft = (REMAINING_BUDGET / TOTAL_BUDGET) * 100;

  return (
    <Card className="w-full border-emerald-100 bg-emerald-50/30 dark:bg-emerald-950/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Sisa Anggaran
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            Rp {REMAINING_BUDGET.toLocaleString("id-ID")}
          </span>
          <span className="text-sm text-muted-foreground">
            dari Rp {TOTAL_BUDGET.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="space-y-1">
          {/* Progress bar bawaan shadcn, kita beri warna emerald (hijau) */}
          <Progress
            value={percentageLeft}
            className="h-2 bg-muted [&>div]:bg-emerald-500"
          />
          <p className="text-xs text-right text-muted-foreground">
            {percentageLeft.toFixed(0)}% anggaran tersisa
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
