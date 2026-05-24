const InitState = {
  dana: 2000000,
  list: [
    {
      id: 1,
      name: "Bensin",
      amount: 5000,
      category_id: "c1"
    },
    {
      id: 2,
      name: "Kopi Kapal Api Special",
      amount: 6000,
      category_id: "c2"
    }
  ],
};

export default InitState

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