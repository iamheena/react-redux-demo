
const initialstate = 0;
const changeTheNumber = (state=initialstate, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'INCREAMENT' :return state + 1
    // case 'INCREAMENT' :return state + action.payload
    case 'DECREAMENT' :return state - 1
    default :return state;
  }  
  
};
export default changeTheNumber;
