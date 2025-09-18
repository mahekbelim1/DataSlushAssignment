import { useState } from "react";

export default function Filters({ onApply }) {
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [minRate, setMinRate] = useState("");
  const [maxRate, setMaxRate] = useState("");

  const applyFilters = () => {
    onApply({
      skill: skill || null,
      location: location || null,
      minRate: minRate ? parseFloat(minRate) : null,
      maxRate: maxRate ? parseFloat(maxRate) : null,
    });
  };

  return (
    <div>
      <h4 className="font-medium mb-2">Filters</h4>

      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Skill (e.g. Python)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        placeholder="Min rate"
        value={minRate}
        onChange={(e) => setMinRate(e.target.value)}
      />

      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        placeholder="Max rate"
        value={maxRate}
        onChange={(e) => setMaxRate(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
}
