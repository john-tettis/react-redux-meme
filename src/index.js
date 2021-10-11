import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore}from 'redux'
import {Provider} from 'react-redux'
import { v4 as uuid} from 'uuid';
import './App.css'

let INITIAL_STATE={
  formData:{
    top:'',
    bottom:'',
    size:14,
    image:''
  },
  memes:[]
}
let reducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case 'UPDATE_FORM':
      let formData = {...state.formData, ...action.payload}
      return {...state, formData}
    case 'CLEAR_FORM':
      return {...state, formData:INITIAL_STATE.formData}
    case 'ADD_MEME':
      let id = uuid()
      return {...state, memes:[...state.memes,{...action.payload, id}]}
    case 'DELETE_MEME':
      let memes = state.memes.filter(m=>m.id!==action.payload.id)
      return {...state,memes}
    default:
      return state;
}


}




let store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
