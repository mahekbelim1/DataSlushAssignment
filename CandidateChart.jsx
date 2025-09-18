import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CandidateChart({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available for this job.</p>;
  }

  const chartData = {
    labels: data.map((c) => c.name),
    datasets: [
      {
        label: "Score",
        data: data.map((c) => c.score),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <Bar data={chartData} />
    </div>
  );
}
