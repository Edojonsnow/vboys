/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "http://cdn.sanity.io|cdn.sanity.io" }],
    domains: ["i.vimeocdn.com"],
  }, // Configure webpack to handle Vimeo iframe embedding
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|flv)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },

  // Add iframe domains for external video embedding
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src *.vimeo.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
