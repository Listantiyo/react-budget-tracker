const InitState = {
  dana: 2000000,
  pengeluaran: [
    {
      id: 1,
      nama_pengeluaran: "Bensin",
      amount: 25000
    },
    {
      id: 2,
      nama_pengeluaran: "Kopi Kapal Api Special",
      amount: 26000
    }
  ],
};

export default InitState

/**
 * @typedef {Object} Pengeluaran
 * @property {int} id
 * @property {string} nama_pengeluaran - Nama atau deskripsi pengeluaran.
 * @property {number} amount - Jumlah nominal pengeluaran.
 */

/**
 * @typedef {Object} State
 * @property {number} dana - Total dana yang tersedia.
 * @property {Pengeluaran[]} pengeluaran - Daftar riwayat pengeluaran.
 */

/** @type {State} */