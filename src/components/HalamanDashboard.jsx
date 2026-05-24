// pages/HalamanDashboard.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import IndikatorSisaUang from "@/components/IndikatorSisaUang";
import DaftarKategori from "@/components/DaftarKategori";
import DaftarPengeluaran from "@/components/DaftarPengeluaran";
import { PlusCircle } from "lucide-react";

export default function HalamanDashboard({ budget, expenses, categories, onDeleteExpense, onDeleteCategory }) {
  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto p-4">
      {/* Header Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Keuangan</h1>
          <p className="text-sm text-muted-foreground">Ringkasan anggaran dan catatan pengeluaran Anda.</p>
        </div>
        {/* Tombol Navigasi ke Halaman Form menggunakan Link react-router-dom */}
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white self-start sm:self-center">
          <Link to="/tambah" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Tambah Pengeluaran Baru
          </Link>
        </Button>
      </div>

      {/* Komponen Ringkasan Utama & Grafik */}
      <IndikatorSisaUang budget={budget} expenses={expenses} categories={categories} />

      {/* Atur Layout Konten Utama Sesuai Keinginan Anda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <DaftarKategori 
            categories={categories} 
            expenses={expenses} 
            onDeleteCategory={onDeleteCategory} 
          />
        </div>
        <div className="space-y-6">
          <DaftarPengeluaran 
            expenses={expenses} 
            onDeleteExpense={onDeleteExpense} 
          />
        </div>
      </div>
    </div>
  )
}