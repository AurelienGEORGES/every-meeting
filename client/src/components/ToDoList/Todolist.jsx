import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import axiosInstance from '../../services/axiosInstance';
import { useAxiosInterceptor } from '../../services/axiosInstance';
import ClipLoader from 'react-spinners/ClipLoader';
import FormAdd from './FormAdd';
import FormDelete from './FormDelete';
import FormUpdate from './FormUpdate';
import Item from './Item';

function Todolist() {
  useAxiosInterceptor();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState('');
  const { userConnected } = useAuth();
  const userId = userConnected.id;
//   const effectRun = useRef(false)
  const effectRun = useRef(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/to_do_list_items`, {
          signal: controller.signal,
        });
        isMounted && setTodos(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
        console.error("Stack trace de l'erreur:", error.stack);
      } finally {
        setIsLoading(false);
      }
    };
    effectRun.current && fetchData();

    return () => {
      isMounted = false;
      isMounted && controller.abort();
    //   effectRun.current = true
      effectRun.current = false;
    };
  }, [userId]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='w-full'>
      <h1 className='text-2xl md:text-4xl text-nav text-center mx-3 my-10'>
        Voici ta liste ToDo liste {userConnected.username}. Ici tu pourras organiser, gérer et
        prioriser tes tâches.
      </h1>
      <div>
        <FormAdd addTodo={addTodo} />
      </div>

      <div className='flex flex-wrap justify-center my-5'>
        {isLoading ? (
          <div className='flex h-48 justify-center items-center'>
            <ClipLoader
              color='#951471'
              loading={isLoading}
              size={100}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          </div>
        ) : (
          todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
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
                    user={todo.user}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Todolist;
