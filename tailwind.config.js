
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',     // Couleur principale (un joli vert émeraude)
        secondary: '#D97706',   // Couleur secondaire (orange vif)
        accent: '#F43F5E',      // Couleur d'accentuation (rose punchy)
        background: '#F3F4F6',  // Couleur de fond douce (gris clair)
        text: '#1F2937',        // Couleur principale du texte (gris foncé)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Police personnalisée
        serif: ['Merriweather', 'serif'],  // Police secondaire
      },
      spacing: {
        '128': '32rem',    // Pour des containers plus larges
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',     // Pour des coins bien arrondis
      }
    },
  },
  plugins: [],
}

