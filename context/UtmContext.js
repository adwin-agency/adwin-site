import { createContext, useReducer, useContext } from 'react';

const initialState = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
};

const UTMContext = createContext();

const utmReducer = (state, action) => {
  switch (action.type) {
    case 'SET_UTM_PARAMS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const useUTMContext = () => {
  const context = useContext(UTMContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export const UTMProvider = ({ children }) => {
  const [utmParams, dispatch] = useReducer(utmReducer, initialState);

  return (
    <UTMContext.Provider value={{ utmParams, dispatch }}>
      {children}
    </UTMContext.Provider>
  );
};

export default UTMContext;