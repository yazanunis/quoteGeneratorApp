import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Quote Generator',
  description: 'Generate quotes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
