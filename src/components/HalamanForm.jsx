// pages/HalamanForm.jsx
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function HalamanForm({ categories, onTambah }) {
  const navigate = useNavigate();

  // Inisialisasi React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Jalankan fungsi pengubah state yang dikirim dari Parent
    onTambah({
      id: crypto.randomUUID(),
      name: data.expenseName,
      amount: Number(data.expenseAmount),
      category_id: data.expenseCategory,
      createdAt: new Date().toLocaleDateString("id-ID"),
    });

    // Redirect kembali ke rute utama setelah submit berhasil
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      {/* Tombol Kembali */}
      <Button
        variant="ghost"
        asChild
        className="text-muted-foreground hover:text-foreground"
      >
        <Link to="/" className="flex items-center gap-2 text-sm">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Dashboard
        </Link>
      </Button>

      <Card className="w-full border-emerald-100/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Catat Pengeluaran</CardTitle>
          <CardDescription>
            Masukkan detail pengeluaran baru Anda di bawah ini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Input Nama Pengeluaran */}
            <div className="space-y-2">
              <Label htmlFor="expenseName">Nama Pengeluaran</Label>
              <Input
                id="expenseName"
                placeholder="Contoh: Tiket Bioskop, Makan Malam"
                type="text"
                {...register("expenseName", {
                  required: "Nama pengeluaran wajib diisi",
                })}
              />
              {errors.expenseName && (
                <p className="text-xs text-destructive">
                  {errors.expenseName.message}
                </p>
              )}
            </div>

            {/* Input Jumlah Nominal */}
            <div className="space-y-2">
              <Label htmlFor="expenseAmount">Jumlah (Rp)</Label>
              <Input
                id="expenseAmount"
                placeholder="Contoh: 45000"
                type="number"
                {...register("expenseAmount", {
                  required: "Jumlah nominal wajib diisi",
                  min: {
                    value: 1,
                    message: "Nominal harus lebih besar dari 0",
                  },
                })}
              />
              {errors.expenseAmount && (
                <p className="text-xs text-destructive">
                  {errors.expenseAmount.message}
                </p>
              )}
            </div>

            {/* Dropdown Pilihan Kategori */}
            <div className="space-y-2">
              <Label htmlFor="expenseCategory">Kategori Anggaran</Label>
              <select
                id="expenseCategory"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("expenseCategory", {
                  required: "Silakan pilih salah satu kategori",
                })}
              >
                <option value="">-- Pilih Kategori --</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.expenseCategory && (
                <p className="text-xs text-destructive">
                  {errors.expenseCategory.message}
                </p>
              )}
            </div>

            {/* Tombol Simpan */}
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white pt-2"
            >
              Simpan Pengeluaran
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
