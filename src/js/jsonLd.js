import siteData from "../../data/siteData.json"
import { info } from "../../data/info"
import { slugify } from "./utils";

export default function jsonLDGenerator({ type, post, url, data }) {
  const website = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: siteData.title,
    url: import.meta.env.SITE,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ateş Oto Kurtarma",
    image: `${import.meta.env.SITE}og-image.png`,
    "@id": url,
    url: import.meta.env.SITE,
    telephone: info.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bursa/Yıldırım Eğitim Mahallesi", 
      addressLocality: "Bursa",
      postalCode: "16000", // Bursa için genel bir posta kodu
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.1885, // Bursa koordinatları (Örnek)
      longitude: 29.0609, // Bursa koordinatları (Örnek)
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  if (type === "post") {
    const postSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "headline": post.title,
        "description": post.description,
        "image": post.image.src,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": `/author/${slugify(post.author)}`
        },
        "datePublished": post.date
      };
    return `<script type="application/ld+json">${JSON.stringify([website, localBusiness, postSchema])}</script>`;
  }

  if (type === "breadcrumb" && data?.breadcrumbs) {
      const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `${import.meta.env.SITE}${item.href}`.slice(0, -1)
          }))
      };
      return `<script type="application/ld+json">${JSON.stringify([website, localBusiness, breadcrumbSchema])}</script>`;
  }

  return `<script type="application/ld+json">${JSON.stringify([website, localBusiness])}</script>`;
}