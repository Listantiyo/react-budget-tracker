// components/FormInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";

export default function FormInput(prop) {
  const { register, handleSubmit, reset } = useForm({
    defaultValue: {
      expense_name: "",
      expense_amount: 0
    }
  });
  const state = prop.state;
  const setState = prop.setState;
  const onSubmit = (data) => {
    if (!data.expense_name || !data.expense_amount) return;
    const newState = {
      dana: state.dana,
      pengeluaran: [
        ...state.pengeluaran,
        {
          id: state.pengeluaran.length + 1,
          nama_pengeluaran: data.expense_name,
          amount: Number(data.expense_amount)
        }
      ]
    }
    setState(newState);
    reset();
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Tambah Pengeluaran
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="expense-name">Nama Pengeluaran</Label>
            <Input
              id="expense-name"
              placeholder="Contoh: Kopi Susu, Bayar Kosan"
              type="text"
              {...register('expense_name')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-amount">Jumlah (Rp)</Label>
            <Input
              id="expense-amount"
              placeholder="Contoh: 25000"
              type="number"
              {...register('expense_amount')}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Tambah
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
