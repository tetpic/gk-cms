import './globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import store from '@/redux/store'
import Providers from '@/redux/provider'



export const metadata = {
  title: 'GK CMS',
  description: 'Created by Gori-ka inc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="ru">
      <body>       
          <Providers>
            {children}
          </Providers>       
      </body>
    </html>
  )
}
