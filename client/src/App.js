import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const callApi = async () => {
    try {
      setLoading(true); // Activate loading indicator
      const apiUrl = 'http://localhost/api'; // Replace with the correct API URL
      const response = await axios.get(apiUrl);
      setResponse(response.data.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Deactivate loading indicator whether the request was successful or not
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Click Me!</button>
        {loading ? (
          <p>Loading...</p> // Display the loading indicator
        ) : (
          <p>{response}</p> // Display the response
        )}
      </header>
    </div>
  );
}

export default App;
