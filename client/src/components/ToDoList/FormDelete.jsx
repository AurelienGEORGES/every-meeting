import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../services/axiosInstance';
import ClipLoader from 'react-spinners/ClipLoader';
import deletetodopng from '../../assets/img-home/delete-todo.png';

function FormDelete({ id, deleteTodo }) {
  FormDelete.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const response = await axiosInstance.delete(`/to_do_list_items/${id}`);
    if (response.status === 204) {
      setIsLoading(false);
      deleteTodo();
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
      {isLoading ? (
        <div className='px-5 py-1 flex align-items-center'>
          <ClipLoader
            color='000000'
            loading={isLoading}
            size={30}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <div className='flex flex-row'>
          <div>
            <img src={deletetodopng} alt='corbeille' className='h-[45px] w-[45px]' />
          </div>
          <div className='flex items-center'>
            <p className='ps-1'>Enlever</p>
          </div>
        </div>
      )}
    </button>
  );
}

export default FormDelete;
