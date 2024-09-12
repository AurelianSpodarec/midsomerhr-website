import { Neucha, Playfair, Caveat } from 'next/font/google'

// =======================================================================
// [How to add a font]
// - Go to theming.ts - and add the variable 
// - Go to the layout.tsx - and expose the font via class name onto body
// ========================================================================

export const playFair = Playfair({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playFair'
})

export const neucha = Neucha({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-neucha'
})

export const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat'
})
