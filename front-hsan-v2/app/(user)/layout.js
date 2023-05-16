import "../globals.css";
import AppBar from "./AppBar"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <AppBar/>
        {children}
        
        </body>
    </html>
  )
}
