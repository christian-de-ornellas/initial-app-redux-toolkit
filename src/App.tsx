import './App.css';
import {useAppSelector, useAppDispatch} from './app/hooks'
import { incremented, decremented } from './features/counter/counter.slice';

function App() {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClickAdded = () => dispatch(incremented())
  const handleClickRemoved = () => dispatch(decremented())

  return (
    <div className="App">
      <header className="App-header">
       <h2>Parceiros</h2>
       <div style={{display: 'flex'}}>
         <div style={{padding: '1rem'}}>Parceiro {count}</div>
         <div style={{padding: '0.2rem '}}><button  onClick={handleClickAdded}>+</button></div>
         <div style={{padding: '0.2rem '}}>{count === 0 ? <></> : <button  onClick={handleClickRemoved}>-</button>}</div>
       </div>
      </header>
    </div>
  );

}
export default App;
