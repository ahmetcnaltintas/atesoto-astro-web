export interface Service {
  iconBg: string;
  iconColor: string;
  iconPath: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    iconPath: "/images/1icon.png",
    title: "Bursa Yol Yardım Hizmeti",
    description: "Bursa ve çevresinde, acil durumlarda hızlı ve güvenilir yol yardım desteği sunuyoruz.",
    features: [
      "Trafik kazalarında acil destek",
      "Yolda kalan araçlara hızlı çözüm",
      "Güvenli ve profesyonel müdahale"
    ]
  },
  {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    iconPath: "/images/2icon.png",
    title: "7/24 Çekici ve Destek",
    description: "Gece gündüz demeden, haftanın her günü kesintisiz çekici hizmeti sağlıyoruz.",
    features: [
      "7/24 aktif yol yardımı",
      "Acil durumlarda anında müdahale",
      "Her an ulaşılabilir ekip"
    ]
  },
  {
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    iconPath: "/images/3icon.png",
    title: "Araç Çekme ve Taşıma",
    description: "Arızalı veya kaza yapmış araçları güvenli şekilde dilediğiniz adrese taşıyoruz.",
    features: [
      "Tüm araç türlerine uygun taşıma",
      "Kazasız ve güvenli nakliye",
      "Deneyimli ekip ve modern araçlar"
    ]
  }
];

