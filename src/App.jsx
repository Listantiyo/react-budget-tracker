import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import InitState from "@/Data"
import { useState } from "react"
import HalamanDashboard from "./components/HalamanDashboard";
import HalamanForm from "./components/HalamanForm";

export default function App() {
  /** @type {[State, React.Dispatch<React.SetStateAction<State>>]} */
  const [expenses, setExpense] = useState(InitState);
  const [categories, setCategory] = useState([
    {id: "c1", name: "Makanan", budget: 50000},
    {id: "c2", name: "Transportasi", budget: 20000}
  ])
  
  const { dana, list } = expenses;

  const handleDeleteExpense = (id) => {
    setExpense({...expenses, list: expenses.list.filter((prev) => prev.id !== id)})
  }
  const handleAddExpense = (newExpense) => {
    setExpense({ ...expenses, list: [ ...expenses.list, newExpense ] });
  }
  const handleDeleteCategory = (id) => {
    setCategory(categories.filter(cat => cat.id !== id));
    setExpense({...expenses, list: expenses.list.filter(exp => exp.category_id !== id)});
  }
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Routes>
          <Route
            path="/"
            element={
              <HalamanDashboard
                budget={dana}
                expenses={list}
                categories={categories}
                onDeleteExpense={handleDeleteExpense}
                onDeleteCategory={handleDeleteCategory}
              />
            }
          />
          <Route
            path="/tambah"
            element={
              <HalamanForm
                categories={categories}
                onTambah={handleAddExpense}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}


/**
 * @typedef {Object} Pengeluaran
 * @property {int} id
 * @property {string} name - Nama atau deskripsi pengeluaran.
 * @property {number} amount - Jumlah nominal pengeluaran.
 */

/**
 * @typedef {Object} State
 * @property {number} dana - Total dana yang tersedia.
 * @property {Pengeluaran[]} list - Daftar riwayat pengeluaran.
 */

/** @type {State} */