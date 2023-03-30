import { Inter } from 'next/font/google'
import Images from '../components/Images'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-0'>
      <Images />
    </main>
  )
}
