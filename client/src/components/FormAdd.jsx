// import React, { useState } from 'react';

// const FormAdd = ({ addTodo }) => {

//     const [itemValue, setItemValue] = useState('');
//     const [selectedDateTime, setSelectedDateTime] = useState('');
//     const [selectedPriority, setSelectedPriority] = useState('1');
//     const [selectedDifficulty, setSelectedDifficulty] = useState('1');
//     const [selectedDone, setSelectedDone] = useState('1');

//     const handleInputChange = (e) => {
//         setItemValue(e.target.value);
//     };

//     const handlePriorityDown = () => {
//         if (parseInt(selectedPriority) > 1) {
//             setSelectedPriority(parseInt(selectedPriority) - 1);
//         }
//     };

//     const handlePriorityUp = () => {
//         if (parseInt(selectedPriority) < 5) {
//             setSelectedPriority(parseInt(selectedPriority) + 1);
//         }
//     };

//     const handleDifficultyDown = () => {
//         if (parseInt(selectedDifficulty) > 1) {
//             setSelectedDifficulty(parseInt(selectedDifficulty) - 1);
//         }
//     };

//     const handleDifficultyUp = () => {
//         if (parseInt(selectedDifficulty) < 5) {
//             setSelectedDifficulty(parseInt(selectedDifficulty) + 1);
//         }
//     };

//     const handleDoneDown = () => {
//         if (parseInt(selectedDone) > 1) {
//             setSelectedDone(parseInt(selectedDone) - 1);
//         }
//     };

//     const handleDoneUp = () => {
//         if (parseInt(selectedDone) < 5) {
//             setSelectedDone(parseInt(selectedDone) + 1);
//         }
//     };

//     const handleDateTimeChange = (e) => {
//         setSelectedDateTime(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost/api/to_do_list_items', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/ld+json; charset=utf-8',
//                 },
//                 body: JSON.stringify({
//                     content: itemValue,
//                     priority: parseInt(selectedPriority),
//                     difficulty: parseInt(selectedDifficulty),
//                     deadline: selectedDateTime,
//                     done: parseInt(selectedDone),
//                     createdAt: new Date().toISOString()
//                 }),
//             });
//             if (response.ok) {
//                 const newItem = await response.json();
//                 addTodo(newItem);
//                 setItemValue('');
//                 setSelectedDateTime('');
//                 setSelectedPriority('');
//                 setSelectedDifficulty('');
//                 setSelectedDone('');
//                 console.log('Item added successfully!');

//             } else {
//                 console.error('Failed to add item. Server returned:', response.status, response.statusText);
//             }
//         } catch (error) {
//             console.error('An error occurred during the POST request:', error);
//         }
//     };

//     return (
//         <div className='todo'>
//             <form className='form-create-item' onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='create-item' id='create-item'>
//                         Que devez vous faire?
//                     </label>
//                     <textarea
//                         value={itemValue}
//                         type='text'
//                         placeholder='Je dois...'
//                         onChange={handleInputChange}
//                         id='create-item'
//                     />
//                 </div>

//                 <div className='priority-choice'>
//                     <div>
//                         <p className="number-priority">Priorité?</p>
//                     </div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handlePriorityDown}>-</button>
//                         </div>
//                     </div>
//                     <div>
//                         <p className="number-priority">{selectedPriority}</p>
//                     </div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handlePriorityUp}>+</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='priority-choice'>
//                     <div><p className="number-priority">Difficulté?</p></div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handleDifficultyDown}>-</button>
//                         </div>
//                     </div>
//                     <div>
//                         <p className="number-priority">{selectedDifficulty}</p>
//                     </div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handleDifficultyUp}>+</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='priority-choice'>
//                     <div><p className="number-priority">Avancement?</p></div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handleDoneDown}>-</button>
//                         </div>
//                     </div>
//                     <div>
//                         <p className="number-priority">{selectedDone}</p>
//                     </div>
//                     <div className='center-down-up'>
//                         <div>
//                             <button type="button" className="btn-priority" onClick={handleDoneUp}>+</button>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <label htmlFor="deadlineInput">Sélectionnez la date butoire :</label>
//                     <input
//                         type="datetime-local"
//                         id="deadlineInput"
//                         name="deadlineInput"
//                         value={selectedDateTime}
//                         onChange={handleDateTimeChange}
//                         className='date-add-todo'
//                     />
//                 </div>
//                 <div className='center-btn-add-todo'>
//                     <div>
//                         <button type='submit' className='btn-create-item'>
//                             Je me lance!
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default FormAdd;
