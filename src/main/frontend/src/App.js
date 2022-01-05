import logo from './logo.svg';
import './App.css';


const ADD_EXAMPLE = 'ADD_EXAMPLE'
const redux = require('redux')
const createStore = redux.createStore

function addExample()
{
  return {
    type: ADD_EXAMPLE,
    info: 'First redux action'
  }
}

const initialState = {
  example: '2+2',
  calculations: []
}

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case ADD_EXAMPLE: return{
      ...state,
      calculations: [...state.calculations, ]
    }
    default: return state
  }
}

function App() {
  store.dispatch(addExample())
  store.dispatch(addExample())
  return (
    <div className="App">
      {

      }
    </div>
  );
}
const store = createStore(reducer)
console.log(store.getState())
export default App;
