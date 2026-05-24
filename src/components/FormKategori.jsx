import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"

export default function FormKategori({onAddCategory}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        onAddCategory({
            id: crypto.randomUUID(),
            name: data.categoryName,
            budget: Number(categoryBudget)
        })
        reset();
    }

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Tambah Kategori
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="categoryName">Nama Kategori</Label>
              <Input
                id="categoryName"
                placeholder="Contoh: Makanan, Hiburan, Liburan"
                type="text"
                {...register("categoryName", {
                  required: "Nama kategori wajib diisi",
                })}
              />
              {errors.categoryName && (
                <p className="text-xs text-destructive">
                  {errors.categoryName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoryBudget">Alokasi Anggaran (Rp)</Label>
              <Input
                id="categoryBudget"
                placeholder="Contoh: 500000"
                type="number"
                {...register("categoryBudget", {
                  required: "Alokasi anggaran wajib diisi",
                  min: {
                    value: 1,
                    message: "Anggaran harus lebih besar dari Rp 0",
                  },
                })}
              />
              {errors.categoryBudget && (
                <p className="text-xs text-destructive">
                  {errors.categoryBudget.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Tambah Kategori
            </Button>
          </form>
        </CardContent>
      </Card>
    );
}