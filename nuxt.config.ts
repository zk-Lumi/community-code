// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['github:matter-labs/docs-nuxt-template', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint', '@nuxtjs/seo'],
  site: {
    name: 'Code Community',
    url: process.env.NUXT_SITE_ENV ? 'https://staging-code.zksync.io' : 'https://code.zksync.io',
  },
  runtimeConfig: {
    public: {
      app: 'code',
    },
  },
});
