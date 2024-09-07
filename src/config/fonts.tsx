import { Neucha, Playfair } from 'next/font/google'

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
