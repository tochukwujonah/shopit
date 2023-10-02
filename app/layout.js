
import './globals.css'
import NavBar from '@/components/molecules/NavBar/navBar'

export const metadata = {
  title: 'Shop It',
  description: 'Shop for phones, gadgets, and accessories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <NavBar  />
        {children}
        
        </body>
    </html>
  )
}
