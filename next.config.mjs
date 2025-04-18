/** @type {import('next').NextConfig} */
import withVideos from "next-videos"
import withImages from "next-images"
import withPlugins from "next-compose-plugins"
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = withVideos(
  withBundleAnalyzer({
    images: {
      formats: ["image/webp"],
      disableStaticImages: true,
    },
    siteUrl: 'https://summertimebikers.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
  })
)

export default nextConfig
