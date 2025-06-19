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
    title: "Yol Yardım Hizmeti",
    description: "Acil durumlarda, trafik kazalarında ve benzeri durumlarda hızlı ve güvenilir yol yardım hizmeti sunuyoruz.",
    features: [
      "Trafik kazalarında acil destek",
      "Araç arızalarında yerinde müdahale",
      "Güvenli ve hızlı hizmet"
    ]
  },
  {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    iconPath: "/images/2icon.png",
    title: "7/24 Kesintisiz Hizmet",
    description: "Her zaman yanınızdayız, günün her saati ve haftanın her günü kesintisiz hizmet veriyoruz.",
    features: [
      "7/24 müşteri desteği",
      "Acil durumlarda hızlı müdahale",
      "Her zaman ulaşılabilir ekip"
    ]
  },
  {
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    iconPath: "/images/3icon.png",
    title: "Araç Taşıma Hizmeti",
    description: "Arızalı veya hasarlı araçlarınızı güvenli şekilde istediğiniz adrese taşıyoruz.",
    features: [
      "Hafif ve ağır araç taşıma",
      "Hasar görmüş araçlarda güvenli taşıma",
      "Profesyonel ekip ve ekipman"
    ]
  }
];
