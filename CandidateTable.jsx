export default function CandidateTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No candidates to display.</p>;
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#444", color: "#fff" }}>
            <th style={{ border: "1px solid #666", padding: "8px" }}>Rank</th>
            <th style={{ border: "1px solid #666", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #666", padding: "8px" }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, index) => (
            <tr key={c.name} style={{ backgroundColor: index % 2 ? "#222" : "#333", color: "#fff" }}>
              <td style={{ border: "1px solid #666", padding: "8px" }}>{index + 1}</td>
              <td style={{ border: "1px solid #666", padding: "8px" }}>{c.name}</td>
              <td style={{ border: "1px solid #666", padding: "8px" }}>{c.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

