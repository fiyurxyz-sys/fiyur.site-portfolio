// Yeni site eklemek: aşağıdaki diziye bir nesne ekle. Başka hiçbir yere dokunma.
//
// iframeIzni: true  -> modalda iframe ile açılır
//             false -> iframe denenmez, ekran görüntüsü + "Yeni sekmede aç" gösterilir
//             null  -> bilmiyorum: iframe denenir, açılmazsa otomatik fallback'e düşer
// ekranGoruntusu: "/sites/dosya.jpg" (public/sites/ içine koy, 16:10 oran) ya da "placeholder"
// url boşsa kart "Yakında" olarak görünür ve modal açılmaz.

export interface Site {
  ad: string;
  url: string;
  kategori: string;
  aciklama: string;
  teknolojiler: string[];
  ekranGoruntusu: string;
  iframeIzni: boolean | null;
}

export const sites: Site[] = [
  {
    ad: '[YER TUTUCU] Site 1',
    url: '',
    kategori: '[Kategori A]',
    aciklama: '[YER TUTUCU] Tek cümlelik açıklama buraya gelecek.',
    teknolojiler: ['HTML', 'CSS', 'JavaScript'],
    ekranGoruntusu: 'placeholder',
    iframeIzni: null,
  },
  {
    ad: '[YER TUTUCU] Site 2',
    url: '',
    kategori: '[Kategori B]',
    aciklama: '[YER TUTUCU] Tek cümlelik açıklama buraya gelecek.',
    teknolojiler: ['HTML', 'CSS', 'JavaScript'],
    ekranGoruntusu: 'placeholder',
    iframeIzni: null,
  },
  {
    ad: '[YER TUTUCU] Site 3',
    url: '',
    kategori: '[Kategori A]',
    aciklama: '[YER TUTUCU] Tek cümlelik açıklama buraya gelecek.',
    teknolojiler: ['Python', 'JavaScript'],
    ekranGoruntusu: 'placeholder',
    iframeIzni: null,
  },
];
