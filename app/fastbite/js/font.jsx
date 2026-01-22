import localFont from 'next/font/local'
 
// Exportamos la fuente para que otros archivos puedan importarla
export const josefin = localFont({
  src: '../fonts/JosefinSans-Medium.ttf',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body>{children}</body>
    </html>
  )
}