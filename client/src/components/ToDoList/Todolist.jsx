import React, { useEffect, useState } from 'react';
import FormAdd from './FormAdd';
import FormDelete from './FormDelete';
import FormUpdate from './FormUpdate';
import Item from './Item';
// import { useLoaderData } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const Todolist = () => {
// const loaderData = useLoaderData();

//   const [todos, setTodos] = useState(loaderData);
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost/api/to_do_list_items')
        .then((response) => response.json())
        .then((data) => {
          setTodos(data); // Update state with fetched data
          setIsLoading(false); // Set loading to false after data retrieval
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false); // Set loading to false in case of error
        });
    };
    fetchData();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const updateTodo = (id, updatedTodo) => {
    console.log(updatedTodo);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id);
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className='text-2xl md:text-4xl text-nav text-center mx-3 my-10'>
        Voici votre liste To Do. Ici vous pourrez organiser, gérer et prioriser vos tâches.
      </h1>
      <div>
        <FormAdd addTodo={addTodo} />
      </div>
      <div className='flex flex-wrap justify-center'>
        {isLoading ? (
          <ClipLoader
            color='123456'
            loading={isLoading}
            size={50}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        ) : (
          todos &&
          todos.map((todo, index) => (
            <div
              key={index}
              className='border-solid border-4 border-gray-600 rounded-xl basis-1/5 p-3 m-5'
            >
              <Item
                content={todo.content}
                priority={todo.priority}
                difficulty={todo.difficulty}
                deadline={todo.deadline}
                done={todo.done}
                id={todo.id}
              />
              <div className='flex flex-col'>
                <div className='my-1'>
                  <FormDelete id={todo.id} deleteTodo={() => deleteTodo(todo.id)} />
                </div>
                <div className='my-1'>
                  <FormUpdate
                    id={todo.id}
                    content={todo.content}
                    priority={todo.priority}
                    difficulty={todo.difficulty}
                    deadline={todo.deadline}
                    done={todo.done}
                    createdAt={todo.createdAt}
                    updateTodo={updateTodo}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todolist;
