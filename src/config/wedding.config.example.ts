import type { WeddingConfig } from './types';

/**
 * ============================================================
 *  CONTOH CONFIG (data palsu) — file ini yang masuk ke git.
 *
 *  Data asli kamu ada di `wedding.config.ts` (di folder yang sama),
 *  yang dibuat otomatis dari file ini saat `npm run dev` / `npm run build`
 *  dan TIDAK ikut ter-commit (lihat .gitignore). Edit file itu, bukan ini.
 *
 *  Foto pribadi taruh di public/private/ (juga tidak ter-commit).
 * ============================================================
 */
export const wedding: WeddingConfig = {
  theme: 'samudra',
  allowThemePreview: true,

  site: {
    url: '',
    description: 'Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.',
    ogImage: '/gambar/og.jpg',
    indexable: false,
  },

  timezone: 'WIB',

  couple: {
    order: 'groom-first',
    groom: {
      nickname: 'Adnin',
      fullName: 'Muhammad Adnin',
      photo: '/gambar/gambar15.jpg',
      childOrder: 'Putra keempat dari',
      father: 'Bapak Tomir',
      mother: 'Ibu Wasiah',
      instagram: '@adnineee',
    },
    bride: {
      nickname: 'Meli',
      fullName: 'Meli Wiliani',
      photo: '/gambar/gambar6.jpg',
      childOrder: 'Putri ketiga dari',
      father: 'Bapak Toani',
      mother: 'Ibu Warti',
      instagram: '@MeliWiliani',
    },
    hashtag: '#AdninMeliHalalJourney',
  },

  coverImage: '/gambar/gambar2.jpg',
  heroImage: '/gambar/gambar17.jpg',

  events: [
    {
      title: 'Syukuran Sederhana',
      date: '2027-03-12',
      start: '08:00',
      end: '20:00',
      venue: 'Kediaman Mempelai Pria',
      address: 'Jl. DK Gintung RT. 019/003 Kel. Plakaran Kec. Moga Kab. Pemalang Jawa Tengah',
      mapsUrl: 'https://maps.app.goo.gl/WxjBa6zf2CB6QjfU7',
      note: 'Khusus keluarga & kerabat dekat',
      // Contoh dress code khusus acara ini:
      dressCode: { note: 'Putih & broken white', colors: [{ hex: '#FFFFFF', name: 'Putih' }, { hex: '#F3EEE4', name: 'Broken White' }] },
    },
    {
      title: 'Akad Nikah & Resepsi',
      date: '2027-03-14',
      start: '08:00',
      end: '20:00',
      venue: 'Kediaman Mempelai Wanita',
      address: 'Jl. Ds Karangsari RT 02/RW 01 Kecamatan Pulosari Kabupaten Pemalang',
      mapsUrl: 'https://maps.app.goo.gl/ZwRC6jfs1hbGTeU48',
    },
  ],

  // colors: 'theme' = otomatis mengikuti tema. Atau custom, contoh:
  // colors: ['#F4F7FB', { hex: '#7F9DC2', name: 'Dusty Blue' }]
  dressCode: {
    colors: 'theme',
  },

  quote: {
    arabic:
      'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ',
    translation:
      'Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.',
    source: 'QS. Ar-Rum : 21',
  },

  story: {
    enabled: true,
    items: [
      {
        date: 'Januari 2024',
        title: 'Pertama Bertemu',
        description: 'Atas izin Allah, kami dipertemukan di Sosial Media. Sederhana, tapi ternyata jadi awal segalanya.',
        image: '/gambar/gambar4.jpg',
      },
      {
        date: 'Februari 2024',
        title: "PDKT",
        description: 'Dengan niat baik dan rasa ingin tahu, kami memulai proses saling mengenal.',
        image: '/gambar/gambar10.jpg',
      },
      {
        date: '31 maret 2025',
        title: 'Lamaran',
        description: 'Dua keluarga bertemu dan bersepakat. Bismillah, kami melangkah ke jenjang berikutnya.',
        image: '/gambar/gambar16.jpg',
      },
    ],
  },

  gallery: {
    enabled: true,
    photos: [
      { src: '/gambar/gambar1.jpg', alt: 'Potret pengantin wanita' },
      { src: '/gambar/gambar2.jpg', alt: 'Potret ceria bersama di bawah langit biru' },
      { src: '/gambar/gambar3.jpg', alt: 'Potret ceria bersama di bawah langit biru' },
      { src: '/gambar/gambar4.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar5.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar6.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar7.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar8.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar9.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar10.jpg', alt: 'Momen romantis di tengah bunga' },
      { src: '/gambar/gambar11.jpg', alt: 'Foto kenangan di kamera instan' },
      { src: '/gambar/gambar13.jpg', alt: 'Potret resmi kedua mempelai' },
      { src: '/gambar/gambar14.jpg', alt: 'Potret studio bersama' },
      { src: '/gambar/gambar15.jpg', alt: 'Potret studio berdiri bersama' },
      { src: '/gambar/gambar17.jpg', alt: 'Momen hangat di sesi foto studio' },
      { src: '/gambar/gambar18.jpg', alt: 'Potret santai bersama' },
      { src: '/gambar/gambar19.jpg', alt: 'Potret santai bersama' },
    ],
    youtube: '',
  },

  liveStream: {
    enabled: false,
    platform: 'YouTube',
    url: 'https://youtube.com/live/',
  },

  rsvp: {
    enabled: true,
    whatsapp: '085210463701',
    maxGuests: 3,
    deadline: '2027-03-14',
  },

  wishes: {
    enabled: true,
    pageSize: 8,
  },

  gift: {
    enabled: true,
    collapsed: true,
    accounts: [
      { type: 'bank', provider: 'BRI', number: '052301021303508', holder: 'Muh. Adnin', logo: '/images/logos/BRI.svg' },
      { type: 'bank', provider: 'BRI', number: '750101019845535', holder: 'Meli Wiliani', logo: '/images/logos/BRI.svg' },
    ],
    address: {
      recipient: 'Muh. Adnin',
      phone: '085210463701',
      address: 'Jl. DK Gintung RT. 019/003 Kel. Plakaran Kec. Moga Kab. Pemalang Jawa Tengah',
    },
  },

  music: {
    enabled: true,
    src: '/music/song1.mp3',
    title: 'Backsound',
  },

  googleSheets: {
    url: '',
  },

  checkin: {
    enabled: true,
  },

  photobooth: {
    enabled: true,
  hashtag: '#AdninMeliHalalJourney',
  },

  effects: {
    envelope: true,
    tapBurst: true,
    parallax: true,
  },

  copy: {
    coverLabel: 'The Wedding of',
    localGreeting: 'Sugeng rawuh',
    coverTo: 'Kepada Yth. Bapak/Ibu/Saudara/i',
    coverButton: 'Buka Undangan',
    coverNote: 'Mohon maaf apabila ada kesalahan penulisan nama/gelar',
    salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    opening:
      'Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:',
    closing:
      'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    closingSalam: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
    localThanks: 'Matur nuwun sanget',
    familiesTitle: 'Kami yang berbahagia',
    families: ['Kel. Bapak Tomir & Ibu Wasiah', 'Kel. Bapak Toani & Ibu Warti'],
  },
};
