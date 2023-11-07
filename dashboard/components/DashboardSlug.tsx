import { useRouter } from 'next/router'
 
export default function DashboardSlug() {
  const router = useRouter()
  return <div>Post: {router.query.slug}</div>
}