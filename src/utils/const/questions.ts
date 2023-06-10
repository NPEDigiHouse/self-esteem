export interface IQuestionPack {
  question: string;
  isPositive: boolean;
}

export interface IQuestionPackType {
  type: string;
  questions: Array<IQuestionPack>;
}

export const KekuatanQuestionPack: Array<IQuestionPack> = [
  {
    question:
      "Saya mampu mengungkapkan apa yang sedang saya rasakan kepada orang lain (F)",
    isPositive: true
  },
  {
    question:
      "Saya mampu memotivasi teman dengan nasihat yang saya berikan (F)",
    isPositive: true
  },
  {
    question:
      "Ketika memberikan nasihat, terkadang teman saya mengabaikan nya  (UF)",
    isPositive: false
  },
  {
    question:
      "Saya hanya bisa berteman dengan orang yang karakternya sama dengan saya (F)",
    isPositive: true
  },
  {
    question:
      "Saya dapat bersikap tenang dan mengontrol diri ketika berada pada sesuatu pilihan yang sulit (F)",
    isPositive: true
  },
  {
    question: "Saya senang ketika teman menghargai pendapat saya (F)",
    isPositive: true
  },
  {
    question: "Orang lain dapat meniru perilaku saya (F)",
    isPositive: true
  }
];

export const KeberartianQuestionPack: Array<IQuestionPack> = [
  {
    isPositive: true,
    question: "Saya merasa diri saya berharga sama seperti orang lain (F)"
  },
  {
    isPositive: true,
    question:
      "Ketika saya berulangtahun, teman-teman dekat saya memberikan ucapan selamat(F)"
  },
  {
    isPositive: false,
    question: "Saya merasa bahwa saudara saya lebih baik dari pada saya (UF)"
  },
  {
    isPositive: false,
    question: "Saya diperlakukan berbeda oleh teman atau keluarga (UF)"
  },
  {
    isPositive: false,
    question:
      "Keluarga memaksakan untuk melakukan sesuatu yang tidak saya sukai (UF)"
  },
  {
    isPositive: true,
    question: "Secara kesuluruhan, saya puas dengan diri saya sendiri (F)"
  },
  {
    isPositive: false,
    question: "Saya akan merasa sombong setelah dipuji oleh orang lain (UF)"
  },
  {
    isPositive: false,
    question: "Saya kurang puas dengan diri saya sendiri (UF)"
  },
  {
    isPositive: false,
    question:
      "Saya kurang mampu mengindentifikasi kelebihan dan kelemahan diri saya (UF)"
  },
  {
    isPositive: false,
    question:
      "Saya mengikuti les untuk mengembangkan kemampuan akademik saya (UF)"
  },
  {
    isPositive: true,
    question:
      "Saya berani keluar dari zona nyaman dan akan menghilangkan rasa takut yang membuat saya menjadi sosok yang lemah (F)"
  },
  {
    isPositive: true,
    question:
      "Saya bisa berteman baik dengan siapa saja tanpa memandang perbedaan suku, agama, ataupun status ekonomi (F)"
  }
];

export const KebajikanQuestionPack: Array<IQuestionPack> = [
  {
    question:
      "Saya merasa masih kurang sempurna dalam mengerjakan ibadah sholat (F)",
    isPositive: true
  },

  {
    question:
      "Berbakti kepada orang tua adalah suatu kewajiban yang harus saya jalankan  (F)",
    isPositive: true
  },

  {
    question:
      "Saya tetap makan atau minum didepan teman yang sedang berpuasa (UF)",
    isPositive: false
  },

  {
    question:
      "Saya melaksanakan ibadah sholat dzuhur berjama’ah dengan teman-teman saya di masjid sekolah (F)",
    isPositive: true
  },

  {
    question:
      "Ketika teman saya sedang berpuasa, saya akan menghargainya dengan tidak makan atau minum didepannya (F)",
    isPositive: true
  },

  {
    question:
      "Saya akan memberitahu teman apabila berbuat sesuatu yang dilarang agama (F)",
    isPositive: true
  },

  {
    question:
      "Saya akan membantu teman yang sedang membutuhkan pertolongan (F)",
    isPositive: true
  },

  {
    question: "Saya mengabaikan teman yang sedang dalam masalah (UF)",
    isPositive: false
  },

  {
    question: "Saya enggan untuk memberikan bantuan kepada orang lain (UF)",
    isPositive: false
  },

  {
    question: "Saya selalu berdoa setiap akan mengerjakan sesuatu (F)",
    isPositive: true
  },

  {
    question:
      "Saya tidak pernah mencela teman yang memiliki pendapat berbeda dengan saya  (F)",
    isPositive: true
  }
];

export const KemampuanDiriQuestionPack: Array<IQuestionPack> = [
  {
    question:
      "Saya memiliki tujuan yang ingin saya capai setelah lulus sekolah (F)",
    isPositive: true
  },

  { question: "Saya mendapat nilai terbaik saat ujian (F)", isPositive: true },

  {
    question:
      "Saya akan membuat tujuan baru saat tujuan yang lama telah tercapai (F)",
    isPositive: true
  },

  {
    question:
      "Saya mendapat prestasi disekolah sehingga orang tua saya memuji saya (F)",
    isPositive: true
  },

  {
    question:
      "Saya mengerjakan segala sesuatu berdasarkan situasi atau kondisi saat ini (UF)",
    isPositive: false
  },

  {
    question:
      "Saya memiliki cara agar  dapat  menyelesaikan semua tugas sekolah dengan baik (F)",
    isPositive: true
  },

  {
    question:
      "Saya merasa senang karena mampu mendapatkan nilai sempurna pada mata pelajaran yang sulit (F)",
    isPositive: true
  },

  {
    question: "Saya tidak menyerah terhadap tugas yang sulit (F)",
    isPositive: true
  },

  {
    question:
      "Saya  kesulitan untuk dapat mengumpulkan tugas atau PR yang sulit tepat waktu (UF)",
    isPositive: false
  },

  {
    question: "Saya mampu menghadapi masalah disekolah dengan baik (F)",
    isPositive: true
  },

  {
    question: "Saya merasa lebih bodoh daripada teman teman saya (UF)",
    isPositive: false
  },

  {
    question:
      "Saat saya mengalami kegagalan, sulit bagi saya untuk bangkit lagi (UF)",
    isPositive: false
  }
];

export function getQuestionPack() {
  const questionPack: Array<IQuestionPackType> = [
    {
      type: "Kekuatan",
      questions: KekuatanQuestionPack.sort(() => Math.random() - 0.5)
    },
    {
      type: "Kebajikan",
      questions: KebajikanQuestionPack.sort(() => Math.random() - 0.5)
    },
    {
      type: "Keberartian",
      questions: KeberartianQuestionPack.sort(() => Math.random() - 0.5)
    },
    {
      type: "Kemampuan Diri",
      questions: KemampuanDiriQuestionPack.sort(() => Math.random() - 0.5)
    }
  ];

  return questionPack;
}
