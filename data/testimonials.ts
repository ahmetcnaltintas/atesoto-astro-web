export interface Testimonial {
  name: string;
  location: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Uğurcan Öztürk",
    location: "Bursa / Nilüfer",
    message:
      "Gece yarısı aracım bozuldu ve Bursa yakın çekici ararken Ateş Oto Kurtarma'yı buldum. Çok hızlı geldiler, profesyonel ve güler yüzlüydüler. Hem uygun fiyatlı hem de güvenilir bir oto kurtarma hizmeti.",
  },
  {
    name: "Caner Koçer",
    location: "Bursa / Yıldırım",
    message:
      "Yolda kaldığınızda Bursa çekici hizmeti için ilk aranması gereken yer bence burası! İletişimleri çok iyi, acil yol yardımı için dakikalar içinde geldiler. Böyle profesyonel bir oto kurtarıcıyı Bursa’da bulmak harika.",
  },
  {
    name: "Berkcan Beyoğlu",
    location: "Bursa / Gürsu",
    message:
      "Uzun yolda lastiğim patladı, ne yapacağımı bilemedim. Bursa yakın oto kurtarma olarak arattım, bursayakincekici.com hemen çıktı. 20 dakikada geldiler, çok ilgililerdi.",
  }
];
