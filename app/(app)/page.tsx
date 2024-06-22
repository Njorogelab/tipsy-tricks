import Image from 'next/image'
import { Herosection
 } from '@/components/hero'
import FirstBatch from '@/components/FirstBatch'


export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8">
      <Herosection/>
      <FirstBatch />
    </main>
  )
}
