import { useState } from 'react';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');
  const [fixtures, setFixtures] = useState([]);

  const addPlayer = () => {
    if (name.trim() && !players.includes(name.trim())) {
      setPlayers([...players, name.trim()]);
      setName('');
    }
  };

  const generateFixtures = () => {
    const newFixtures = [];
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        newFixtures.push({ home: players[i], away: players[j], homeScore: '', awayScore: '' });
      }
    }
    setFixtures(newFixtures);
  };

  const updateScore = (index, homeScore, awayScore) => {
    const updated = [...fixtures];
    updated[index].homeScore = homeScore;
    updated[index].awayScore = awayScore;
    setFixtures(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">eFootball Tournament Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player name"
          className="border px-2 py-1 rounded w-full"
        />
        <button onClick={addPlayer} className="bg-blue-600 text-white px-4 rounded">Add</button>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Players:</h2>
        <ul className="list-disc list-inside">
          {players.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <button onClick={generateFixtures} disabled={players.length < 2} className="mb-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50">
        Generate Fixtures
      </button>

      {fixtures.length > 0 && (
        <div>
          <h2 className="font-semibold mb-2">Fixtures:</h2>
          <div className="space-y-2">
            {fixtures.map((match, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 p-4 border rounded">
                <div>
                  {match.home} vs {match.away}
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={match.homeScore}
                    onChange={(e) => updateScore(idx, e.target.value, match.awayScore)}
                    className="w-12 text-center border rounded"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={match.awayScore}
                    onChange={(e) => updateScore(idx, match.homeScore, e.target.value)}
                    className="w-12 text-center border rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
