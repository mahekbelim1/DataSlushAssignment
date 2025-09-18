export default function CandidateModal({ candidate, onClose }) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded shadow max-w-2xl w-full z-10">
        <button
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2">
          {candidate.candidate_name || candidate.name || "Unknown"}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          {candidate.bio || candidate.description || "No description"}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <strong>Skills:</strong>
            <div>{candidate.skills || candidate.skillset || "-"}</div>
          </div>
          <div>
            <strong>Location:</strong>
            <div>{candidate.location || "-"}</div>
          </div>
          <div>
            <strong>Rate:</strong>
            <div>
              {candidate.monthly_rate ||
                candidate.hourly_rate ||
                candidate.rate ||
                "-"}
            </div>
          </div>
          <div>
            <strong>Score:</strong>
            <div>{candidate.score || candidate.match_score || "-"}</div>
          </div>
        </div>

        <div className="mt-4">
          <strong>Justification / Notes:</strong>
          <div className="text-sm text-gray-700 mt-1">
            {candidate.justification || candidate.notes || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}
