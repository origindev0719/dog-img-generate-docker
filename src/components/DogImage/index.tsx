import { useContext, useEffect, useState } from "react"
import { ProtocolContext } from "../../context/DogByBreedContext"
import { updateDogData } from "../../context/DogByBreedAction"
import { Spinner } from "../Spinner"
import NotFound from "../../assets/notFound.png"
import { DISPLAY, DOG_IMAGE } from "../../lib/styles"
import { TITLE_LISTS } from "../../lib/constants"

export const DogImageComponent = () => {
  const [imageExists, setImageExists] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const checkImage = (url: string) =>
    new Promise<boolean>((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = url
    })

  const { state, dispatch } = useContext(ProtocolContext)

  const handleSelectBreed = () => {
    if (state.selectedBreed) {
      updateDogData(dispatch, [...state.selectedBreed])
    }
  }

  useEffect(() => {
    setIsLoading(true)
    if (state.showData && typeof state.showData === "string") {
      checkImage(state.showData).then((exists: boolean) => {
        setImageExists(exists)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [state.showData])

  return (
    <div className={`${DISPLAY.fullCenter} ${DOG_IMAGE.container}`}>
      <div className={DOG_IMAGE.title}>{state.selectedBreed[0]}</div>
      <div className={`${DISPLAY.fullCenter} ${DOG_IMAGE.body}`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={
              imageExists && typeof state.showData === "string"
                ? state.showData
                : NotFound
            }
            alt="breed"
            className={DOG_IMAGE.img}
          />
        )}
      </div>
      <button className={DOG_IMAGE.customBtn} onClick={handleSelectBreed}>
        {TITLE_LISTS.generate_button}
      </button>
    </div>
  )
}
