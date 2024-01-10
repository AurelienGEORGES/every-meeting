// import React, { useState, useEffect } from 'react';
// import FormAdd from './FormAdd';
// import Item from './Item';

// const Todolist = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost/api/items');

//         if (response.ok) {
//           const data = await response.json();
//           setTodos(data['hydra:member']);
//         } else {
//           console.error("Erreur lors de l'ajout des l'item");
//         }
//       } catch (error) {
//         console.error("Une erreur s'est produite :", error);
//       }
//     };
//     fetchData().catch(console.error);
//   }, []);

//   const addTodo = (todo) => {
//     setTodos([...todos, { content: todo, id: id }]);
//   };

//   const removeTodo = (id) => {
//     const newTodos = todos.filter((todo, index) => index !== id);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <FormAdd addTodo={addTodo} />
//       {todos.map((todo) => (
//         <Item content={todo.content} id={todo.id} removeTodo={removeTodo} />
//       ))}
//     </div>
//   );
// };

// export default Todolist;
