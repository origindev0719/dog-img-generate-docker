import axios from "axios"
import { convertAllBreeds } from "../lib/filter-items"
import { CONTEXT_TITLE } from "../lib/constants"
import APIURL from "../lib/constants"
import { Dispatch, Props } from "../lib/type"

export const getDogAllImages = async (dispatch: Dispatch) => {
  dispatch({ type: CONTEXT_TITLE.BEGIN_DATA_FETCH })
  if (APIURL.api) {
    try {
      const response = await axios.get(APIURL.api)
      const allData = convertAllBreeds(
        response.data.message,
        response.data.status
      )
      const firstBreed = Object.entries(allData)[0]
      const imageResponse = await axios.get(
        `${APIURL.DOGURL}breed/${firstBreed[1]}${APIURL.RANDOM_BREED_IMAGE}`
      )
      dispatch({
        type: CONTEXT_TITLE.DISPLAY_DATA,
        payload: imageResponse.data.message,
      })
      dispatch({
        type: CONTEXT_TITLE.SUCCESSFUL_DATA_FETCH,
        payload: allData,
      })
      dispatch({
        type: CONTEXT_TITLE.UPDATE_BREED,
        payload: firstBreed,
      })
      return response?.data
    } catch (error) {
      dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
    }
  } else {
    console.error("API URL is undefined")
  }
}

export const updateDogData = async (dispatch: Dispatch, props: Props) => {
  try {
    const imageResponse = await axios.get(
      `${APIURL.DOGURL}breed/${props[1]}${APIURL.RANDOM_BREED_IMAGE}`
    )
    dispatch({
      type: CONTEXT_TITLE.DISPLAY_DATA,
      payload: imageResponse.data.message,
    })

    dispatch({
      type: CONTEXT_TITLE.UPDATE_BREED,
      payload: props,
    })
  } catch (error) {
    dispatch({ type: CONTEXT_TITLE.FAILED_DATA_FETCH, payload: error })
  }
}
