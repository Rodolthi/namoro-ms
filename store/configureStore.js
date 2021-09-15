import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store

const initialState = {
  regiao: '',
  acompanhante: '',
  token: '',
  anuncio: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGIAO':
      return {
        ...state,
        regiao: action.regiao,
      }
    case 'ACOMPANHANTE':
      return {
        ...state,
        acompanhante: action.acompanhante,
      }
    case 'TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'ANUNCIO':
      return {
        ...state,
        anuncio: action.anuncio,
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    store = undefined
  }

  if (typeof window === 'undefined') return _store
  
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}