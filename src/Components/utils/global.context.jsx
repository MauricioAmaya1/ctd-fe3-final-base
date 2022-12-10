import axios from "axios";
import { createContext, useEffect, useState, useReducer } from "react";

export const GlobalContext = createContext();

const themeReducer = (state, { type }) => {
  switch (type) {
    case 'dark':
      return 'dark'

    case 'light':
      return ''

    default:
      return state;
  }
}


const GlobalContextProvider = ({ children }) => {

  const [data, setData] = useState([])

  const initialState = '';

  const [state, dispatch] = useReducer(themeReducer, initialState);

  const store = {
    data,
    state,
    dispatch
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <GlobalContext.Provider value={store}>
      <div className={state}  >
        {children}
      </div>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider