// import React, { useState, useEffect } from 'react';
// import FormAdd from './FormAdd';
// import FormDelete from './FormDelete';
// import FormUpdate from './FormUpdate';
// import Item from './Item';
// import axios from 'axios';

// const Todolist = () => {
//     const [todos, setTodos] = useState([]);

//     const axiosInstance = axios.create({
//         baseURL: 'http://localhost/'
//     });

//     const fetchData = async () => {
//         try {
//             const response = await axiosInstance.get('api/to_do_list_items')
//             if (response.status === 200) {
//                 setTodos(response.data);
//             }
//         } catch (error) {
//             console.error('An error occurred during the GET request:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const addTodo = (newTodo) => {
//         setTodos([...todos, newTodo]);
//     };

//     const deleteTodo = (id) => {
//         const deleteTodos = todos.filter((todo) => todo.id !== id);
//         setTodos(deleteTodos);
//     };

//     const updateTodo = () => {
//         fetchData()
//     }

//     return (
//         <>
//             <FormAdd addTodo={addTodo} />
//             {todos && todos.map((todo, index) => (
//                 <div key={index}>
//                     <Item
//                         content={todo.content}
//                         priority={todo.priority}
//                         difficulty={todo.difficulty}
//                         deadline={todo.deadline}
//                         done={todo.done}
//                         id={todo.id}
//                     />
//                     <FormDelete id={todo.id} deleteTodo={() => deleteTodo(todo.id)} />
//                     <FormUpdate id={todo.id} content={todo.content} priority={todo.priority} difficulty={todo.difficulty} deadline={todo.deadline} done={todo.done} createdAt={todo.createdAt} updateTodo={updateTodo} />
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Todolist;
