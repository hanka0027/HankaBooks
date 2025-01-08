// Ambil data dari Local Storage
const transaksiData = JSON.parse(localStorage.getItem("transaksi"));

if (transaksiData) {
  // Tambahkan baris ke tabel
  const table = document.getElementById("transaksiTable");
  const row = table.insertRow();

  // Isi kolom dengan data
  const cellNama = row.insertCell(0);
  const cellJumlah = row.insertCell(1);
  const cellKategori = row.insertCell(2);
  const cellHarga = row.insertCell(3);
  const cellTotal = row.insertCell(4);

  const { namaBuku, jumlahBuku, kategoriBuku, hargaBuku } = transaksiData;
  const totalHarga = jumlahBuku * hargaBuku;

  cellNama.textContent = namaBuku;
  cellJumlah.textContent = jumlahBuku;
  cellKategori.textContent = kategoriBuku;
  cellHarga.textContent = `Rp${hargaBuku.toLocaleString("id-ID")}`;
  cellTotal.textContent = `Rp${totalHarga.toLocaleString("id-ID")}`;

  // Bersihkan data dari Local Storage (opsional)
  localStorage.removeItem("transaksi");
} else {
  // Jika tidak ada data, tampilkan pesan
  const table = document.getElementById("transaksiTable");
  const row = table.insertRow();
  const cell = row.insertCell(0);
  cell.colSpan = 5;
  cell.textContent = "Tidak ada data transaksi.";
  cell.style.textAlign = "center";
}
