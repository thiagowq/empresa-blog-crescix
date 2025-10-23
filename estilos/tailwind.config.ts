import type { Config } from 'tailwindcss'; 

const config: Config = {
  theme: {
    extend: {
      colors: {
        'carolina-blue': '#74b3ceff', // Ciano/Turquesa
        'blue-munsell': '#508991ff',          // Verde Limão/Chartreuse
        'prussian-blue': '#172a3aff',   
        'midnight-green':'#004346ff'               
        // ... outras cores
      },
    },
  },
};

export default config;