import { array } from 'prop-types';
import React, { useState } from 'react';

function Planning() {
  const daysOfWeek = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const monthsOfYear = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
  ];
  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  return (
    <div className='w-full'>
      <div className='flex flex-row'>
        <div className='h-screen flex items-center justify-center'>
          <div className='shadow-lg bg-gray-100 rounded-lg p-4 ml-5'>
            <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Calendrier</h1>

            <div className='flex items-center justify-between mb-4'>
              <div className='text-lg font-semibold text-gray-600'>
                <span>{monthsOfYear[currentMonth]},</span> <span>{currentYear}</span>
              </div>
              <div className='flex space-x-4'>
                <button
                  className='p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition'
                  onClick={() =>
                    setCurrentMonth((prevMonth) => {
                      if (prevMonth === 0) {
                        setCurrentYear(currentYear - 1);
                        return 11;
                      }
                      return prevMonth - 1;
                    })
                  }
                >
                  <i className='text-sm font-bold'>&lt;</i>
                </button>
                <button
                  className='p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition'
                  onClick={() =>
                    setCurrentMonth((prevMonth) => {
                      if (prevMonth === 11) {
                        setCurrentYear(currentYear + 1);
                        return 0;
                      }
                      return prevMonth + 1;
                    })
                  }
                >
                  <i className='text-sm font-bold'>&gt;</i>
                </button>
              </div>
            </div>

            <div className='grid grid-cols-7 text-center font-medium text-gray-500 mb-2'>
              {daysOfWeek.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div
              className='grid grid-cols-7 gap-2'
              style={{
                gridTemplateRows: 'repeat(6, 1fr)', // Toujours 6 lignes
                height: '300px', // Hauteur fixe pour éviter les sauts
              }}
            >
              {/* Ajouter des cases vides pour les jours avant le 1er du mois */}
              {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                <span key={`empty-${index}`} />
              ))}
              {/* Générer les jours du mois */}
              {[...Array(daysInMonth).keys()].map((day) => (
                <span key={day + 1}>{day + 1}</span>
              ))}
            </div>
          </div>
        </div>
        <div className='events'>
          <div className='hidden'>
            <div className='time-input'>
              <div className='event-popup-time'>time</div>
              <input type='number' name='hours' min={0} max={24} className='hours' />
              <input type='number' name='minutes' min={0} max={60} className='minutes' />
            </div>
            <textarea placeholder='entrez texte'></textarea>
            <button className='event-popup-btn'>Add event</button>
            <button className='close-popup'></button>
          </div>
          <div className='event'>
            <div className='event-date-wrapper'>
              <div className='event-date'>May, 15 2024</div>
              <div className='event-time'>10:00</div>
            </div>
            <div className='event-text'>Meeting</div>
            <div className='event-buttons'>
              <i>edit</i>
              <i>sup</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
