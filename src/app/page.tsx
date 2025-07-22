import React from 'react'
import Hero from '@/app/components/Home/Hero'
import { Metadata } from 'next'
import { Explore } from './components/Home/Explore'
import Charger from './components/Home/Charger'
import EVNews from './components/Home/EVnews'
import { Manage } from './components/Home/Manage'
import Download from './components/Home/Download-now'
export const metadata: Metadata = {
  title: 'EV Application',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Charger />
      {/* <People /> */}
      {/* <Features /> */}
      {/* <Business />
      <Payment /> */}
      <EVNews />
      <Manage />
      <Download />
      {/* <Pricing /> */}
      {/* <ContactForm /> */}
    </main>
  )
}
