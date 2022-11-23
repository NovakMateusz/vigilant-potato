
import { Chart } from 'chart.js/auto'
import { getJobsByCompany } from './query.js'

(async function() {

  // First Query for Number of Jobs posted by each company
  const numberOfJobs = getJobsByCompany()
  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: numberOfJobs.map(row => row.company),
        datasets: [
          {
            label: 'Number of Jobs',
            data: numberOfJobs.map(row => row.numberOfOffers)
          }
        ]
      }
    }
  );

  // Second Query
  new Chart(
    document.getElementById('acquisitions2'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: numberOfJobs.map(row => row.company),
        datasets: [
          {
            label: 'Number of Jobs',
            data: numberOfJobs.map(row => row.numberOfOffers)
          }
        ]
      }
    }
  );

})();
