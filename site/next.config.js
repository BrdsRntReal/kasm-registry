/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Ollama-Deepseek-coder',
    description: 'Ollamas Deepseek-coder 1b LLM.',
    icon: 'https://ollama.com/public/ollama.png',
    listUrl: 'https://github.com/BrdsRntReal/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
