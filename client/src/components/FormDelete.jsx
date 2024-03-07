import React from 'react';
import axios from 'axios';
import deletetodopng from '../assets/img-home/delete-todo.png';

const FormDelete = ({ id, deleteTodo }) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost/',
  });

  const handleDelete = async () => {
    console.log(id);
    try {
      const response = await axiosInstance.delete(`api/to_do_list_items/${id}`);
      if (response.status === 204) {
        console.log('Item deleted successfully!');
        deleteTodo();
      } else {
        console.error(
          'Failed to delete item. Server returned:',
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.error('An error occurred during the DELETE request:', error);
    }
  };

  return (
    <button
      type='button'
      className='text-xl text-white bg-king hover:bg-purple-200 hover:text-king px-3 py-1 rounded-full'
      onClick={() => handleDelete(id)}
      data-cy='delete-btn'
      data-id={id}
    >
      <div className='flex flex-row'>
        <div>
          <img src={deletetodopng} alt='corbeille' className='img-fluid  w-[45px]' />
        </div>
        <div className='flex items-center'>
          <p>Enlever</p>
        </div>
      </div>
    </button>
  );
};

export default FormDelete;
