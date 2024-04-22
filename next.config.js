/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // experimental: {
    //     serverActions: true
    // },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental:{
//         serverActions:true
//     },
//     typescript:{
//         ignoreBuildErrors:true
//     },
//     eslint:{
// ignoreDuringBuilds:true
//     },
// }

// module.exports = nextConfig


