import React from 'react';

const FormDelete = ({ id, onDelete }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/ld+json',
        },
      });

      if (response.ok) {
        console.log('Item supprimé avec succès !');
        onDelete(id);
      } else {
        console.error('Erreur lors de la suppression de l\'item');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  return (
    <button type="button" className="btn-create-item" onClick={handleDelete}>
      Delete this item
    </button>
  );
};

export default FormDelete;