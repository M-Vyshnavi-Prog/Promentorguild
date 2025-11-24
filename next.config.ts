import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable styled-components SWC transform so server and client class names match
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
