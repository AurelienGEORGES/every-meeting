import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ClipLoader from "react-spinners/ClipLoader"

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

const FormUpdate = ({ id, updateTodo, content, priority, difficulty, deadline, done, createdAt }) => {

    const rawdeadline = new Date(deadline);

    // Options de formatage pour obtenir le jour, le nom du mois, l'année et l'heure avec les minutes
    const options = {
        weekday: 'long', // jour de la semaine complet (par exemple : "lundi")
        day: 'numeric',  // jour du mois (par exemple : "6")
        month: 'long',   // nom complet du mois (par exemple : "février")
        year: 'numeric', // année sur 4 chiffres (par exemple : "2024")
        hour: '2-digit', // heure (par exemple : "23")
        minute: '2-digit' // minute sur 2 chiffres (par exemple : "22")
    };

    // Formater la date et l'heure en utilisant les options définies
    const formatteddeadline = rawdeadline.toLocaleDateString('fr-FR', options);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        setMessageSuccess('');
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [updatedValue, setupdatedValue] = useState('');
    const [updatedDateTime, setUpdatedDateTime] = useState('');
    const [updatedPriority, setUpdatedPriority] = useState(priority);
    const [updatedDifficulty, setUpdatedDifficulty] = useState(difficulty);
    const [updatedDone, setUpdatedDone] = useState(done);
    const [MessageSuccess, setMessageSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    let color = '#456123';

    const handleInputUpdate = (e) => {
        setupdatedValue(e.target.value);
    };

    const handleDateTimeUpdate = (e) => {
        setUpdatedDateTime(e.target.value);
        console.log(updatedDateTime)
    };

    const handlePriorityDown = () => {
        if (parseInt(updatedPriority) > 0) {
            setUpdatedPriority(parseInt(updatedPriority) - 1);
        }
    };

    const handlePriorityUp = () => {
        if (parseInt(updatedPriority) < 5) {
            setUpdatedPriority(parseInt(updatedPriority) + 1);
        }
    };

    const handleDifficultyDown = () => {
        if (parseInt(updatedDifficulty) > 0) {
            setUpdatedDifficulty(parseInt(updatedDifficulty) - 1);
        }
    };

    const handleDifficultyUp = () => {
        if (parseInt(updatedDifficulty) < 5) {
            setUpdatedDifficulty(parseInt(updatedDifficulty) + 1);
        }
    };

    const handleDoneDown = () => {
        if (parseInt(updatedDone) > 0) {
            setUpdatedDone(parseInt(updatedDone) - 1);
        }
    };

    const handleDoneUp = () => {
        if (parseInt(updatedDone) < 5) {
            setUpdatedDone(parseInt(updatedDone) + 1);
        }
    };

    const axiosInstance = axios.create({
        baseURL: 'http://localhost/'
    });

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(id)
        console.log(updatedValue)
        console.log(parseInt(updatedPriority))
        console.log(parseInt(updatedDifficulty))
        console.log(updatedDateTime)
        console.log(parseInt(updatedDone))
        console.log({ createdAt })
        console.log(new Date().toISOString())
        try {

            const updatedTodo = {
                content: updatedValue,
                priority: parseInt(updatedPriority),
                difficulty: parseInt(updatedPriority),
                deadline: updatedDateTime,
                done: parseInt(updatedDone),
                createdAt: createdAt,
                updatedAt: new Date().toISOString()
            }

            const response = await axiosInstance
                .put(`api/to_do_list_items/${id}`,
                    {
                        ...updatedTodo
                    });

            if (response.status === 200) {
                setMessageSuccess('Bravo vous avez modifié la ToDo');
                console.log('Todo updated successfully!');
                setLoading(false);
                updateTodo(id, updatedTodo);
            } else {
                console.error('Failed to update todo. Server returned:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('An error occurred during the PUT request:', error);
        }
    };

    return (
        <>
            <button onClick={openModal} className='text-xl text-white bg-sun hover:bg-green-200 hover:text-sun p-3 rounded-full' data-update-btn-id={id}>
                Modifier
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className='todo m-1'>
                    <form className='max-w-xl' onSubmit={handleSubmitUpdate}>
                        <div>
                            <label htmlFor='update-item' className='text-xl text-gray-600'>
                                Changer la ToDO?
                            </label>
                            <textarea
                                value={updatedValue}
                                type='text'
                                placeholder={content}
                                onChange={handleInputUpdate}
                                id='update-item'
                                className="border-solid border-4 border-gray-600 rounded-xl text-gray-600 mt-3 w-full text-xl pl-2 pt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="deadlineUpdateInput" className='text-xl text-gray-600'>Modifiez la date du {formatteddeadline}?</label>
                            <input
                                type="datetime-local"
                                id="deadlineUpdateInput"
                                name="deadlineUpdateInput"
                                value={updatedDateTime}
                                onChange={handleDateTimeUpdate}
                                className='date-add-todo border-solid border-4 border-gray-600 rounded-xl mt-3 p-2 text-xl text-gray-600 w-full'
                            />
                        </div>
                        <p className='text-xl text-gray-600 mt-3'>Modifier les critères?</p>
                        <div className='flex flex-wrap'>
                            <div className='p-3 my-3 me-3 border-solid border-4 border-gray-600 rounded-xl'>
                                <div>
                                    <p className="text-xl text-gray-600">Priorité?</p>
                                </div>
                                <div className='flex flex-row'>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handlePriorityDown}>-</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2'>
                                            <p className="text-3xl text-gray-600">{updatedPriority}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handlePriorityUp}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 my-3 me-3 border-solid border-4 border-gray-600 rounded-xl'>
                                <div>
                                    <p className="number-priority text-xl text-gray-600">Difficulté?</p>
                                </div>
                                <div className='flex flex-row'>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handleDifficultyDown}>-</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2'>
                                            <div>
                                                <p className="text-3xl text-gray-600">{updatedDifficulty}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handleDifficultyUp}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 my-3 border-solid border-4 border-gray-600 rounded-xl'>
                                <div>
                                    <p className="number-priority text-xl text-gray-600">Avancement?</p>
                                </div>
                                <div className='flex flex-row'>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handleDoneDown}>-</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2'>
                                            <div>
                                                <p className="text-3xl text-gray-600">{updatedDone}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button type="button" className="border-gray-600 border-4 text-3xl text-gray-600 p-2 bg-orange-400 rounded-full w-12 hover:bg-yellow-400" onClick={handleDoneUp}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-3'>
                            <div>
                                <button type='submit' className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                        <p className="text-3xl text-gray-600 text-center">{MessageSuccess}</p>
                        <div className="sweet-loading flex justify-center">
                            <ClipLoader
                                color={color}
                                loading={loading}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                        <div className='flex justify-end mt-3'>
                            <button onClick={closeModal} className='text-xl text-gray-600 underline decoration-orange-500' id="btn-close-modal-update">Fermer le formulaire</button>
                        </div>
                    </form>
                </div>
            </Modal >
        </>
    );
};

export default FormUpdate;
