import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addtodopng from '../../assets/img-home/add-todo.png';
import modifytodomodalpng from '../../assets/img-home/modify-todo-modal.png';
import modifytodomodalpluspng from '../../assets/img-home/plus.png';
import modifytodomodalminuspng from '../../assets/img-home/minus.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function FormAdd({ addTodo }) {

    FormAdd.propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [itemValue, setItemValue] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('1');
    const [selectedDifficulty, setSelectedDifficulty] = useState('1');
    const [selectedDone, setSelectedDone] = useState('1');
    const [MessageSuccess, setMessageSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const color = '#123456';

    function openModal() {
        setIsOpen(true)
        setMessageSuccess('')
    }

    function closeModal() {
        setIsOpen(false)
    }

    const handleInputChange = (e) => {
        setItemValue(e.target.value)
    };

    const handlePriorityDown = () => {
        if (parseInt(selectedPriority, 10) > 1) {
            setSelectedPriority(parseInt(selectedPriority, 10) - 1)
        }
    };

    const handlePriorityUp = () => {
        if (parseInt(selectedPriority, 10) < 5) {
            setSelectedPriority(parseInt(selectedPriority, 10) + 1);
        }
    };

    const handleDifficultyDown = () => {
        if (parseInt(selectedDifficulty, 10) > 1) {
            setSelectedDifficulty(parseInt(selectedDifficulty, 10) - 1);
        }
    };

    const handleDifficultyUp = () => {
        if (parseInt(selectedDifficulty, 10) < 5) {
            setSelectedDifficulty(parseInt(selectedDifficulty, 10) + 1);
        }
    };

    const handleDoneDown = () => {
        if (parseInt(selectedDone, 10) > 1) {
            setSelectedDone(parseInt(selectedDone, 10) - 1);
        }
    };

    const handleDoneUp = () => {
        if (parseInt(selectedDone, 10) < 5) {
            setSelectedDone(parseInt(selectedDone, 10) + 1);
        }
    };

    const handleDateTimeChange = (e) => {
        setSelectedDateTime(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/to_do_list_items', {
            method: 'POST',
            headers: {
                'content-type': 'application/ld+json; charset=utf-8',
            },
            body: JSON.stringify({
                content: itemValue,
                priority: parseInt(selectedPriority, 10),
                difficulty: parseInt(selectedDifficulty, 10),
                deadline: selectedDateTime,
                done: parseInt(selectedDone, 10),
                createdAt: new Date().toISOString(),
            }),
        });
        if (response.ok) {
            const newItem = await response.json();
            addTodo(newItem);
            setItemValue('');
            setSelectedDateTime('');
            setSelectedPriority('1');
            setSelectedDifficulty('1');
            setSelectedDone('1');
            setMessageSuccess('Bravo vous avez ajoutez la ToDo');
            setLoading(false);
        } else {
            setLoading(false);
            const body = await response.json();
            toast(body.violations[0].message);
            throw new Error(response.statusText || "Une erreur s'est produite");
        }
    }


    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
                transition:Bounce
            />
            <div className='flex justify-center m-3'>
                <button
                    onClick={openModal}
                    className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav px-3 py-1 rounded-full'
                    data-btn-add='add'
                    type='button'
                >
                    <div className='flex flex-row'>
                        <div>
                            <img src={addtodopng} alt='plus' className='h-[45px] w-[45px]' />
                        </div>
                        <div className='flex items-center'>
                            <p className='ps-1'>Ajouter</p>
                        </div>
                    </div>
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Modal'
            >
                <div className='todo m-1'>
                    <form className='max-w-xl' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='create-item-content' className='text-xl text-gray-600'>
                                Que devez vous faire?<textarea
                                value={itemValue}
                                type='text'
                                placeholder='Je dois...'
                                onChange={handleInputChange}
                                id="create-item-content"
                                className='border-solid border-4 border-gray-600 rounded-xl text-gray-600 mt-3 w-full text-xl pl-2 pt-1'
                            />
                            </label>
                            
                        </div>
                        <div className='flex-wrap'>
                            <div className='mt-2'>
                                <div className='flex flex-col'>
                                    <div>
                                        <label htmlFor="deadlineInput" className='text-xl text-gray-600'>
                                            Sélectionnez la date butoire :
                                            <input
                                            type='datetime-local'
                                            id="deadlineInput"
                                            name="deadlineInput"
                                            value={selectedDateTime}
                                            onChange={handleDateTimeChange}
                                            className='date-add-todo border-solid border-4 border-gray-600 rounded-xl mt-3 p-2 text-xl text-gray-600 w-full'
                                        />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <p className='text-xl text-gray-600 mt-3'>ajustez les critères :</p>
                            <div className='flex flex-wrap'>
                                <div className='p-3 my-3 me-3 border-solid border-4 border-gray-600 rounded-xl'>
                                    <div>
                                        <p className='text-xl text-gray-600'>Priorité?</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handlePriorityDown}>
                                                    <img
                                                        src={modifytodomodalminuspng}
                                                        alt='moins'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='mx-2'>
                                                <p className='text-3xl text-gray-600'>{selectedPriority}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handlePriorityUp}>
                                                    <img
                                                        src={modifytodomodalpluspng}
                                                        alt='plus'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 my-3 me-3 border-solid border-4 border-gray-600 rounded-xl'>
                                    <div>
                                        <p className='number-priority text-xl text-gray-600'>Difficulté?</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handleDifficultyDown}>
                                                    <img
                                                        src={modifytodomodalminuspng}
                                                        alt='moins'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='mx-2'>
                                                <div>
                                                    <p className='text-3xl text-gray-600'>{selectedDifficulty}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handleDifficultyUp}>
                                                    <img
                                                        src={modifytodomodalpluspng}
                                                        alt='plus'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 my-3 border-solid border-4 border-gray-600 rounded-xl'>
                                    <div>
                                        <p className='number-priority text-xl text-gray-600'>Avancement?</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handleDoneDown}>
                                                    <img
                                                        src={modifytodomodalminuspng}
                                                        alt='moins'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='mx-2'>
                                                <div>
                                                    <p className='text-3xl text-gray-600'>{selectedDone}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <button type='button' onClick={handleDoneUp}>
                                                    <img
                                                        src={modifytodomodalpluspng}
                                                        alt='plus'
                                                        className='img-fluid  w-[45px]'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div>
                                    <button
                                        type='submit'
                                        className='text-xl text-white bg-sun hover:bg-blue-200 hover:text-sun px-3 py-2 rounded-full'
                                    >
                                        <div className='flex flex-row'>
                                            <div>
                                                <img
                                                    src={modifytodomodalpng}
                                                    alt='corbeille'
                                                    className='h-[45px] w-[45px]'
                                                />
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='ps-1'>Ajouter</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className='text-3xl text-gray-600 text-center'>{MessageSuccess}</p>
                        <div className='sweet-loading flex justify-center'>
                            <ClipLoader
                                color={color}
                                loading={loading}
                                size={50}
                                aria-label='Loading Spinner'
                                data-testid='loader'
                            />
                        </div>
                        <div className='flex justify-end mt-3'>
                            <button
                                type="button"
                                onClick={closeModal}
                                className='text-xl text-gray-600 underline decoration-orange-500'
                                id='btn-close-modal-add'
                            >
                                Fermer le formulaire
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default FormAdd;
