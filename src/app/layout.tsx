import { playFair } from '@/config/fonts'
import './../styles/styles.scss'
import Footer from './_components/Footer'
import Header from './_components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={`h-full w-full ${playFair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
