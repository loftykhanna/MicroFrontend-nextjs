import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hello From Dashboardwww

      <Link href="/dashboard/internal-route" scroll={false}>
      Click here to go to Internal Routing
    </Link>
     
    </div>
  )
}
