import './globals.css'
import { Providers } from "@/app/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers >
          <div className="container mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}