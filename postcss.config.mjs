// filepath: c:\Users\gwats\OneDrive\Desktop\Projects\xora\postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [tailwindcss, autoprefixer],
};

export default config;