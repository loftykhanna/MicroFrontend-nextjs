import dynamic from 'next/dynamic'


const DynamicHeader = dynamic(() => import('../../components/DashboardSlug'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  })

export default function Page() {
  return <DynamicHeader/>
}