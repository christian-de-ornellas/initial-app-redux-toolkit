import { useState } from 'react';
import './App.css';
import {useAppSelector, useAppDispatch} from './app/hooks'
import { incremented, decremented } from './features/counter/counter.slice';
import { useFetchBreedsQuery } from './features/dogs/dogs.api.slice';
function App() {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClickAdded = () => dispatch(incremented())
  const handleClickRemoved = () => dispatch(decremented())

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  console.log({isFetching})

  return (
    <div className="App">
      <header className="App-header">
       <h2>Count</h2>
       <div style={{display: 'flex'}}>
         <div style={{padding: '1rem'}}>Parceiro {count}</div>
         <div style={{padding: '0.2rem '}}><button  onClick={handleClickAdded}>+</button></div>
         <div style={{padding: '0.2rem '}}>{count === 0 ? <></> : <button  onClick={handleClickRemoved}>-</button>}</div>
       </div>

       <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        
        <div>
          <p>Number of dogs fetched: {data.length}</p>
          {isFetching === true ? (<p>Loading...</p>): (
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed: any) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img style={{borderRadius: '10px'}} src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>

      </header>
    </div>
  );

}
export default App;
