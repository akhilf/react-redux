
const initialState = {
  cnt:10
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  if(action.type == "INCREMENT"){
    newState.cnt++;
  }
  if(action.type == "DECREMENT"){
    newState.cnt--;
  }
  return newState;
}

export default reducer;
