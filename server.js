// ==================== IMPORT MODUL ====================
const express = require("express");
const path = require("path");
const menu = require("./data/menu");

const app = express();
const PORT = process.env.PORT || 3000;
const NAMA_TOKO = "Sun Beans Coffee";

// ==================== KONFIGURASI VIEW ENGINE ====================
// Mengunci folder views memakai path absolut (__dirname = folder file ini)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ==================== STATIC FILES ====================
// Menyajikan CSS dan gambar dari folder public (path absolut)
app.use(express.static(path.join(__dirname, "public")));

// ==================== ROUTE 1: HALAMAN KATALOG ====================
// Contoh URL: /  atau  /?kategori=kopi
app.get("/", (req, res) => {
  // Membaca QUERY PARAMETER dari URL (req.query)
  const kategoriDipilih = req.query.kategori;

  // Daftar kategori unik untuk tombol filter
  const daftarKategori = [...new Set(menu.map((item) => item.kategori))];

  // Menyaring array: jika ada query kategori, ambil yang cocok saja
  let hasil = menu;
  if (kategoriDipilih) {
    hasil = menu.filter(
      (item) => item.kategori.toLowerCase() === kategoriDipilih.toLowerCase()
    );
  }

  // Mengirim data ke template EJS
  res.render("index", {
    judul: "Daftar Menu",
    namaToko: NAMA_TOKO,
    menu: hasil,
    daftarKategori: daftarKategori,
    kategoriAktif: kategoriDipilih || "",
  });
});

// ==================== ROUTE 2: HALAMAN DETAIL ====================
// Contoh URL: /menu/3
app.get("/menu/:id", (req, res) => {
  // Membaca ROUTE PARAMETER dari URL (req.params)
  // Nilainya selalu string, jadi diubah ke angka
  const id = parseInt(req.params.id, 10);

  // Mencari satu data berdasarkan ID unik
  const item = menu.find((m) => m.id === id);

  // Jika ID tidak ditemukan -> tampilkan halaman "tidak ditemukan"
  if (!item) {
    return res.status(404).render("404", {
      judul: "Menu Tidak Ditemukan",
      namaToko: NAMA_TOKO,
      pesan: `Menu dengan ID "${req.params.id}" tidak ada di daftar kami.`,
    });
  }

  res.render("detail", {
    judul: item.nama,
    namaToko: NAMA_TOKO,
    item: item,
  });
});

// ==================== 404 UNTUK URL LAIN ====================
app.use((req, res) => {
  res.status(404).render("404", {
    judul: "Halaman Tidak Ditemukan",
    namaToko: NAMA_TOKO,
    pesan: "Halaman yang kamu cari tidak tersedia.",
  });
});

// ==================== JALANKAN SERVER ====================
app.listen(PORT, () => {
  console.log(`Server ${NAMA_TOKO} berjalan di http://localhost:${PORT}`);
});
