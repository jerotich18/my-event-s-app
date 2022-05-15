import React, { useState ,useEffect} from 'react';
import './App.css';

const App = () => {
  myItems = JSON.parse(lcalStorage.getItem("items"));
  const [tasks,setTasks] = useState (myItems || []);
  const [todo, setTodo]=useState([])
  const [mercy, setMercy]=useState("")

  const todoChangeHandler=(event) => {
    setTodo(event.target.value);
  };

  const mercyChangeHandler=(event) => {
    setMercy(event.target.value);
  };

  const submitHandler=(event) => {
    event.preventDefault();
    setTasks([...tasks,{todo1: todo,mercy1: mercy}])
    setTodo("");
    setMercy("");
  };
  useEffect(()=> {
    const dataItems = JSON.stringify(tasks);
    localStorage.setItem("items",dataItems);
  }, [tasks]);
  
  return(
    <div>
    <form onSubmit={submitHandler}>
    <input type="text" value={todo} onChange={todoChangeHandler}/>
    <input type="text" value={mercy} onChange={mercyChangeHandler} />
   <div> <button>add-todo</button></div>
    </form>

    {tasks.map((task,index) => { 
      return ( <p> key={index}
      {task.todo1} {task.mercy1}</p>
      ); 
    })}

    </div>
  );
};
export default App;
