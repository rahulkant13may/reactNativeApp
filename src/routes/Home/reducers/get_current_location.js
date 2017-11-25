import { Dimensions } from "react-native";

const initialState = {region:{}}
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA

export default function HomeReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_CURRENT_LOCATION':
      return {
        region: {
        	latitude:action.payload.coords.latitude,
     		longitude:action.payload.coords.longitude,
     		latitudeDelta:LATITUDE_DELTA,
     		longitudeDelta:LONGITUDE_DELTA
     	} 
      }

    default:
      return state
  }
}

