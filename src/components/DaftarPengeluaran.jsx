// components/DaftarPengeluaran.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react"; // Pastikan sudah install lucide-react (bawaan shadcn)

// Data tiruan (mock data) untuk sementara
const MOCK_EXPENSES = [
  { id: "1", name: "Makan Siang Nasi Padang", amount: 25000 },
  { id: "2", name: "Bensin Motor", amount: 50000 },
  { id: "3", name: "Langganan Spotify", amount: 55000 },
];

export default function DaftarPengeluaran({expenses, onDeleteExpense}) {
  console.log(expenses)
  return (
    <div className="space-y-3 w-full">
      <h3 className="text-lg font-semibold px-1">Riwayat Pengeluaran</h3>

      {expenses.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          Belum ada pengeluaran.
        </p>
      ) : (
        <div className="space-y-2">
          {expenses.map((expense) => (
            <Card key={expense.id} className="overflow-hidden">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {expense.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rp {expense.amount.toLocaleString("id-ID")}
                  </p>
                </div>
                <Button
                  onClick={() => {onDeleteExpense(expense.id);}}
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Hapus</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
