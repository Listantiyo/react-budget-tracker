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

```

## 🚀 Aliran Data & Logika State

Aplikasi ini menerapkan prinsip **Unidirectional Data Flow** (Aliran Data Satu Arah) di React:

1. **State Utama (`App.tsx`)**: Menyimpan array data pengeluaran (`expenses`) dan batas total anggaran (`totalBudget`).
2. **Tambah Data (`FormInput.tsx`)**: Menggunakan `useForm` dari React Hook Form untuk menangkap data baru, lalu mengirimkannya ke parent melalui *callback function* (props) untuk dimasukkan ke dalam state utama.
3. **Hapus Data (`DaftarPengeluaran.tsx`)**: Menerima data pengeluaran lewat props, lalu memicu fungsi penghapusan berdasarkan `id` unik yang dikirim kembali ke parent.
4. **Kalkulasi Otomatis (`IndikatorSisaUang.tsx`)**: Menerima array pengeluaran saat ini, menghitung total pengeluaran menggunakan `reduce()`, dan memperbarui persentase grafik sisa uang.

## 📦 Cara Menjalankan Proyek Lokal

1. **Clone repository ini:**
```bash
git clone [https://github.com/username/budget-tracker.git](https://github.com/Listantiyo/react-budget-tracker.git)
cd budget-tracker

```


2. **Install semua dependensi:**
```bash
npm install

```


3. **Jalankan server pengembangan (Development Server):**
```bash
npm run dev


```



```

4. Buka browser Anda dan akses tautan yang tertera di terminal (biasanya `http://localhost:5173`).

```

---

### 💡 Next Roadmap

* Menyimpan data pengeluaran ke `localStorage` agar tidak hilang saat di-*refresh*.
* Menambahkan skema validasi form menggunakan `zod` (yang sangat cocok dipadukan dengan React Hook Form).
* Menambahkan filter kategori pengeluaran (misal: Makanan, Transportasi, Hiburan).