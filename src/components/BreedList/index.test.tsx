import { render } from "@testing-library/react"
import { BreedListComponent } from "."
import { ProtocolContext } from "../../context/DogByBreedContext"
import * as DogByBreedAction from "../../context/DogByBreedAction"

jest.mock("../../context/DogByBreedAction")
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}))

describe("BreedListComponent", () => {
  const mockDispatch = jest.fn()
  const mockState = {
    data: [{ breed1: "breed1", breed2: "breed2" }],
    selectedBreed: ["breed1", "breed2"],
    loading: false,
    error: null,
    showData: {
      data: {
        message: "https://images.dog.ceo/breeds/bluetick/n02088632_1077.jpg",
      },
    },
  }

  beforeEach(() => {
    jest.clearAllMocks()

    jest.spyOn(DogByBreedAction, "getDogAllImages").mockImplementation(() => {
      return new Promise<void>((resolve, reject) => {
        resolve()
      })
    })

    jest.spyOn(DogByBreedAction, "updateDogData").mockImplementation(() => {
      return new Promise<void>((resolve, reject) => {
        resolve()
      })
    })
  })

  it("fetches dog images on mount", () => {
    render(
      <ProtocolContext.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <BreedListComponent />
      </ProtocolContext.Provider>
    )

    expect(DogByBreedAction.getDogAllImages).toHaveBeenCalledWith(mockDispatch)
  })
})
