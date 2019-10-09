import { ADD_CHARACTERISTICS } from "../constants/action-types"

const add_characteristics = (payload) => {
  return { type: ADD_CHARACTERISTICS, payload}
};

export default add_characteristics