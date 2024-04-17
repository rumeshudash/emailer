/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.externals = [
            ...config.externals,
            {
                esbuild: "esbuild",
            },
            {
                "@react-email/components": "@react-email/components",
            },
        ];
        return config;
    },
    transpilePackages: ["esbuild"],
};

export default nextConfig;
