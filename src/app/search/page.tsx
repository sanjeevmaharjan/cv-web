import {Metadata} from 'next'
import Search from './components/Search'

export const metadata: Metadata = {
  title: 'Cvapp Explore',
}

export default function SearchPage() {
  return (
    <main>
      <Search />
    </main>
  )
}
