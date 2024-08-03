import {Metadata} from 'next'
import HomePage from './components/HomePage'

export const metadata: Metadata = {
  title: 'Cvapp Explore',
}

export default function Explore() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
