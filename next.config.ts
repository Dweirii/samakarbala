import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Keep the old WordPress URLs working.
    return [
      { source: "/about-us", destination: "/en/about", permanent: true },
      { source: "/our-products", destination: "/en/products", permanent: true },
      { source: "/contact-us", destination: "/en/contact", permanent: true },
      { source: "/product/:slug", destination: "/en/products/:slug", permanent: true },
      { source: "/ar/about-us", destination: "/ar/about", permanent: true },
      { source: "/ar/our-products", destination: "/ar/products", permanent: true },
      { source: "/ar/contact-us", destination: "/ar/contact", permanent: true },
      { source: "/ar/product/:slug", destination: "/ar/products/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
