export type Dispatch = (arg: { type: string; payload?: any }) => void

export type Props = string[]

export interface ShowData {
  data: {
    message: string
  }
}

export interface State {
  loading: boolean
  data: any[]
  error: any
  selectedBreed: any[]
  showData: ShowData | null
}

export interface Action {
  type: string
  payload: any
}
