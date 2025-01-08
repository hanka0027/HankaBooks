// Tangani submit formulir
const form = document.getElementById("daftar_transaksi");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil data input
  // const namaBuku = document.getElementById("nama_buku").value;
  // const jumlahBuku = parseInt(document.getElementById("jumlah_buku").value);
  // const kategoriBuku = document.getElementById("kategori_buku").value;

  // Ambil data input
  const namaBuku = document.getElementById("nama_buku").value;
  const jumlahBuku = parseInt(document.getElementById("jumlah_buku").value);

  // Ambil teks dari pilihan yang dipilih
  const kategoriBukuSelect = document.getElementById("kategori_buku");
  const kategoriBuku = kategoriBukuSelect.options[kategoriBukuSelect.selectedIndex].text;

  // Tentukan harga berdasarkan kategori
  const hargaPerKategori = {
    Novel: 80000,
    "Buku Pelajaran": 50000,
    Ensiklopedia: 120000,
    Atlas: 45000,
    Komik: 65000,
    Religi: 135000,
    Hukum: 200000,
    "Ilmu Sosial": 90000,
    "Matematika dan Teknik": 150000,
    Kedokteran: 1200000,
    Biologi: 150000,
    Masakan: 45000,
    Majalah: 55000,
    "Pengembangan Diri": 60000,
    Biografi: 100000,
  };

  const hargaBuku = hargaPerKategori[kategoriBuku] || 0;

  // Simpan data di Local Storage
  const transaksiData = { namaBuku, jumlahBuku, kategoriBuku, hargaBuku };
  localStorage.setItem("transaksi", JSON.stringify(transaksiData));

  // Arahkan ke halaman daftar_transaksi.html
  window.location.href = "daftar_transaksi.html";
});
