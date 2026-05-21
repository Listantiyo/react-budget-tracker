import FormInput from "@/components/FormInput";
import DaftarPengeluaran from "@/components/DaftarPengeluaran";
import IndikatorSisaUang from "@/components/IndikatorSisaUang";
import InitState from "@/Data"
import { useState } from "react"

export default function App() {
  /** @type {[State, React.Dispatch<React.SetStateAction<State>>]} */
  const [state, setState] = useState(InitState);
  const {dana, pengeluaran} = state;

  const spent_amount = pengeluaran.reduce((prev, next) => {
    return prev + next.amount
  }, 0)

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <main className="max-w-md mx-auto p-4 md:p-6 space-y-6">
      <header className="space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Budget Tracker</h1>
        <p className="text-sm text-muted-foreground">
          Kelola finansial harianmu dengan mudah.
        </p>
      </header>

      <IndikatorSisaUang budget={state.dana} spent={spent_amount} />

      <div className="space-y-6">
        <FormInput state={state} setState={setState} />
        <DaftarPengeluaran pengeluaran={pengeluaran} state={state} setState={setState}/>
      </div>
    </main>
  );
}


/**
 * @typedef {Object} Pengeluaran
 *  * @property {int} id
 * @property {string} nama_pengeluaran - Nama atau deskripsi pengeluaran.
 * @property {number} amount - Jumlah nominal pengeluaran.
 */

/**
 * @typedef {Object} State
 * @property {number} dana - Total dana yang tersedia.
 * @property {Pengeluaran[]} pengeluaran - Daftar riwayat pengeluaran.
 */

/** @type {State} */
