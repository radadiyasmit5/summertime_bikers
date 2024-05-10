/** @type {import('next').NextConfig} */
import withVideos from "next-videos"
import withImages from "next-images"
import withPlugins from "next-compose-plugins"
import withBundleAnalyzer from "@next/bundle-analyzer"
// const nextvideos = withVideos()
// const nextimages = withImages()
const nextConfig = withVideos(
  //   withImages(

  withBundleAnalyzer({
    images: {
      formats: ["image/webp"],
      disableStaticImages: true,
    },
  })
  //   )
)

// withPlugins(
//   [[withImages], [withVideos]],
// //   withVideos(),
// //   withImages()
// )
export default nextConfig

// module.exports = withVideos()
// module.exports = withImages()
