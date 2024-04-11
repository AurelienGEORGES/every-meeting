import React from 'react';
import PropTypes from 'prop-types';

function Item({ content, priority, difficulty, deadline, done, id }) {

    Item.propTypes = {
        content: PropTypes.string.isRequired,  // Required string
        priority: PropTypes.number.isRequired,  // Required number
        difficulty: PropTypes.number.isRequired, // Required number
        deadline: PropTypes.string.isRequired,  // Required string (assuming deadline is a string representation)
        done: PropTypes.number.isRequired,      // Required number
        id: PropTypes.number.isRequired,       // Required string
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

    return (
        <div>
            <p className='hidden' id={id}>
                CY
            </p>
            <p className='text-xl text-gray-600 my-2' data-cy-update={id}>
                {content}
            </p>
            <p className='text-xl text-gray-600 my-2'>priorité :</p>
            <progress max='5' value={priority} />
            <p className='text-xl text-gray-600 my-2'>difficulté :</p>
            <progress max='5' value={difficulty} />
            <p className='text-xl text-gray-600 my-2'>avancement :</p>
            <progress max='5' value={done} />
            <p className='text-xl text-gray-600 my-2'>A faire avant le :</p>
            <p className='text-xl text-gray-600'>{formatteddeadline}</p>
        </div>
    );
};

export default Item;
