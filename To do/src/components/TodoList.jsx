import React from 'react';
import { TodoHeaderStyle, RenderListStyle} from './TodoListStyles';
import { useState,useEffect } from 'react';


const TodoList = () => {
 
const [input, setInput] = useState("");
const [task, setTask] = useState(JSON.parse(localStorage.getItem(`taskAdd`)) || [])
const [check, setCheck] = useState(false)

const handleClick = (e) => {
   e.preventDefault();
   setTask([ ...task, { 
      todos: input,
      id: Math.random(),
    completed: check,
     }]),
  setInput("")
  
}
useEffect(() => {
  localStorage.setItem( `taskAdd`, JSON.stringify(task))   
},[task])

const handleClickDelete = (pass) => { 
     let list = task.filter( newlist => {
       return  newlist.id !== pass

     })
    setTask(list);
}


  return (
    <>
    <TodoHeaderStyle>
          <label >New Task</label>        
          <input id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Waiting ...' ></input>
           <button onClick={handleClick}>Add</button>
      
      
      </TodoHeaderStyle>   
      { 
        task?.map( todo => {
          const {id, todos} = todo;

        return <RenderListStyle key={id}> 
          <li>{todos}</li> <input completed={check} onChange={() => setCheck(!check)} type='checkbox'/>
            <button onClick={() => handleClickDelete(id)}>Delete</button>
            </RenderListStyle>
        })

      }

    </>
  )
}



export default TodoList
