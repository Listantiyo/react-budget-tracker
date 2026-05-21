# 💰 Budget Tracker Application

Aplikasi pencatat keuangan harian sederhana yang dibangun menggunakan **React**, **Tailwind CSS**, dan **shadcn/ui**. Aplikasi ini dirancang untuk membantu pengguna memantau sisa anggaran dan mencatat setiap pengeluaran secara langsung dengan interaksi yang responsif.

## ✨ Fitur Utama

- **Indikator Sisa Uang**: Visualisasi sisa anggaran menggunakan komponen *Progress Bar* (warna hijau) yang otomatis menyusut sesuai total pengeluaran.
- **Form Input Valid**: Formulir tambah pengeluaran (Nama & Jumlah Nominal) yang dihandle secara efisien oleh **React Hook Form**.
- **Riwayat Pengeluaran**: Daftar pengeluaran dalam bentuk kartu (*Card layout*) yang dinamis dan dilengkapi dengan tombol hapus.
- **State Management Terpusat**: Aliran data menggunakan teknik *Lifting State Up* sehingga sinkronisasi antara input, daftar, dan indikator berjalan *real-time*.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Card, Input, Button, Label, Progress)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Struktur Komponen

Proyek ini memisahkan logika presentasional dan penanganan data ke dalam beberapa file komponen:

```text
src/
├── components/
│   ├── ui/                 # Komponen dasar dari shadcn/ui
│   ├── FormInput.tsx       # Form tambah pengeluaran (React Hook Form)
│   ├── DaftarPengeluaran.tsx # Menampilkan list pengeluaran & action hapus
│   └── IndikatorSisaUang.tsx # Kalkulasi & progress bar sisa anggaran
├── App.tsx                 # Parent component (Pusat State & Logika Utama)
└── main.tsx