let myChart = document.getElementById("myChart").getContext("2d");

let deptWiseCountChart = new Chart(myChart, {
  type: "bar", // bar, pie, doughnut, line, radar, polarArea,
  data: {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Count",
        data: [35, 20, 30, 10, 45, 25],
        backgroundColor: ["red", "green", "purple", "pink", "blue", "magenta"],
        borderWidth: 1,
        borderColor: "gray",
        hoverBorderWidth: 3,
        hoverBorderColor: "black",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Department Wise Count for Chart.Js Workshop",
        color: "black",
        font: {
          size: 25,
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          fontColor: "#000",
        },
      },
      tooltips: {
        enabled: false,
      },
    },
  },
});
