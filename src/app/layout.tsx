import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import AppLayout from './_layout'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AppLayout inter={inter.className}>{children}</AppLayout>
}
