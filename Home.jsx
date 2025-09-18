import React, { useState } from "react";
import JobPage from "./JobPage";

function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    "Video Editor",
    "Producer/Video Editor",
    "Chief Operating Officer"
  ];

  return (
    <div className="container">
      <h2>Top 10 Candidates Dashboard</h2>

      <div className="button-group">
        {jobs.map((job) => (
          <button key={job} onClick={() => setSelectedJob(job)}>
            {job}
          </button>
        ))}
      </div>

      <div className="job-details">
        {selectedJob ? (
          <JobPage jobId={selectedJob} />
        ) : (
          <p>Please select a job to see top candidates.</p>
        )}
      </div>
    </div>
  );
}

export default Home;






