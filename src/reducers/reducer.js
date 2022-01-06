let preexisting = JSON.parse(localStorage.getItem("cart.items"));
let initState = preexisting ? preexisting : [];

function rootReducer(state = initState, action) {
    if (action.type === "added")
    {
      let newstate = [...state, action.payload]
      localStorage.setItem("cart.items",JSON.stringify(newstate))
      return newstate
    }
    if (action.type === "order")
    {
      localStorage.clear()
      return []
    }
      return state;
  }

export default rootReducer;