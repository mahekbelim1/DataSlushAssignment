// src/pages/JobPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobTop10 } from "../api";
import CandidateChart from "../components/CandidateChart";
import CandidateTable from "../components/CandidateTable";

export default function JobPage() {
  const { jobId } = useParams();
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchJobTop10(jobId)
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Loading candidates...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>❌ {error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Top 10 Candidates - {decodeURIComponent(jobId)}</h2>
      <CandidateChart data={candidates} />
      <CandidateTable data={candidates} />
    </div>
  );
}










