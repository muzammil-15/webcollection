/** @type {import('next').NextConfig} */
const nextConfig = {
  extend: {
    backgroundImage: {
      'project-img': "url'/project.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
    images: {
        domains: ['encrypted-tbn0.gstatic.com'], // Add your domain(s) here
      },
}

module.exports = nextConfig
