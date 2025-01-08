// Ambil elemen formulir
const form = document.querySelector("form");

// Tambahkan event listener untuk menangani submit
form.addEventListener("submit", function (event) {
  // Mencegah pengiriman default formulir
  event.preventDefault();

  // Ambil nilai username dan password dari input
  const usernameInput = document.querySelector("#username").value;
  const passwordInput = document.querySelector("#password").value;

  // Username dan password yang valid
  const validUsername = "muhammadfarhan";
  const validPassword = "passwordfarhan";

  // Validasi username dan password
  if (usernameInput === validUsername && passwordInput === validPassword) {
    // Jika valid, arahkan ke transaksi.html
    alert("Login berhasil!");
    window.location.href = "transaksi.html";
  } else {
    // Jika tidak valid, tampilkan pesan kesalahan
    alert("Username atau password salah!");
  }
});
