import Todo from './components/Todo';

function App(){

  let oldArr= [1,2,3,4];
  let newArr = [...oldArr,11,22,33];
  console.log("oldArr:"+oldArr)

  console.log("in App js")
  return(
   <div>
    <h1>My Todos</h1>
    <Todo text="Learn React" />
    <Todo text="Learn React Again" />
   </div>
  );
}
export default App;