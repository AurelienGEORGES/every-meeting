// import React, { useState } from 'react';

// const FormAdd = () => {
//     const [itemValue, setItemValue] = useState('');

//     const handleInputChange = (e) => {
//         setItemValue(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost/api/items', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/ld+json',
//             },
//             body: JSON.stringify({ content: itemValue }),
//         });

//         if (response.ok) {
//             addTodo(itemValue);
//             setItemValue('');
//         }
//     }

//     return (
//         <div>
//             <form className='form-create-item' onSubmit={handleSubmit}>
//                 <label htmlFor='create-item' id='create-item'>
//                     Add
//                 </label>
//                 <input
//                     value={itemValue}
//                     type='text'
//                     placeholder='Add an item'
//                     onChange={handleInputChange}
//                     id='create-item'
//                 />
//                 <button type='submit' className='btn-create-item'>
//                     click to add
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default FormAdd;
