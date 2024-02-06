// import React, { useState } from 'react';
// import axios from 'axios';

// const FormUpdate = ({ id, updateTodo, content, priority, difficulty, deadline, done, createdAt }) => {

//     const priorityNumbers = [1, 2, 3, 4, 5];
//     const difficultyNumbers = [1, 2, 3, 4, 5];
//     const doneNumbers = [0, 1];

//     const [updatedValue, setupdatedValue] = useState('');
//     const [updatedDateTime, setUpdatedDateTime] = useState('');
//     const [updatedPriority, setUpdatedPriority] = useState('');
//     const [updatedDifficulty, setUpdatedDifficulty] = useState('');
//     const [updatedDone, setUpdatedDone] = useState('');

//     const handleInputUpdate = (e) => {
//         setupdatedValue(e.target.value);
//     };

//     const handlePriorityUpdate = (e) => {
//         setUpdatedPriority(e.target.value);
//     };

//     const handleDifficultyUpdate = (e) => {
//         setUpdatedDifficulty(e.target.value);
//     };

//     const handleDateTimeUpdate = (e) => {
//         setUpdatedDateTime(e.target.value);
//     };

//     const handleDoneUpdate = (e) => {
//         setUpdatedDone(e.target.value);
//     };

//     const axiosInstance = axios.create({
//         baseURL: 'http://localhost/'
//     });

//     const handleSubmitUpdate = async (e) => {
//         e.preventDefault();
//         console.log(id)
//         console.log(updatedValue)
//         console.log(parseInt(updatedPriority))
//         console.log(parseInt(updatedDifficulty))
//         console.log(updatedDateTime)
//         console.log(parseInt(updatedDone))
//         console.log({createdAt})
//         console.log(new Date().toISOString())
//         try {
            
//             const response = await axiosInstance
//                 .put(`api/to_do_list_items/${id}`,
//                     {
//                         content: updatedValue,
//                         priority: parseInt(updatedPriority),
//                         difficulty: parseInt(updatedPriority),
//                         deadline: updatedDateTime,
//                         done: parseInt(updatedDone),
//                         createdAt: createdAt,
//                         updatedAt: new Date().toISOString()
//                     });

//             if (response.status === 200) {
//                 console.log('Todo updated successfully!');
//                 updateTodo();

//             } else {
//                 console.error('Failed to update todo. Server returned:', response.status, response.statusText);
//             }
//         } catch (error) {
//             console.error('An error occurred during the PUT request:', error);
//         }
//     };

//     return (
//         <form className='form-update-item' onSubmit={handleSubmitUpdate}>
//             <div>
//                 <label htmlFor='update-item' id='update-item'>
//                     Add
//                 </label>
//                 <input
//                     value={updatedValue}
//                     type='text'
//                     placeholder={content}
//                     onChange={handleInputUpdate}
//                     id='create-item'
//                 />
//             </div>
//             <div>
//                 <label htmlFor="priorityUpdateSelect">Modifiez la priorité :</label>
//                 <select id="priorityUpdateSelect" value={updatedPriority} onChange={handlePriorityUpdate}>
//                     <option value="">Modifiez la priorité {priority}</option>
//                     {priorityNumbers.map((number) => (
//                         <option key={number} value={number}>
//                             {number}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="difficultyUpdateSelect">Modifiez la difficulté :</label>
//                 <select id="difficultyUpdateSelect" value={updatedDifficulty} onChange={handleDifficultyUpdate}>
//                     <option value="">Modifiez la difficulté {difficulty}</option>
//                     {difficultyNumbers.map((number) => (
//                         <option key={number} value={number}>
//                             {number}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="doneUpdateSelect">Choisissez si c'est fait :</label>
//                 <select id="doneUpdateSelect" value={updatedDone} onChange={handleDoneUpdate}>
//                     <option value="">Modifiez si c'est fait {done}</option>
//                     {doneNumbers.map((number) => (
//                         <option key={number} value={number}>
//                             {number}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="deadlineUpdateInput">Modifiez une date et une heure {deadline} :</label>
//                 <input
//                     type="datetime-local"
//                     id="deadlineUpdateInput"
//                     name="deadlineUpdateInput"
//                     value={updatedDateTime}
//                     onChange={handleDateTimeUpdate}
//                 />
//             </div>
//             <button type='submit' className='btn-update-item'>
//                 Update this item
//             </button>
//         </form>
//     );
// };

// export default FormUpdate;