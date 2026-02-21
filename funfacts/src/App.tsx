import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFact = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFact(data.text);
    } catch (err) {
      setError('Failed to fetch fact. Try again!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="container">
      <h1>🎉 Fun Facts</h1>
      <div className="fact-box">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {fact && <p className="fact">{fact}</p>}
      </div>
      <button onClick={fetchFact} disabled={loading}>
        {loading ? 'Loading...' : 'Get Another Fact'}
      </button>
    </div>
  )
}

export default App
