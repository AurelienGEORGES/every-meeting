import Todolist from './components/Todolist'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const callApi = async () => {
    try {
      setLoading(true); // Activate loading indicator
      const apiUrl = 'http://localhost/button-api'; // Replace with the correct API URL
      const apiResponse = await axios.get(apiUrl);
      setResponse(apiResponse.data.message);
    } finally {
      setLoading(false); // Deactivate loading indicator whether the request was successful or not
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button type='button' onClick={callApi}>
          Click Me!
        </button>
        {loading ? (
          <p>Loading...</p> // Display the loading indicator
        ) : (
          <p>{response}</p> // Display the response
        )}
        <Todolist />
      </header>
    </div>
  );
}

export default App;
