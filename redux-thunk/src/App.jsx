import './App.css'
import Fetch from './Components/Fetch'
import { useDispatch , useSelector } from 'react-redux'
 

function App() {
  

  const dispatcher = useDispatch();
  const dataFetched = useSelector((state) => state); 
  // console.log(dataFetched);


  return (
    <div>
      <div>
        <button onClick={() => dispatcher(Fetch())}>Fetch Data</button>
      </div>
      { dataFetched.items && dataFetched.items.map((ele, id)=>{
        return (
          <div key={id}>
            <h1>{ele.name}</h1>
            <h2>{ele.email}</h2>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App
