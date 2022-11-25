import React from 'react'
import Hero from '../components/Hero'
import ServiceCards from '../components/ServiceCards'

function Home() {
  return (
    <>
      <Hero />
      <h1 className="body-header text-center py-5">Services:</h1>
      <ServiceCards />
      <h1>hello</h1>
    </>
  )
}

export default Home
