// import React, { useEffect, useState, useRef } from 'react';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
// import axiosInstance from '../services/axiosInstance';
// import { useAxiosInterceptor } from '../services/axiosInstance';
// import ClipLoader from 'react-spinners/ClipLoader';

function Planning() {

    // useAxiosInterceptor();

    const { userConnected } = useAuth();
    // const userId = userConnected.id;
    // const effectRun = useRef(false)
    // // const effectRun = useRef(true);

    const daysOfWeek = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
    const monthsOfYear = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    const currentDate = new Date();

    const [currentDay, setCurrentDay] = useState(currentDate.getDate());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [editMode, setEditMode] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEventIndex, setSelectedEventIndex] = useState(null);
    const [events, setEvents] = useState([]);
    const [eventText, setEventText] = useState('');
    const [eventTextTitle, setEventTextTitle] = useState('');
    const [eventTime, setEventTime] = useState({ hours: '', minutes: '' });
    const [eventTimeEnd, setEventTimeEnd] = useState({ hoursEnd: '', minutesEnd: '' });
    // const [isLoading, setIsLoading] = useState(true);

    const date = new Date(currentYear, currentMonth, currentDay);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController();

    //     const fetchData = async () => {
    //         try {
    //             const response = await axiosInstance.get(`/evenements`, {
    //                 signal: controller.signal,
    //             });
    //             isMounted && setEvents(response.data);
    //         } catch (error) {
    //             console.error('Erreur lors de la récupération des données:', error.message);
    //             console.error("Stack trace de l'erreur:", error.stack);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     effectRun.current && fetchData();

    //     return () => {
    //         isMounted = false;
    //         isMounted && controller.abort();
    //         effectRun.current = true
    //         //   effectRun.current = false;
    //     };
    // }, [userId]);

    const openModal = (day) => {
        setEditMode(false);
        const selectedDateObj = new Date(currentYear, currentMonth, day);
        const selectedDayOfWeek = daysOfWeek[(selectedDateObj.getDay() + 6) % 7];
        const fullDate = `${selectedDayOfWeek} ${day} ${monthsOfYear[currentMonth]} ${currentYear}`;
        setSelectedDate(fullDate);
        setModalIsOpen(true);
    };

    const openEditModal = (index) => {
        const eventToEdit = events[index];
        setSelectedEventIndex(index);
        setSelectedDate(eventToEdit.date);
        setEventText(eventToEdit.text);
        setEventTextTitle(eventToEdit.textTitle);
        setEventTime({
            hours: eventToEdit.time.split(':')[0],
            minutes: eventToEdit.time.split(':')[1]
        });
        setEventTimeEnd({
            hoursEnd: eventToEdit.timeEnd.split(':')[0],
            minutesEnd: eventToEdit.timeEnd.split(':')[1]
        });
        setEditMode(true);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setEventText('');
        setEventTextTitle('');
        setEventTime({ hours: '', minutes: '' });
        setEventTimeEnd({ hoursEnd: '', minutesEnd: '' });
    };

    // const handleAddEvent = async (e) => {
    const handleAddEvent = (e) => {
        e.preventDefault();

        // const response = await axiosInstance.post(
        //     '/evenements',
        //     {
        //         date: selectedDate,
        //         time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}:00`,
        //         timeEnd: `${eventTimeEnd.hoursEnd.padStart(2, '0')}:${eventTimeEnd.minutesEnd.padStart(2, '0')}:00`,
        //         text: eventText,
        //         textTitle: eventTextTitle,
        //         user: `/api/users/${userId}`,
        //     },
        //     {
        //         headers: {
        //             'Content-Type': 'application/ld+json',
        //         },
        //     },
        // );
        // if (response.status === 201) {
        //     const newEvent = response.data
        //     setEvents([...events, newEvent]);
        //     setEventText('');
        //     setEventTextTitle('');
        //     setEventTime({ hours: '', minutes: '' });
        //     setEventTimeEnd({ hoursEnd: '', minutesEnd: '' });
        //     setLoading(false);
        //     closeModal();
        // } else {
        //     setLoading(false);
        //     toast(response.data.violations[0].message);
        //     throw new Error(response.statusText || "Une erreur s'est produite");
        // }

        if (!eventText.trim()) return;

        const newEvent = {
            date: selectedDate,
            time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
            timeEnd: `${eventTimeEnd.hoursEnd.padStart(2, '0')}:${eventTimeEnd.minutesEnd.padStart(2, '0')}`,
            text: eventText,
            textTitle: eventTextTitle
        };
        setEvents([...events, newEvent]);
        closeModal();
    };

    // const handleUpdateEvent = async (e) => {
    const handleUpdateEvent = (e) => {
        e.preventDefault();
        if (!eventText.trim()) return;

        const updatedEvents = [...events];
        updatedEvents[selectedEventIndex] = {
            date: selectedDate,
            time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
            timeEnd: `${eventTimeEnd.hoursEnd.padStart(2, '0')}:${eventTimeEnd.minutesEnd.padStart(2, '0')}`,
            text: eventText,
            textTitle: eventTextTitle
        };

        setEvents(updatedEvents);
        closeModal();

        // setLoading(true);

        // const updatedEvents = [...events];
        // updatedEvents[selectedEventIndex] = {
        //     date: selectedDate,
        //     time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
        //     timeEnd: `${eventTimeEnd.hoursEnd.padStart(2, '0')}:${eventTimeEnd.minutesEnd.padStart(2, '0')}`,
        //     text: eventText,
        //     textTitle: eventTextTitle
        // };

        // const response = await axiosInstance.put(`/evenements/${selectedEventIndex}`, {
        //     ...updatedEvents,
        // });

        // if (response.status === 200) {
        //     setLoading(false);
        //     setEvents(updatedEvents);
        //     closeModal();
        // }
    };

    const handleDeleteEvent = (indexToDelete) => {
        setEvents(events.filter((_, index) => index !== indexToDelete));
    };

    // const handleDeleteEvent = async (indexToDelete) => {
    //     setIsLoading(true);

    //     const response = await axiosInstance.delete(`/evenements/${indexToDelete}`);
    //     if (response.status === 204) {
    //       setIsLoading(false);
    //     }
    // };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const getEventCount = (day) => {
        return events.filter(event => {
            const eventParts = event.date.split(' ');
            return (
                parseInt(eventParts[1]) === day &&
                monthsOfYear.indexOf(eventParts[2]) === currentMonth &&
                parseInt(eventParts[3]) === currentYear
            );
        }).length;
    };

    return (
        <div className='flex flex-col w-full'>
            {/* Titre */}
            <div className='flex justify-center my-10'>
                <h1 className='text-2xl md:text-4xl text-nav text-center mx-3'>
                    Voici ton planning {userConnected.username}. Ici tu pourras créer et gérer tes événements.
                </h1>
            </div>
            <div className='w-full flex flex-grow justify-center items-start lg:items-center lg:mb-0 mb-5'>
                <div className='flex flex-col lg:flex-row items-center justify-center mx-auto lg:space-x-10 lg:w-3/4 space-y-5 md:space-y-0'>
                    {/* Calendrier */}
                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        <div className='shadow-lg bg-gray-100 rounded-lg p-4'>
                            <h1 className='text-2xl font-bold text-center text-gray-600 mb-4'>Calendrier</h1>
                            <div className='flex items-center justify-between mb-4'>
                                <div className='text-lg text-gray-600'>
                                    <span>{monthsOfYear[currentMonth]},</span> <span>{currentYear}</span>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className='p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition' onClick={handlePrevMonth}>
                                        <i className='text-sm font-bold'>&lt;</i>
                                    </button>
                                    <button className='p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition' onClick={handleNextMonth}>
                                        <i className='text-sm font-bold'>&gt;</i>
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-7 text-center font-medium text-gray-600 mb-2'>
                                {daysOfWeek.map((day) => (
                                    <span key={day}>{day}</span>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-4" style={{ gridTemplateRows: "repeat(6, 1fr)", height: "300px" }}>
                                {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                                    <span key={`empty-${index}`} />
                                ))}
                                {[...Array(daysInMonth).keys()].map((day) => {
                                    const isToday = day + 1 === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
                                    const eventCount = getEventCount(day + 1);
                                    return (
                                        <div key={day + 1} className="relative">
                                            <span
                                                className={`cursor-pointer p-2 flex items-center justify-center text-gray-600 ${isToday ? "bg-nav text-white rounded-full w-10 h-10" : ""
                                                    }`}
                                                onClick={() => openModal(day + 1)}
                                            >
                                                {day + 1}
                                            </span>
                                            {/* Pastille du nombre d'événements */}
                                            {eventCount > 0 && (
                                                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                    {eventCount}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Événements */}
                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        <div className='event-list w-full max-w-lg text-center'>
                            <h3 className='text-2xl font-bold mb-3 text-gray-600'>Événements</h3>
                            <div className='overflow-y-auto max-h-96'>
                                {events.length > 0 ? (
                                    events.map((event, index) => (
                                        <div key={index} className='event bg-white shadow-md border-solid border-4 border-nav rounded-xl p-3 my-2'>
                                            <p className='text-gray-600'>{event.date} de {event.time} à {event.timeEnd}</p>
                                            <p className='text-gray-600'>{event.textTitle}</p>
                                            <p className='text-gray-600'>{event.text}</p>
                                            <button
                                                className='mt-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition'
                                                onClick={() => openEditModal(index)}
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                className='mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition'
                                                onClick={() => handleDeleteEvent(index)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-gray-600'>Aucun événement pour le moment.</p>
                                )}
                                {/* {isLoading ? (
                                    <div className='flex h-48 justify-center items-center'>
                                        <ClipLoader
                                            color='#951471'
                                            loading={isLoading}
                                            size={50}
                                            aria-label='Loading Spinner'
                                            data-testid='loader'
                                        />
                                    </div>
                                ) : (
                                    events &&
                                    events.map((event) => (
                                        <div key={event.id} className='event bg-white shadow-md border-solid border-4 border-nav rounded-xl p-3 my-2'>
                                            <p className='text-gray-600'>{event.date} de {event.time} à {event.timeEnd}</p>
                                            <p className='text-gray-600'>{event.textTitle}</p>
                                            <p className='text-gray-600'>{event.text}</p>
                                            <button
                                                className='mt-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition'
                                                onClick={() => openEditModal(event.id)}
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                className='mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition'
                                                onClick={() => handleDeleteEvent(event.id)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    ))
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalIsOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white rounded-lg p-6 w-full max-w-md shadow-lg'>
                        <p className='text-center text-gray-600 mb-4'>Date sélectionnée : {selectedDate}</p>
                        <h2 className='text-2xl font-bold mb-3 text-center'>{editMode ? 'Modifier' : 'Ajouter'} un événement</h2>
                        <form onSubmit={editMode ? handleUpdateEvent : handleAddEvent} className='flex flex-col space-y-3'>
                            <p className='text-center text-gray-600 mb-4'>heure de début</p>
                            <div className='flex space-x-2'>
                                <input
                                    type='number'
                                    name='hours'
                                    min={0}
                                    max={23}
                                    value={eventTime.hours}
                                    onChange={(e) => setEventTime({ ...eventTime, hours: e.target.value })}
                                    placeholder='Heures'
                                    className='border p-2 rounded w-full'
                                    required
                                />
                                <input
                                    type='number'
                                    name='minutes'
                                    min={0}
                                    max={59}
                                    value={eventTime.minutes}
                                    onChange={(e) => setEventTime({ ...eventTime, minutes: e.target.value })}
                                    placeholder='Minutes'
                                    className='border p-2 rounded w-full'
                                    required
                                />
                            </div>
                            <p className='text-center text-gray-600 mb-4'>heure de fin</p>
                            <div className='flex space-x-2'>
                                <input
                                    type='number'
                                    name='hoursEnd'
                                    min={0}
                                    max={23}
                                    value={eventTimeEnd.hoursEnd}
                                    onChange={(e) => setEventTimeEnd({ ...eventTimeEnd, hoursEnd: e.target.value })}
                                    placeholder='Heures'
                                    className='border p-2 rounded w-full'
                                    required
                                />
                                <input
                                    type='number'
                                    name='minutesEnd'
                                    min={0}
                                    max={59}
                                    value={eventTimeEnd.minutesEnd}
                                    onChange={(e) => setEventTimeEnd({ ...eventTimeEnd, minutesEnd: e.target.value })}
                                    placeholder='Minutes'
                                    className='border p-2 rounded w-full'
                                    required
                                />
                            </div>
                            <input
                                type='text'
                                placeholder='Nom de la réunion'
                                value={eventTextTitle}
                                onChange={(e) => setEventTextTitle(e.target.value)}
                                className='border p-2 rounded w-full'
                                required
                            />
                            <textarea
                                placeholder='Description de la réunion'
                                value={eventText}
                                onChange={(e) => setEventText(e.target.value)}
                                className='border p-2 rounded w-full h-24'
                                required
                            />
                            <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>{editMode ? 'Modifier' : 'Ajouter'}</button>
                        </form>
                        <div className='flex justify-end mt-3'>
                            <button
                                type='button'
                                onClick={closeModal}
                                className='text-lg text-gray-600 underline hover:text-gray-800'
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Planning;
