import { CONTEXT_TITLE } from "../lib/constants"
import { State, Action } from "../lib/type"

const dogByBreedReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CONTEXT_TITLE.BEGIN_DATA_FETCH:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case CONTEXT_TITLE.SUCCESSFUL_DATA_FETCH:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      }
    case CONTEXT_TITLE.FAILED_DATA_FETCH:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      }
    case CONTEXT_TITLE.DISPLAY_DATA:
      return {
        ...state,
        loading: false,
        showData: action.payload,
        error: null,
      }
    case CONTEXT_TITLE.UPDATE_BREED:
      return {
        ...state,
        loading: false,
        selectedBreed: action.payload,
        error: null,
      }

    default:
      return state
  }
}
export default dogByBreedReducer
