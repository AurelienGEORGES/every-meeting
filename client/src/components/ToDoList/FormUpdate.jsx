import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import modifytodopng from '../../assets/img-home/modify-todo.png';
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

function FormUpdate({
    id,
    updateTodo,
    content,
    priority,
    difficulty,
    deadline,
    done,
    createdAt,
}) {

    FormUpdate.propTypes = {
        content: PropTypes.string.isRequired,  // Required string
        priority: PropTypes.number.isRequired,  // Required number
        difficulty: PropTypes.number.isRequired, // Required number
        deadline: PropTypes.string.isRequired,  // Required string (assuming deadline is a string representation)
        done: PropTypes.number.isRequired,      // Required number
        id: PropTypes.number.isRequired,
        updateTodo: PropTypes.func.isRequired,       // Required string
        createdAt: PropTypes.string.isRequired
    };

    const rawdeadline = new Date(deadline);
    rawdeadline.setHours(rawdeadline.getHours() - 2);

    // Options de formatage pour obtenir le jour, le nom du mois, l'année et l'heure avec les minutes
    const options = {
        weekday: 'long', // jour de la semaine complet (par exemple : "lundi")
        day: 'numeric', // jour du mois (par exemple : "6")
        month: 'long', // nom complet du mois (par exemple : "février")
        year: 'numeric', // année sur 4 chiffres (par exemple : "2024")
        hour: '2-digit', // heure (par exemple : "23")
        minute: '2-digit', // minute sur 2 chiffres (par exemple : "22")
    };

    // Formater la date et l'heure en utilisant les options définies
    const formatteddeadline = rawdeadline.toLocaleDateString('fr-FR', options);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const [updatedValue, setupdatedValue] = useState(content);
    const [updatedDateTime, setUpdatedDateTime] = useState(deadline);
    const [updatedPriority, setUpdatedPriority] = useState(priority);
    const [updatedDifficulty, setUpdatedDifficulty] = useState(difficulty);
    const [updatedDone, setUpdatedDone] = useState(done);
    const [MessageSuccess, setMessageSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const color = '#456123';

    function openModal() {
        setIsOpen(true);
        setMessageSuccess('');
    }

    const handleInputUpdate = (e) => {
        setupdatedValue(e.target.value);
    };

    const handleDateTimeUpdate = (e) => {
        setUpdatedDateTime(e.target.value);
    };

    const handlePriorityDown = () => {
        if (parseInt(updatedPriority, 10) > 1) {
            setUpdatedPriority(parseInt(updatedPriority, 10) - 1);
        }
    };

    const handlePriorityUp = () => {
        if (parseInt(updatedPriority, 10) < 5) {
            setUpdatedPriority(parseInt(updatedPriority, 10) + 1);
        }
    };

    const handleDifficultyDown = () => {
        if (parseInt(updatedDifficulty, 10) > 1) {
            setUpdatedDifficulty(parseInt(updatedDifficulty, 10) - 1);
        }
    };

    const handleDifficultyUp = () => {
        if (parseInt(updatedDifficulty, 10) < 5) {
            setUpdatedDifficulty(parseInt(updatedDifficulty, 10) + 1);
        }
    };

    const handleDoneDown = () => {
        if (parseInt(updatedDone, 10) > 1) {
            setUpdatedDone(parseInt(updatedDone, 10) - 1);
        }
    };

    const handleDoneUp = () => {
        if (parseInt(updatedDone, 10) < 5) {
            setUpdatedDone(parseInt(updatedDone, 10) + 1);
        }
    };

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8000/',
    });

    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        
            const updatedTodo = {
                content: updatedValue,
                priority: parseInt(updatedPriority, 10),
                difficulty: parseInt(updatedPriority, 10),
                deadline: updatedDateTime,
                done: parseInt(updatedDone, 10),
                createdAt,
                updatedAt: new Date().toISOString(),
            };

            const response = await axiosInstance.put(`api/to_do_list_items/${id}`, {
                ...updatedTodo,
            });

            if (response.status === 200) {
                setMessageSuccess('Bravo vous avez modifié la ToDo');
                setLoading(false);
                updateTodo(id, updatedTodo);
                window.location.reload();
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
            <button
                type="button"
                onClick={openModal}
                className='text-xl text-white bg-sun hover:bg-green-200 hover:text-sun px-3 py-1 rounded-full'
                data-update-btn-id={id}
            >
                <div className='flex flex-row'>
                    <div>
                        <img src={modifytodopng} alt='feuille' className='h-[45px] w-[45px]' />
                    </div>
                    <div className='flex items-center'>
                        <p className='ps-1'>Modifier</p>
                    </div>
                </div>
            </button>
            <Modal
                isOpen={modalIsOpen}
                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Modal'
            >
                <div className='todo m-1'>
                    <form className='max-w-xl' onSubmit={handleSubmitUpdate}>
                        <div>
                            <label htmlFor='update-item' className='text-xl text-gray-600'>
                                Changer la ToDO?<textarea
                                value={updatedValue}
                                type='text'
                                placeholder={content}
                                onChange={handleInputUpdate}
                                id='update-item'
                                className='border-solid border-4 border-gray-600 rounded-xl text-gray-600 mt-3 w-full text-xl pl-2 pt-1'
                            />
                            </label> 
                        </div>
                        <div>
                            <label htmlFor='deadlineUpdateInput' className='text-xl text-gray-600'>
                                Modifiez la date du {formatteddeadline}?
                                <input
                                type='datetime-local'
                                id='deadlineUpdateInput'
                                name='deadlineUpdateInput'
                                value={updatedDateTime}
                                onChange={handleDateTimeUpdate}
                                className='date-add-todo border-solid border-4 border-gray-600 rounded-xl mt-3 p-2 text-xl text-gray-600 w-full'
                            />
                            </label>
                            
                        </div>
                        <p className='text-xl text-gray-600 mt-3'>Modifier les critères?</p>
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
                                            <p className='text-3xl text-gray-600'>{updatedPriority}</p>
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
                                                <p className='text-3xl text-gray-600'>{updatedDifficulty}</p>
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
                                                <p className='text-3xl text-gray-600'>{updatedDone}</p>
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
                                    className='text-xl text-white bg-sun hover:bg-green-200 hover:text-sun p-3 rounded-full'
                                >
                                    <div className='flex flex-row'>
                                        <div>
                                            <img src={modifytodomodalpng} alt='fusée' className='img-fluid  w-[45px]' />
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='ps-1'>Enregister</p>
                                        </div>
                                    </div>
                                </button>
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
                                type='button'
                                onClick={closeModal}
                                className='text-xl text-gray-600 underline decoration-orange-500'
                                id='btn-close-modal-update'
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

export default FormUpdate;
