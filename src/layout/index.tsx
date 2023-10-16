import React from "react"
import Header from "../components/Header"
import { Footer } from "../components/Footer"
import { LAYOUT } from "../lib/styles"
import { BreedListComponent } from "../components/BreedList"
import { DogImageComponent } from "../components/DogImage"

const ProtocolComponent: React.FC = () => {
  return (
    <div className={LAYOUT.container}>
      <Header />
      <div className={LAYOUT.main}>
        <BreedListComponent />
        <DogImageComponent />
      </div>
      <Footer />
    </div>
  )
}

export default ProtocolComponent
