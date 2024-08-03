import {Metadata} from 'next'
import {redirect} from 'next/navigation'

export const metadata: Metadata = {
  title: 'CvApp',
}

export default function Home() {
  redirect('/explore')
  return <main></main>
}
