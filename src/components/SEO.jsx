import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Dashur AI - Empowering Innovation, Connecting the Future",
  description = "Dashur AI is an innovative tech company dedicated to shaping the future through cutting-edge AI solutions, digital transformation, and exceptional service delivery.",
  keywords = "AI, artificial intelligence, machine learning, digital transformation, tech solutions, innovation, automation, data analytics, cloud computing, software development",
  image = "https://dashur.ai/og-image.jpg",
  url = "https://dashur.ai",
  type = "website",
  author = "Dashur AI",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dashur AI",
    "url": "https://dashur.ai",
    "logo": "https://dashur.ai/logo.png",
    "description": description,
    "foundingDate": "2023",
    "sameAs": [
      "https://linkedin.com/company/dashur-ai",
      "https://twitter.com/dashur_ai",
      "https://facebook.com/dashur.ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@dashur.ai"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Your City",
      "addressRegion": "Your State"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#02A9F7" />
      <meta name="msapplication-TileColor" content="#02A9F7" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dashur AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dashur_ai" />
      <meta name="twitter:creator" content="@dashur_ai" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Dashur AI - Empowering Innovation" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
