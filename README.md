# Sun Beans Coffee — Tugas 2 Pemrograman Web

Aplikasi katalog menu coffee shop **Sun Beans Coffee** (Tema A) menggunakan **Node.js, Express, dan EJS** dengan Server-Side Rendering. Data berasal dari array JavaScript lokal (tanpa database).

- Mata Kuliah: Pemrograman Web — Universitas Pendidikan Nasional
- Nama: Zintia Adella
- NIM: 42530036
- Tema: A — Daftar Menu Kafe / Makanan

## Video Penjelasan (YouTube, Publik)

[https://youtu.be/BkgVO0pYV7o]

## Fitur

| URL | Fungsi |
| --- | --- |
| `/` | Daftar semua menu |
| `/?kategori=kopi` | Filter menu via **query parameter** (`req.query`) |
| `/menu/:id` | Detail menu via **route parameter** (`req.params`) |
| URL / ID tidak valid | Halaman "Data tidak ditemukan" (404) |

Kategori yang tersedia: `kopi`, `non-kopi`, `makanan`, `camilan`.

## Struktur Proyek

```
pemweb-tugas2/
├── server.js              # Server Express + routing
├── data/menu.js           # Data menu (array of object)
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Navbar + pembuka HTML
│   │   └── footer.ejs     # Footer + penutup HTML
│   ├── index.ejs          # Halaman katalog
│   ├── detail.ejs         # Halaman detail
│   └── 404.ejs            # Halaman data tidak ditemukan
├── public/
│   ├── css/style.css
│   └── img/               # Foto menu
├── package.json
└── .gitignore
```

## Cara Menjalankan

```bash
npm install
npm start
```

Buka http://localhost:3000
