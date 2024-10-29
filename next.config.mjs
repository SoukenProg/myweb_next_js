/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config,{dev}) => {
      if(dev){
          config.watchOptions = {
              poll: 200,
              aggregateTimeout: 200,
          };
      }
        return config;
    },
};

export default nextConfig;
