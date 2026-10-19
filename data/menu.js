// Sumber data lokal (array of object) - tanpa database.
// Setiap menu punya ID unik yang dipakai oleh route parameter /menu/:id
const menu = [
  {
    id: 1,
    nama: "Americano",
    kategori: "kopi",
    harga: 18000,
    deskripsi:
      "Espresso yang dicampur air panas, ringan dan bersih tanpa susu. Pas untuk kamu yang suka rasa kopi yang asli.",
    foto: "/img/Americano.webp",
  },
  {
    id: 2,
    nama: "Caramel Iced Latte",
    kategori: "kopi",
    harga: 20000,
    deskripsi:
      "Espresso, susu segar, dan sirup karamel yang disajikan dingin dengan es batu. Manis, creamy, dan menyegarkan di siang hari.",
    foto: "/img/Caramel-Iced-Latte.webp",
  },
  {
    id: 3,
    nama: "Gula Aren",
    kategori: "kopi",
    harga: 20000,
    deskripsi:
      "Espresso dan susu segar dengan gula aren asli yang manis dan harum. Rasa kopinya lembut dengan aftertaste karamel alami.",
    foto: "/img/Gula-Aren.webp",
  },
  {
    id: 4,
    nama: "Hazelnut Latte",
    kategori: "kopi",
    harga: 20000,
    deskripsi:
      "Perpaduan espresso, susu segar, dan sirup hazelnut yang gurih dan wangi. Lembut, creamy, dan cocok dinikmati panas maupun dingin.",
    foto: "/img/Hazelnut-Latte.webp",
  },
  {
    id: 5,
    nama: "Matcha Latte",
    kategori: "non-kopi",
    harga: 20000,
    deskripsi:
      "Matcha premium dikocok bersama susu segar. Pilihan tepat untuk yang tidak minum kopi.",
    foto: "/img/Matcha-Latte.webp",
  },
  {
    id: 6,
    nama: "Es Cokelat",
    kategori: "non-kopi",
    harga: 15000,
    deskripsi:
      "Cokelat pekat dengan susu dan es batu, disajikan dingin dengan topping krim tipis.",
    foto: "/img/Es-Cokelat.webp",
  },
  {
    id: 7,
    nama: "Nasi Goreng",
    kategori: "makanan",
    harga: 20000,
    deskripsi:
      "Nasi goreng bumbu khas dengan telur mata sapi, ayam suwir, kerupuk, dan acar segar.",
    foto: "/img/Nasi-Goreng.webp",
  },
  {
    id: 8,
    nama: "Roti Bakar Cokelat Keju",
    kategori: "cemilan",
    harga: 15000,
    deskripsi:
      "Roti tebal dipanggang renyah dengan isian cokelat leleh dan parutan keju.",
    foto: "/img/Roti-Bakar-Cokelat-Keju.webp",
  },
];

module.exports = menu;
