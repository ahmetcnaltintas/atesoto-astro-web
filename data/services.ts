export interface Service {
  iconBg: string;
  iconColor: string;
  iconPath: string;
  image: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  features: string[];
  labels: string[];
}

export const services: Service[] = [
  {
    labels: [
      "bursa-yol-yardim-hizmeti",
      "bursa-acil-yol-yardim",
      "bursa-oto-yardim",
      "bursa-arac-cekici-yardim",
      "oto-kurtarma-bursa",
      "bursa-en-yakin-cekici",
      "bursa-yakin-cekici"
    ],
    image: "/images/galeri/ates9.webp",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    iconPath: "/images/1icon.png",
    slug: "bursa-yol-yardim-hizmeti",
    title: "Bursa Yol Yardım Hizmeti",
    description: "Bursa ve çevresinde, acil durumlarda hızlı ve güvenilir yol yardım desteği sunuyoruz.",
    content: "Bursa Yol Yardım Hizmeti olarak, şehir içi ve şehirlerarası yollarda aracınızın arıza yapması, akü bitmesi, lastik patlaması veya benzeri durumlarda hızlı ve güvenilir çekici desteği sağlıyoruz. 7/24 aktif çalışan profesyonel ekibimizle, siz nerede olursanız olun dakikalar içinde yanınızdayız. Acil durumlar için özel donanımlı araçlarımızla müdahale ediyor, güvenliğinizi en üst düzeyde tutuyoruz. Bursa’nın tüm ilçelerinde yaygın hizmet ağımızla yol yardım konusunda yanınızdayız.",
    features: [
      "Trafik kazalarında acil destek",
      "Yolda kalan araçlara hızlı çözüm",
      "Güvenli ve profesyonel müdahale"
    ]
  },
  {
    labels: [
      "7-24-cekici-bursa",
      "gece-cekici-bursa",
      "bursa-acil-cekici",
      "bursa-hizli-cekici",
      "bursa-oto-kurtarma",
      "bursa-cekici-numarasi",
      "bursa-en-yakin-cekici"
    ],
    image: "/images/galeri/ates10.webp",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    iconPath: "/images/2icon.png",
    slug: "7-24-cekici-ve-destek",
    title: "7/24 Çekici ve Destek",
    description: "Gece gündüz demeden, haftanın her günü kesintisiz çekici hizmeti sağlıyoruz.",
    content: "7 gün 24 saat kesintisiz çekici ve yol yardım desteğimiz ile Bursa’da yolda kalmak artık sorun değil. Gece gündüz demeden hizmet veren ekibimiz, en kısa sürede bulunduğunuz konuma ulaşır ve aracınızı güvenle çeker. İster kaza sonrası ister mekanik arızalarda, donanımlı araçlarımızla her duruma hazırız. Bursa'da 7/24 çekici hizmeti arıyorsanız, güvenilir ve hızlı çözümlerimizle yanınızdayız.",
    features: [
      "7/24 aktif yol yardımı",
      "Acil durumlarda anında müdahale",
      "Her an ulaşılabilir ekip"
    ]
  },
  {
    labels: [
      "bursa-arac-cekme",
      "bursa-arac-tasima",
      "arac-nakliye-bursa",
      "oto-tasima-bursa",
      "bursa-profesyonel-cekici",
      "bursa-guvenli-cekici",
      "bursa-yakin-cekici",
      "bursa-kaza-sonrasi-cekici"
    ],
    image: "/images/galeri/ates4.webp",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    iconPath: "/images/3icon.png",
    slug: "arac-cekme-ve-tasima",
    title: "Araç Çekme ve Taşıma",
    description: "Arızalı veya kaza yapmış araçları güvenli şekilde dilediğiniz adrese taşıyoruz.",
    content: "Bursa genelinde araç çekme ve taşıma hizmetimizle, arızalı, kaza yapmış veya taşınması gereken araçlarınızı güvenli bir şekilde dilediğiniz adrese ulaştırıyoruz. Modern çekici filomuz ve deneyimli personelimizle araçlarınıza zarar vermeden taşıma işlemlerini gerçekleştiriyoruz. Otomobil, motosiklet, SUV veya ticari araç fark etmeksizin tüm taşıma ihtiyaçlarınızda profesyonel destek sağlıyoruz. Bursa’da güvenli ve uygun fiyatlı araç taşıma hizmeti için bize ulaşın.",
    features: [
      "Tüm araç türlerine uygun taşıma",
      "Kazasız ve güvenli nakliye",
      "Deneyimli ekip ve modern araçlar"
    ]
  },
  {
    labels: [
      "bursa-agir-vasita-cekici",
      "tir-cekici-bursa",
      "kamyon-cekici-bursa",
      "bursa-ticari-arac-cekici",
      "bursa-agir-cekici",
      "bursa-cekici-hizmeti",
      "bursa-agir-arac-yardimi"
    ],
    image: "/images/galeri/ates21.webp",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-700",
    iconPath: "/images/truckicon.svg",
    slug: "agir-vasita-cekici-hizmeti",
    title: "Ağır Vasıta Çekici Hizmeti",
    description: "Tır, kamyon ve ağır vasıta araçlarınız için profesyonel çekici desteği sağlıyoruz.",
    content: "Bursa'da tır, kamyon ve diğer ağır vasıta araçlarınız arızalandığında veya yolda kaldığında, güçlü ekipmanlarımız ve uzman operatörlerimizle güvenli çekici hizmeti sağlıyoruz. Yol trafiğini tehlikeye atmadan, hızlı ve etkili müdahalelerle ağır vasıtalarınızı dilediğiniz lokasyona taşıyoruz. Endüstriyel çekici çözümleri için her zaman hazırız.",
    features: [
      "Tır ve kamyon gibi büyük araçlar için özel çekici",
      "Endüstriyel çözümlerde uzman ekip",
      "Yüksek tonaj taşıma kapasitesi"
    ]
  },
  {
    labels: [
      "bursa-tekne-cekici",
      "tekne-tasima-bursa",
      "bursa-tekne-nakliye",
      "bursa-cekici-hizmeti",
      "ozel-arac-tasima-bursa",
      "bursa-deniz-araci-cekici"
    ],
    image: "/images/galeri/ates14.webp",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    iconPath: "/images/boaticon.svg",
    slug: "tekne-cekici-hizmeti",
    title: "Tekne Çekici Hizmeti",
    description: "Teknelerinizi güvenle ve profesyonel bir şekilde taşıyoruz.",
    content: "Bursa ve çevresinde tekne taşıma ihtiyaçlarınız için özel donanımlı araçlarımız ve deneyimli ekibimizle hizmetinizdeyiz. Tekne çekici hizmetimiz, limanlar arası nakliye, kaza sonrası kurtarma ve özel nakliyeler için idealdir. Geniş araç filomuz, çeşitli boyutlardaki teknelere uygun çözümler sunar. Taşıma öncesi sabitleme ve güvenlik önlemleriyle, teknelerinize zarar gelmesini önlüyoruz.",
    features: [
      "Limanlar arası tekne taşıma",
      "Profesyonel sabitleme ve güvenlik önlemleri",
      "Farklı boyutlardaki teknelere uygun taşıma ekipmanları"
    ]
  },
  {
    labels: [
      "bursa-romork-cekici",
      "bursa-traktor-cekici",
      "bursa-zirai-arac-cekici",
      "traktor-tasima-bursa",
      "bursa-cekici-hizmeti",
      "romork-nakliye-bursa"
    ],
    image: "/images/galeri/ates12.webp",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    iconPath: "/images/traktor.svg",
    slug: "romork-traktor-cekici-hizmeti",
    title: "Römork ve Traktör Çekici Hizmeti",
    description: "Römork, traktör ve diğer tarım araçlarını güvenle taşıyoruz.",
    content: "Bursa'da römork, traktör ve diğer zirai araçların taşınması için özel çekici hizmeti sunuyoruz. Tarım alanlarında sık kullanılan bu araçların arıza yapması veya yer değiştirmesi gerektiğinde, donanımlı çekicilerimizle hızlı ve güvenli taşıma sağlıyoruz. Araçların sabitlenmesi, taşınması ve teslimatı sırasında tüm güvenlik önlemleri alınır. Römork ve traktör taşımacılığında deneyimli ekibimizle kaliteli hizmet sunuyoruz.",
    features: [
      "Tarım araçlarına özel taşıma çözümleri",
      "Römork ve traktör için güvenli çekici hizmeti",
      "Zirai alanda uzmanlaşmış deneyimli ekip"
    ]
  }
];

