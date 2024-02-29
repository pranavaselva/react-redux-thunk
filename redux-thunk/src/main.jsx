import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore, applyMiddleware } from 'redux'
import Result from './Components/Result.jsx'
import { thunk } from "redux-thunk"
import { Provider } from 'react-redux'


const storage = legacy_createStore(Result,  applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storage}>
    <App />
  </Provider>,
)
