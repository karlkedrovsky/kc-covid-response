export const rawHtmlMixin = {
  methods: {
    styleRawHTML(rawHTML) {
      return rawHTML
        .replace(/<p>/g, '<p class="mb-4">')
        .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">')
        .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">')
        .replace(/<h1.*?>/g, '<h1 class="text-6xl font-black mb-4">')
        .replace(/<h2.*?>/g, '<h2 class="text-5xl font-black mb-4">')
        .replace(/<h3.*?>/g, '<h3 class="text-4xl font-black mb-4">')
        .replace(/<h4.*?>/g, '<h4 class="text-3xl font-black mb-4">')
        .replace(/<h5.*?>/g, '<h5 class="text-2xl font-black mb-4">')
        .replace(/<h6.*?>/g, '<h6 class="text-xl font-black mb-4">')
        .replace(/<a href/g, '<a class="text-kc-covid-red hover:underline" href');
    }
  }
};