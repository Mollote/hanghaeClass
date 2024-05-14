import { useState } from 'react';
import './App.css';



function App() {

   const [todoList, setTodoList] = useState([
    {
      id:0,
      title:'운동하기',
      content:'런닝 30분',
    }
   ]);

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const titleChangeHandler = (event) => {
    setTitle(event.target.value);
   }
   const contentChangeHandler = (event) =>{
    setContent(event.target.value)
   }

   const addTodoListButton = () => {
    const newTodoList = {
      id: todoList.length +1,
      title,
      content,
    }

    setTodoList([...todoList ,newTodoList]);
    console.log(title,content);
   }
 
   const deleteTodoListHandler = (id) => {
    const newTodoList = todoList.filter(function (todoList) {
      return todoList.id !== id;
    });
    setTodoList(newTodoList);
   }

  return (
    <div className='layout'>
      <div className='layout-body'>
        <header className='header'>
          <h1>My Todo List</h1>
          <h1>React</h1>
        </header>
        <main className='main'>
            <div className='addTodoListLeft'>
                  <div className='contentName'> Title</div>
                  <div className='inputBox'><input className='input' value={title} onChange={titleChangeHandler}/></div>
                  <div className='contentName'> Content</div>
                  <div className='inputBox'><input className='input' value={content} onChange={contentChangeHandler}/></div>
            </div>
            <div className='addTodoListRight'>
                <button className='buttonStyle' onClick={addTodoListButton} >Add</button>
            </div>
        </main>
        <div className='todoContainer'>
          <div className='todoContainerHead'> 
            Working..
          </div>
          <div className="todoListContainer">
          {todoList.map(function (item) {
                return (
                  <>
                  <div className='todoContents' key={item.id}>
                    <h2 className='todoContentsTitle h2' > {item.title} </h2>
                    <div className='todoContentsDetail'  > {item.content} </div>
                    <div className='todoContentsButtons'>
                      <button className='delete button' onClick={()=>deleteTodoListHandler(item.id)}>Delete</button>
                      <button className='done button'>Done</button>
                    </div>
                  </div>
                  </>
                )
              })}
            
          </div>
          <div className='todoContainerHead'> 
            Done..!
          </div>
          <div className="todoListContainer">
            <div className='todoContents'>
              <h2 className='todoContentsTitle h2'> 불러올 제목 </h2>
              <div className='todoContentsDetail'> 불러올 내용 </div>
              <div className='todoContentsButtons'>
                <button className='delete button' >Delete</button>
                <button className='done button'>Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
