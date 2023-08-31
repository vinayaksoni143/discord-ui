"use client"
import Sidebar from '@/components/Sidebar'
import ChannelBar from '@/components/ChannelBar'
import ContentContainer from '@/components/ContentContainer'



export default function Home() {
  return (
    <div className='flex bg-white h-screen'>
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}
