import { createContext, useReducer, ReactNode } from "react"
import DogByBreedReducer from "./DogByBreedReducer"
import { State } from "../lib/type"

const initialState: State = {
  loading: false,
  data: [],
  error: null,
  selectedBreed: [],
  showData: null,
}

export const ProtocolContext = createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

interface ProtocolProviderProps {
  children: ReactNode
}

export const ProtocolProvider = ({ children }: ProtocolProviderProps) => {
  const [state, dispatch] = useReducer(DogByBreedReducer, initialState)

  return (
    <ProtocolContext.Provider value={{ state, dispatch }}>
      {children}
    </ProtocolContext.Provider>
  )
}
