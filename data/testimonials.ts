export interface Testimonial {
  name: string;
  location: string;
  message: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Ahmet Yılmaz",
        location: "Bursa / Nilüfer",
        message: "Gece yarısı yolda kaldım, çok hızlı ve profesyonel şekilde geldiler. Personel çok kibar ve işini iyi yapan insanlardı. Fiyatı da makuldü. Böyle güvenilir hizmet bulmak zor, kesinlikle tavsiye ederim.",
    },
    {
        name: "Elif Demir",
        location: "Bursa / Yıldırım",
        message: "Yolda kaldığınızda panik yapmadan aramanız gereken ilk yer burası! Hem iletişimleri çok iyi hem de çekici hemen geldi. Bursa'da böyle profesyonel bir çekici hizmeti bulmak çok güzel.",
    },
    {
        name: "Caner Koçer",
        location: "Bursa / Gürsu",
        message: "Uzun yolda lastik patladı, ne yapacağımı bilemedim. bursayakincekici.com'u aradım, 20 dakikada geldiler. Hem hızlı hem de çok ilgiliydiler. Bursa'da çekici hizmeti denince artık ilk tercihim burası.",
    },
]