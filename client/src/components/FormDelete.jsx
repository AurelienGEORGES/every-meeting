// import React from 'react';
// import axios from 'axios';

// const FormDelete = ({ id, deleteTodo }) => {

//     const axiosInstance = axios.create({
//         baseURL: 'http://localhost/'
//     });

//     const handleDelete = async () => {
//         console.log(id)
//         try {
//             const response = await axiosInstance.delete(`api/to_do_list_items/${id}`)
//             if (response.status === 204) {
//                 console.log('Item deleted successfully!');
//                 deleteTodo()
//             }

//             else {
//                 console.error('Failed to delete item. Server returned:', response.status, response.statusText);
//             }
//         } catch (error) {
//             console.error('An error occurred during the DELETE request:', error);
//         }
//     };

//     return (
//         <button type='button' className='btn-create-item' onClick={() => handleDelete(id)}>
//             Delete this item
//         </button>
//     );
// };

// export default FormDelete;
