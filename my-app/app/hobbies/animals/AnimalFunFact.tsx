'use client';

import { useState } from 'react';

export default function AnimalFunFact() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [funFact, setFunFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetFunFact = async () => {
    if (!selectedAnimal) {
      setError('Please select an animal');
      return;
    }

    setLoading(true);
    setError('');
    setFunFact('');

    try {
      const response = await fetch('/api/animal-fun-fact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: selectedAnimal }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch fun fact');
      }

      const data = await response.json();
      setFunFact(data.funFact);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred while fetching the fun fact'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 p-8 bg-cabin-dark border border-cabin-text rounded-lg">
      <h3 className="text-2xl font-bold text-cabin-text mb-6">
        Discover Random Animal Fun Facts
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-cabin-muted mb-2">Enter an animal:</label>
          <input
            type="text"
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
            placeholder="e.g., Lion, Dolphin, Eagle..."
            className="w-full p-3 bg-cabin-border text-cabin-text rounded border border-cabin-text focus:outline-none focus:ring-2 focus:ring-cabin-text placeholder-cabin-text placeholder-opacity-50"
            onKeyPress={(e) => e.key === 'Enter' && handleGetFunFact()}
          />
        </div>

        <button
          onClick={handleGetFunFact}
          disabled={loading}
          className="w-full p-3 bg-cabin-rain text-cabin-dark font-bold rounded hover:opacity-90 disabled:opacity-50 transition-opacity border border-cabin-text"
        >
          {loading ? 'Loading...' : 'Get Fun Fact'}
        </button>

        {error && <div className="p-4 bg-red-900 text-red-200 rounded">{error}</div>}

        {funFact && (
          <div className="p-4 bg-cabin-border border border-cabin-rain rounded">
            <p className="text-cabin-text leading-relaxed">{funFact}</p>
          </div>
        )}
      </div>
    </div>
  );
}
