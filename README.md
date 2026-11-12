<div align="center">

# 💌 Undangan Pernikahan Digital

Undangan pernikahan digital yang hangat, interaktif, dan nyaman dibuka dari ponsel.
Dibuat dengan Next.js, React, Tailwind CSS, dan animasi GSAP — siap diekspor sebagai situs statis.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Lisensi](https://img.shields.io/badge/Lisensi-MIT-green.svg)](LICENSE)

<br />

<a href="#mulai"><img src="https://img.shields.io/badge/🚀_Mulai-Instalasi-315b7d?style=for-the-badge" alt="Mulai instalasi" /></a>
<a href="#kustomisasi-undangan"><img src="https://img.shields.io/badge/✍️_Kustomisasi-Panduan-725b78?style=for-the-badge" alt="Panduan kustomisasi" /></a>
<a href="#deploy"><img src="https://img.shields.io/badge/🌐_Deploy-Publikasi-537b63?style=for-the-badge" alt="Panduan deploy" /></a>
<a href="https://saweria.co/RizalFirmansyah"><img src="https://img.shields.io/badge/☕_Dukung_Proyek-Donasi_via_Saweria-ef8f24?style=for-the-badge" alt="Donasi via Saweria" /></a>

<br /><br />

<img src="public/gambar/Screenshot1.png" alt="Foto pasangan dalam busana pernikahan" width="72%" />

<br />

*Satu tautan untuk berbagi cerita, informasi acara, dan doa di hari bahagia.*

</div>

---

## ✨ Tentang proyek

Website undangan ini dirancang **mobile-first** agar nyaman dibuka dari tautan WhatsApp. Konten undangan diatur dari satu file konfigurasi, dan situs bisa dibangun menjadi file statis untuk di-host di Cloudflare Pages atau layanan hosting lain.

<div align="center">

| 💙 **Samudra** | 🌿 **Taman** | 🌙 **Langit** |
|:---:|:---:|:---:|
| Biru yang anggun | Sage yang alami | Navy yang modern |

</div>

### Fitur utama

- **Sampul amplop interaktif** dengan nama tamu dan segel inisial.
- **Enam tema** dengan palet warna, ornamen, dan animasi yang berbeda.
- **Reveal GSAP + ScrollTrigger** untuk transisi bagian yang halus, dengan dukungan reduced motion.
- Profil pasangan, cerita perjalanan, galeri foto, kutipan, dan hitung mundur acara.
- Tombol kalender, petunjuk Google Maps, kode busana, serta latar musik.
- RSVP melalui WhatsApp, buku ucapan, dan hadiah digital.
- Generator tautan tamu, kartu QR, dan halaman check-in untuk hari acara.
- Photobooth yang membingkai foto untuk Instagram Story atau Feed.
- Ekspor statis, sehingga bisa di-host tanpa server aplikasi yang terus berjalan.

---

## 🧭 Navigasi cepat

<div align="center">

[🚀 Mulai](#mulai) ·
[✍️ Kustomisasi](#kustomisasi-undangan) ·
[🖼️ Foto & musik](#foto-musik-dan-pratinjau-tautan) ·
[🛠️ Fitur interaktif](#fitur-interaktif) ·
[🌐 Deploy](#deploy) ·
[🔒 Privasi](#privasi-data)

</div>

## 🚀 Mulai

### Persyaratan

- Node.js **22 atau lebih baru**
- npm

### Jalankan di komputer

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Saat pertama kali dijalankan, konfigurasi lokal `src/config/wedding.config.ts` akan dibuat otomatis dari file contoh.

Halaman lain yang tersedia:

| Halaman | Kegunaan |
| --- | --- |
| `/` | Undangan |
| `/?to=Nama%20Tamu` | Contoh undangan dengan nama penerima |
| `/generator/` | Membuat tautan dan pesan untuk tamu |
| `/checkin/` | Pemindai QR untuk meja penerima tamu |

### Perintah yang sering dipakai

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan mode pengembangan |
| `npm run typecheck` | Memeriksa tipe TypeScript |
| `npm run lint` | Menjalankan ESLint |
| `npm run build` | Membuat hasil situs statis di folder `out/` |
| `npm start` | Menyajikan hasil build lokal; jalankan `npm run build` lebih dahulu |
| `npm run build:upload` | Build untuk diunggah manual melalui dashboard Cloudflare |
| `npm run deploy` | Build dan deploy ke Cloudflare Pages |
| `npm run images` | Mengoptimalkan gambar dalam folder yang didukung skrip |

---

## ✍️ Kustomisasi undangan

Edit file lokal **`src/config/wedding.config.ts`**. File ini sengaja tidak disertakan di Git. Jika belum ada, jalankan `npm run dev` atau `npm run build` untuk membuatnya dari `src/config/wedding.config.example.ts`.

| Bagian konfigurasi | Yang bisa diatur |
| --- | --- |
| `site` | URL situs, deskripsi tautan, gambar pratinjau, dan pengaturan indeks mesin pencari |
| `theme` | Tema undangan dan izin pratinjau tema |
| `couple` | Nama, foto, nama orang tua, urutan nama, dan tagar |
| `coverImage`, `heroImage` | Foto sampul dan foto utama |
| `events` | Nama acara, tanggal, waktu, lokasi, Google Maps, dan kode busana |
| `story`, `gallery`, `liveStream` | Cerita, galeri foto, video, dan siaran langsung |
| `rsvp`, `wishes` | Konfirmasi kehadiran dan buku ucapan |
| `gift` | Rekening, dompet digital, dan informasi pengiriman hadiah |
| `music`, `effects` | Musik, amplop, parallax, dan efek interaksi |
| `copy` | Salam, teks undangan, penutup, dan nama keluarga |

Contoh pengaturan tema, pasangan, dan foto:

```ts
theme: 'samudra',
allowThemePreview: false,

couple: {
  order: 'groom-first',
  groom: {
    nickname: 'Nama Pria',
    fullName: 'Nama Lengkap Pria',
    photo: '/gambar/gambar21.jpg',
    childOrder: 'Putra pertama dari',
    father: 'Bapak Nama Ayah',
    mother: 'Ibu Nama Ibu',
  },
  bride: {
    nickname: 'Nama Wanita',
    fullName: 'Nama Lengkap Wanita',
    photo: '/gambar/gambar1.jpg',
    childOrder: 'Putri pertama dari',
    father: 'Bapak Nama Ayah',
    mother: 'Ibu Nama Ibu',
  },
},

coverImage: '/gambar/gambar13.jpg',
heroImage: '/gambar/gambar8.jpg',
```

Tipe dan penjelasan setiap bagian ada di [`src/config/types.ts`](src/config/types.ts). Untuk menyembunyikan fitur, ubah opsi `enabled` fitur tersebut menjadi `false`.

### Tema

| Tema | Nuansa |
| --- | --- |
| `samudra` | Biru |
| `jati` | Cokelat alami |
| `gading` | Krem minimalis |
| `priangan` | Maroon dan emas dengan ornamen Sunda |
| `taman` | Sage dan botani |
| `langit` | Navy malam |

Saat pengembangan, tema dapat dicoba melalui pemilih tema. Untuk pratinjau dari tautan situs, atur `allowThemePreview: true`, lalu kunjungi `?theme=jati&preview`. Matikan kembali sebelum membagikan undangan.

---

## 🖼️ Foto, musik, dan pratinjau tautan

### Foto

Semua file di dalam `public/` dapat diakses dari browser. Contohnya:

| Lokasi file | Path di konfigurasi |
| --- | --- |
| `public/gambar/gambar13.jpg` | `'/gambar/gambar13.jpg'` |
| `public/private/foto.webp` | `'/private/foto.webp'` |

Simpan foto yang memang ingin dimuat dan dibagikan oleh situs di folder publik. Untuk foto pribadi, gunakan `public/private/` yang diabaikan Git. Ingat bahwa berkas pada situs hasil deploy dapat diakses oleh siapa pun yang memiliki URL-nya.

Skrip `npm run images` mengoptimalkan gambar di **`public/images/`** dan **`public/private/`**. Skrip ini belum memproses `public/gambar/`.

### Gambar pratinjau WhatsApp

Atur `site.url` ke alamat undangan final dan `site.ogImage` ke gambar pratinjau berukuran **1200 × 630**. Contoh:

```ts
site: {
  url: 'https://undangan.contoh.com',
  ogImage: '/private/og.jpg',
  // ...
},
```

Jika sumber foto ada di folder `public/private/`, buat gambar pratinjau dengan:

```bash
npm run images -- --og public/private/foto-pasangan.jpg
```

WhatsApp dapat menyimpan cache pratinjau lama. Setelah mengubah gambar, coba bagikan tautan dengan parameter versi, misalnya `?v=2`.

### Musik

File audio tidak disertakan di repositori dan musik nonaktif secara default. Tambahkan musik yang kamu miliki atau berlisensi untuk digunakan ke `public/music/`, lalu atur `music.enabled: true` dan `music.src` di konfigurasi. Musik mulai setelah tamu berinteraksi dengan undangan karena browser membatasi pemutaran audio otomatis. Jika pemutaran ditolak atau file tidak dapat dimuat, undangan akan menampilkan notifikasi dan tombol musik dapat digunakan untuk mencoba lagi.

---

## 🛠️ Fitur interaktif

### Tautan khusus untuk tamu

Format tautan: `https://domain-undangan/?to=Nama%20Tamu`. Nama tamu dapat ditampilkan di sampul dan dipakai oleh fitur RSVP atau kartu QR.

Buka `/generator/`, masukkan daftar tamu—satu nama per baris—untuk membuat tautan dan pesan WhatsApp. Nomor WhatsApp dapat ditambahkan setelah koma:

```text
Bapak Ahmad & Keluarga
Teh Rina, 081234567890
```

### RSVP dan buku ucapan

RSVP dapat diarahkan melalui WhatsApp. Google Sheets bersifat opsional untuk mencatat RSVP, ucapan, dan check-in.

1. Buat Google Sheet, lalu buka **Extensions → Apps Script**.
2. Salin isi [`scripts/google-apps-script.gs`](scripts/google-apps-script.gs) ke editor Apps Script dan simpan.
3. Pilih **Deploy → New deployment → Web app**. Atur **Execute as: Me** dan akses **Anyone**.
4. Deploy, salin URL Web App yang berakhiran `/exec`, lalu isi `googleSheets.url` di konfigurasi.

Jangan simpan informasi rahasia di Google Sheet yang dipakai situs.

### Buku ucapan dengan Supabase

Supabase dapat dipakai untuk buku ucapan. Buat proyek Supabase dan isi `NEXT_PUBLIC_SUPABASE_URL` serta `NEXT_PUBLIC_SUPABASE_ANON_KEY` di `.env.local`. Kunci anon memang akan digunakan di browser; aktifkan Row Level Security dan batasi kebijakan akses tabel dengan benar. Integrasi RSVP dan sinkronisasi check-in menggunakan Google Sheets, bukan Supabase.

### QR check-in

- Tamu yang membuka undangan dengan tautan `?to=Nama` dapat melihat kartu QR jika `checkin.enabled` aktif.
- Petugas membuka `/checkin/` di ponsel dan mengizinkan akses kamera.
- Check-in tersimpan di browser perangkat. Jika Google Sheets dikonfigurasi, data juga dapat disinkronkan ke sheet.
- Unduh atau ekspor data secara berkala sebagai cadangan. Akses kamera biasanya memerlukan HTTPS.

### Photobooth

Tamu dapat memilih atau mengambil foto, memilih format Story 9:16 atau Feed 4:5, lalu mengunduh atau membagikan hasilnya. Pemrosesan foto berlangsung di perangkat tamu.

---

## 🌐 Deploy

Proyek menghasilkan situs statis di folder `out/` dan dapat di-host di layanan yang mendukung file statis.

### Cloudflare Pages

Pastikan konfigurasi undangan sudah diisi. Login ke Wrangler satu kali:

```bash
npx wrangler@4 login
```

Buat proyek Pages (satu kali):

```bash
npx wrangler@4 pages project create undangan --production-branch=main
```

Deploy:

```bash
npm run deploy
```

Skrip deploy membangun situs dan mengunggah folder `out/` ke proyek Cloudflare Pages bernama `undangan`. Untuk memakai nama proyek yang berbeda:

```powershell
$env:CF_PAGES_PROJECT = "nama-proyek"
npm run deploy
```

Untuk unggah manual melalui dashboard Cloudflare:

1. Jalankan `npm run build:upload`.
2. Buka **Workers & Pages** di dashboard Cloudflare.
3. Buat deployment Pages dan unggah isi folder `out/`.

### Hosting statis lain

Jalankan `npm run build`, lalu unggah isi folder `out/` ke penyedia hosting pilihan. Untuk men-deploy di subfolder, misalnya `/undangan`:

```powershell
$env:BASE_PATH = "/undangan"
npm run build
```

Pastikan konfigurasi base path sesuai dengan alamat tempat situs dipasang.

---

## 🔒 Privasi data

| Data | Lokasi | Diabaikan Git? |
| --- | --- |:---:|
| Kode dan tema | `src/`, `scripts/` | Tidak |
| Konfigurasi contoh | `src/config/wedding.config.example.ts` | Tidak |
| Konfigurasi undangan lokal | `src/config/wedding.config.ts` | Ya |
| Foto pribadi | `public/private/` | Ya |
| Variabel lingkungan lokal | `.env.local` | Ya |

**Hal penting sebelum publikasi:**

- File di `public/` dan konfigurasi yang dibangun menjadi bagian dari situs dapat diakses publik.
- Jangan menaruh kata sandi, kunci privat, atau informasi sensitif di konfigurasi klien.
- Jangan menyimpan alamat rumah lengkap jika tidak ingin alamat tersebut tersedia bagi siapa pun yang memiliki tautan undangan.
- Periksa `git status` sebelum commit dan pastikan konfigurasi pribadi atau foto privat tidak ikut terlacak.
- Cadangkan `wedding.config.ts` dan `public/private/` secara aman.

---

## ✅ Checklist sebelum dibagikan

- [ ] Nama pasangan, keluarga, tanggal, waktu, dan zona waktu sudah benar.
- [ ] Alamat, pin Google Maps, nomor RSVP, dan rekening sudah dicek ulang.
- [ ] Foto dan musik yang dipakai sudah benar serta boleh ditampilkan ke tamu.
- [ ] URL situs dan gambar pratinjau tautan sudah diatur.
- [ ] `allowThemePreview` sudah `false`.
- [ ] Undangan diuji di ponsel dan desktop.
- [ ] Tautan personal, RSVP, kalender, maps, dan fitur hadiah sudah dicoba.
- [ ] Konfigurasi lokal dan foto pribadi tidak ikut di-commit.
- [ ] Build berhasil sebelum deploy.

---

## 🧰 Struktur proyek

```text
src/
├── app/                 Halaman utama, generator, check-in
├── components/          Bagian undangan, navigasi, UI, dan ornamen
├── config/              Tipe serta konfigurasi undangan
├── lib/                 Utilitas tanggal, QR, RSVP, dan aset
└── themes/              Daftar tema
public/
├── gambar/              Foto yang tersedia secara publik
├── images/              Aset contoh dan logo
└── music/               Tambahkan sendiri audio berlisensi
scripts/
├── deploy.mjs           Build dan deploy Cloudflare Pages
├── ensure-config.mjs    Membuat konfigurasi lokal dari contoh
├── optimize-images.mjs  Optimasi gambar dan gambar pratinjau
└── google-apps-script.gs Integrasi Google Sheets
```

Untuk mengubah urutan bagian undangan, edit `src/app/page.tsx`. Navigasi bawah menyesuaikan urutan bagian secara otomatis.

---

## 💛 Dukung pengembangan

Jika proyek ini bermanfaat, kamu bisa mendukung pengembangannya melalui Saweria. Terima kasih banyak! 🙏

<div align="center">

[![Donasi melalui Saweria](https://img.shields.io/badge/💛_Donasi_sekarang-Saweria-ef8f24?style=for-the-badge)](https://saweria.co/RizalFirmansyah)

</div>

---

<div align="center">

Dibuat dengan ❤️ untuk membantu hari istimewa terasa lebih dekat.

</div>
