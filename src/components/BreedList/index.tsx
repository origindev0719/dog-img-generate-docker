import { useContext, useEffect } from "react"
import { getDogAllImages, updateDogData } from "../../context/DogByBreedAction"
import { ProtocolContext } from "../../context/DogByBreedContext"
import { BREED_LIST } from "../../lib/styles"

export const BreedListComponent = () => {
  const { state, dispatch } = useContext(ProtocolContext)
  const handleSelectBreed = (key: string, value: string) => {
    updateDogData(dispatch, [key, value])
  }

  useEffect(() => {
    const fetchData = async () => {
      await getDogAllImages(dispatch)
    }
    fetchData()
  }, [])

  return (
    <div className={BREED_LIST.default}>
      {state?.data &&
        Object.entries(state?.data).map(([key, value], index) => (
          <div
            key={index}
            className={`${BREED_LIST.item} ${
              state.selectedBreed[1] === value && BREED_LIST.itemSelected
            }`}
            onClick={() => handleSelectBreed(key, value)}
          >
            {key}
          </div>
        ))}
    </div>
  )
}
