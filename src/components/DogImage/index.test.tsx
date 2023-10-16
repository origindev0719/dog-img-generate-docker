import { render, screen, fireEvent } from "@testing-library/react"
import { ProtocolContext } from "../../context/DogByBreedContext"
import { DogImageComponent } from "."
import { updateDogData } from "../../context/DogByBreedAction"
import { TITLE_LISTS } from "../../lib/constants"

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}))
jest.mock("../../context/DogByBreedAction")

describe("DogImageComponent", () => {
  const mockDispatch = jest.fn()
  const mockState = {
    data: [{}],
    selectedBreed: ["breed1"],
    loading: false,
    error: null,
    showData: {
      data: {
        message: "https://images.dog.ceo/breeds/bluetick/n02088632_1077.jpg",
      },
    },
  }

  it("renders breed title, image and button", () => {
    render(
      <ProtocolContext.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <DogImageComponent />
      </ProtocolContext.Provider>
    )

    const breedTitle = screen.getByText("breed1")
    const breedImage = screen.getByAltText("breed")
    const generateButton = screen.getByText(TITLE_LISTS.generate_button)

    expect(breedTitle).toBeInTheDocument()
    expect(breedImage).toBeInTheDocument()
    expect(generateButton).toBeInTheDocument()
  })

  it("calls updateDogData on button click", async () => {
    render(
      <ProtocolContext.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <DogImageComponent />
      </ProtocolContext.Provider>
    )

    const generateButton = await screen.findByText(TITLE_LISTS.generate_button)

    fireEvent.click(generateButton)

    expect(updateDogData).toHaveBeenCalledWith(mockDispatch, ["breed1"])
  })
})
