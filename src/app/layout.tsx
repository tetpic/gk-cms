import './globals.scss'
import 'bootstrap/dist/css/bootstrap.css'

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
        <div className='main-wrapper'>
          {children}
        </div>
      </body>
    </html>
  )
}
