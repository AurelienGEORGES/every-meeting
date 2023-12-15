import React, { useState } from 'react'
import Item from './Item'

const FormAdd = ({addTodo}) => {
  const [itemValue, setItemValue] = useState("");

  const handleInputChange = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json',
        },
        body: JSON.stringify({ content: itemValue }),
      });
  
      if (response.ok) {
        
        console.log('Item ajouté avec succès !')
        addTodo(itemValue)
        setItemValue("")
        
      } else {
        console.error('Erreur lors de l\'ajout de l\'item');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  return (
    <div>
      <form className="form-create-item" onSubmit={handleSubmit} id="create-item">
        <label htmlFor="create-item" id="create-item">Add</label>
        <input
          value={itemValue}
          type="text"
          placeholder="Add an item"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn-create-item">click to add</button>
      </form>
    </div>
  );
};

export default FormAdd