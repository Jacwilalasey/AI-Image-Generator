import '../styles/globals.css'
import PromptInput from '@/components/PromptInput'

import Header from '@/components/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Header />
      {/*Prompt input*/}
        <PromptInput />

        {children}
        
        
      </body>
    </html>
  )
}
