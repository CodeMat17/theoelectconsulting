export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheoElect Consulting",
    url: "https://theoelect.com",
    logo: "https://theoelect.com/logo.png",
    description:
      "Leading anti-corruption consultancy firm specializing in governance, transparency, and institutional reforms.",
    founder: {
      "@type": "Person",
      name: "Olukile Olusesan",
      jobTitle: "Chief Vision Driver & Ex-Commissioner (ICPC)",
      description: "Security Psychologist and Anti-Corruption Expert",
    },
    sameAs: [
      "https://www.amazon.com/stores/author/B0BGLXNZFD",
      // Add other social media profiles here
    ],
    knowsAbout: [
      "Anti-corruption strategies",
      "Governance consulting",
      "Institutional reforms",
      "Ethics and compliance",
      "Corruption risk assessment",
      "Public sector transparency",
    ],
    publishingPrinciples: "https://theoelect.com/about",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Anti-Corruption Publications",
      itemListElement: [
        {
          "@type": "Book",
          name: "Anti-Corruption Agencies in Nigeria",
          author: "Olukile Olusesan",
          url: "https://www.amazon.com/gp/product/B0BGLXNZFD",
        },
        {
          "@type": "Book",
          name: "Building Viable Anti-Corruption Institutions",
          author: "Olukile Olusesan",
          url: "https://www.amazon.com/dp/B0BGM2QB2G",
        },
      ],
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
