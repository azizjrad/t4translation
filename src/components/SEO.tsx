import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "T4Translation - Professional Translation & Interpretation Services",
  description = "Expert translation and interpretation services in Arabic, English, French, and German. Government, legal, medical, business translation with fast turnaround.",
  keywords = "translation services, interpretation, Arabic translation, English translation, French translation, German translation, professional translators",
  canonicalUrl = "https://t4translation.com",
  ogImage = "https://t4translation.com/og-image.png",
  noIndex = false,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", title);
    }

    const ogDescriptionMeta = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute("content", description);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", ogImage);
    }

    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", canonicalUrl);
    }

    // Update Twitter Card tags
    const twitterTitleMeta = document.querySelector(
      'meta[property="twitter:title"]'
    );
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute("content", title);
    }

    const twitterDescriptionMeta = document.querySelector(
      'meta[property="twitter:description"]'
    );
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute("content", description);
    }

    const twitterImageMeta = document.querySelector(
      'meta[property="twitter:image"]'
    );
    if (twitterImageMeta) {
      twitterImageMeta.setAttribute("content", ogImage);
    }

    // Handle robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute(
      "content",
      noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );
  }, [title, description, keywords, canonicalUrl, ogImage, noIndex]);

  return null; // This component doesn't render anything
};

export default SEO;
