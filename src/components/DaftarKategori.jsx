import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trash2 } from "lucide-react"

export default function DaftarKategori({categories,  expenses, onDeleteCategory}) {
    return (
      <div className="space-y-3 w-full">
        <h3 className="text-lg font-semibold px-1">Daftar Kategori Anggaran</h3>

        {categories.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            Belum ada kategori.
          </p>
        ) : (
          <div className="space-y-3">
            {categories.map((category) => {
              // Filter & kalkulasi total pengeluaran khusus untuk kategori aktif ini
              const totalSpentInCategory = expenses
                .filter((exp) => exp.category_id === category.id)
                .reduce((sum, exp) => sum + exp.amount, 0);

              const remainingCategoryBudget =
                category.budget - totalSpentInCategory;

              // Hitung sisa persentase bar (warna hijau akan memendek jika pengeluaran membengkak)
              const percentageLeft =
                category.budget > 0
                  ? Math.max(
                      0,
                      (remainingCategoryBudget / category.budget) * 100,
                    )
                  : 0;

              return (
                <Card
                  key={category.id}
                  className="overflow-hidden border-emerald-100/60 dark:border-emerald-950/40"
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">
                          {category.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Sisa: Rp{" "}
                          {remainingCategoryBudget.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8"
                        onClick={() => onDeleteCategory(category.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Hapus Kategori</span>
                      </Button>
                    </div>

                    {/* Progress Bar Indikator Kategori bertema Emerald */}
                    <div className="space-y-1">
                      <Progress
                        value={percentageLeft}
                        className="h-1.5 bg-muted [&>div]:bg-emerald-500"
                      />
                      <div className="flex justify-between text-[11px] text-muted-foreground">
                        <span>
                          Terpakai: Rp{" "}
                          {totalSpentInCategory.toLocaleString("id-ID")}
                        </span>
                        <span>
                          Batas: Rp {category.budget.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
}