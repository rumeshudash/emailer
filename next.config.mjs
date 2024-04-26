/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack(config) {
        config.externals = [
            ...config.externals,
            {
                esbuild: "esbuild",
            },
        ];
        return config;
    },
    transpilePackages: ["esbuild"],
};

export default nextConfig;
