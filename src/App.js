import {useState, useReducer } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  function counterReducer(oldCount, action) {                  //현재 상태와 action을 넘겨받은 reducer함수가 행동을 개시
    if (action.type === 'UP') {
      return oldCount+action.number;
    }
    else if (action.type === 'DOWN') {
      return oldCount-action.number  
    }
    else if (action.type === 'RESET') {
      return 0
    }
  }

  const [count, countDispatch] = useReducer(counterReducer, 0)          //처리할 데이터와 dispatch함수를 useReducer로 선언함 [대상, dispatch] = (action을 실행할 reducer함수, 초기값)

  function down() {
    countDispatch({type : 'DOWN', number : number}) 
  }

  function up() {
    countDispatch({type:'UP', number : number})                                          //호출된 함수 안에서 dispatch를 통해 action을 넘겨줌
  } 

  function reset() {
    countDispatch({type:'RESET'})
  }

  function changeNumber(e) {
    setNumber(Number(e.target.value))
  }


  return (                                                         //각각 실행할 함수를 이벤트에서 호출
    <div className="App">
      <input type="button" value="-" onClick={down}/> 
      <input type="button" value="0" onClick={reset}/>              
      <input type="button" value="+" onClick={up}/>
      <div>{count}</div>
      <input type="text" value={number} onChange={(e)=>{changeNumber(e)}}/>
    </div>
  );
}

export default App;
