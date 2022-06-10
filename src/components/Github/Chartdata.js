import date from "./Date"
import datapoints from "./Data";
const labels = [];
for (let i = 0; i < date.length - 1; ++i) {
    labels.push(date[i]);
}
const chartData = {
    labels: labels,
    datasets: [
        {
            label: 'GitHub Contributions',
            data: datapoints,
            fill: true,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            cubicInterpolationMode: 'monotone',
            tension: 0.1,
            borderWidth: 1,
            pointRadius: 2
        }
    ]
};
export default chartData;