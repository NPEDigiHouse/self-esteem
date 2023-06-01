export interface IQuestionPack {
  question: string;
  isPositive: boolean;
}

export const TempQuestionPack: Array<IQuestionPack> = [
  {
    question:
      "Teman teman dalam organisasi saya selalu mengandalkan saya Untuk memberikan pendapat terkait organisasi",
    isPositive: true
  },
  {
    question: "Saya merasa kurang percaya diri saat presentasi di depan kelas",
    isPositive: false
  },
  {
    question: "Saya selalu merasa percaya diri saat tampil di depan kelas",
    isPositive: true
  },
  {
    question: "Teman saya selalu membicarakan kekurangan yang saya miliki",
    isPositive: false
  },
  {
    question: "Saya selalu memberi tanggapan saat ada presentasi di kelas",
    isPositive: true
  },
  {
    question: "Saya selalu merasa percaya diri saat tampil didepan kelas",
    isPositive: true
  },
  {
    question: "Saya lebih menyukai menjadi audiens daripada presentator",
    isPositive: false
  },
  {
    question: "Saya merasa dikucilkan ketika bersama teman saya",
    isPositive: false
  },
  {
    question: "Saya merasa gugup berada di keramaian",
    isPositive: false
  },
  {
    question:
      "Saya merasa jantung berdegup kencang dan sulit mengatur nafas saat berada didepan kelas",
    isPositive: false
  },
  {
    question: "Saya merasa lebih tenang jika berada ditempat sepi",
    isPositive: false
  },
  {
    question: "Saya bicara terbata-bata saat berbicara di depan umum",
    isPositive: false
  },
  {
    question:
      "Guru sekolah selalu memberi pujian atas prestasi dan kerja keras saya",
    isPositive: true
  },
  {
    question: "Saya merasa teman-teman dikelas tidak tertarik dengan saya",
    isPositive: false
  },
  {
    question: "Saya selalu menghindar bergaul dengan teman yang kurang baik",
    isPositive: false
  },
  {
    question:
      "Guru sekolah sering mengejek atau mengkritik saya secara tidak adil",
    isPositive: false
  },
  {
    question:
      "Saya selalu percaya diri bahwa teman teman saya selalu ingin berteman dengan saya",
    isPositive: true
  },
  {
    question: "Berteman memudahkan kita bersosialisasi",
    isPositive: true
  },
  {
    question: "Guru sekolah merendahkan saya di depan teman-teman sekelas",
    isPositive: false
  },
  {
    question:
      "Saya merasa bahwa teman teman saya selalu mengintimidasi saya saat di kelas",
    isPositive: false
  },
  {
    question: "Saat bersama teman-teman saya selalu diajak untuk membolos",
    isPositive: false
  },
  {
    question: "Saya memilih berdiam diri dirumah daripada ikut teman liburan",
    isPositive: false
  },
  {
    question: "Menyapa bapak dan ibu guru ketika bertemu di luar sekolah",
    isPositive: true
  },
  {
    question:
      "Saya suka berkumpul bersama saudara atau kerabat yang datang kerumah",
    isPositive: true
  },
  {
    question: "Saya akan keluar bersama teman ke sebuah tempat saat libur",
    isPositive: true
  },
  {
    question:
      "Ketika ada saudara atau kerabat yang datang ke rumah saya memilih berdiam diri di dalam kamar",
    isPositive: false
  },
  {
    question:
      "Bersembunyi ketika bertemu bapak dan ibu guru saat bertemu di luar sekolah",
    isPositive: false
  },
  {
    question: "Menghampiri bapak dan ibu guru ketika bertemu di luar sekolah",
    isPositive: true
  },
  {
    question: "Saya selalu ikut liburan bersama teman saat libur sekolah",
    isPositive: true
  },
  {
    question:
      "Saya memilih bertemu teman saat saudara atau kerabat datang kerumah",
    isPositive: true
  },
  {
    question:
      "Saya sering kesulitan untuk menemukan kata-kata yang tepat untuk memulai percakapan dengan orang baru",
    isPositive: false
  },
  {
    question: "Saya percaya diri sepenuhnya saat tampil didepan umum",
    isPositive: true
  },
  {
    question:
      "Saya merasa tertekan atau khawatir tentang kesan yang saya berikan saat berinteraksi dengan orang baru",
    isPositive: false
  },
  {
    question: "Saat di tempat les saya memiliki teman yang banyak",
    isPositive: true
  },
  {
    question: "Saya selalu mengabaikan teman saya saat berada ditempat les",
    isPositive: false
  },
  {
    question:
      "Saya merasa nyaman dan santai saat berbicara dengan orang baru, tanpa perlu berpura-pura atau berusaha terlalu keras",
    isPositive: true
  },
  {
    question:
      "Saat bertemu teman baru di tempat les saya enggan untuk menyapa terlebih dahulu",
    isPositive: false
  },
  {
    question: "Saya selalu terbuka dengan masukan dari kakak kelas",
    isPositive: true
  },
  {
    question: "Saya mencoba membangun tujuan yang ingin kami dicapai bersama",
    isPositive: true
  },
  {
    question: "Saya merasa takut akan penilaian kakak kelas terhadap saya",
    isPositive: false
  },
  {
    question:
      "Saya merasa berkeringat berlebihan saat berkerja sama dengan kakak kelas",
    isPositive: false
  },
  {
    question: "Saya selalu menunduk ketika gugup",
    isPositive: false
  },
  {
    question:
      "Saya selalu diam dan tidak berbicara saat berkerja sama dengan kakak kelas",
    isPositive: false
  },
  {
    question: "Saya berusaha membangun kepercayaan dengan kakak kelas",
    isPositive: true
  },
  {
    question: "Kaki saya selalu gemetar saat tampil didepan umum",
    isPositive: false
  }
];

export function getQuestionPack(){
  return TempQuestionPack.sort(() => Math.random() - 0.5);
}