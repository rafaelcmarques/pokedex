export function ChartStatus(root, pokemon, chartWrapper) {
  const ctx = root.querySelector("#myChart")
  let newChart

  function createChart() {
    const statusData = getStatus()

    newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "HP",
          "ATTACK",
          "DEFENSE",
          "SPECIAL-ATK",
          "SPECIAL-DEF",
          "SPEED",
        ],
        datasets: [
          {
            label: `${pokemon.name}'s status`,
            data: statusData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            min: 0,
            ticks: {
              stepSize: 10,
            },
          },
        },
      },
    })
  }

  function getStatus() {
    let status = []
    pokemon.stats.forEach((stats) => {
      status.push(stats["base_stat"])
    })
    return status
  }

  function removeChart() {
    newChart.destroy()
  }

  function hiddeChart() {
    chartWrapper.classList.add("sr-only")
  }
  function showChart() {
    chartWrapper.classList.remove("sr-only")
  }

  return {
    createChart,
    removeChart,
    hiddeChart,
    showChart,
  }
}
