
import { Chart } from 'chart.js/auto'
import { getJobsByCompany, getJobsFromByCity, languageNumber } from './query.js'

(async function() {

  // First Query for Number of Jobs posted by each company
  const numberOfJobsFromCompany = getJobsByCompany()
  new Chart(
    document.getElementById('acquisitions1'),
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
        labels: numberOfJobsFromCompany.map(row => row.company),
        datasets: [
          {
            label: 'Number of Jobs by Companies',
            data: numberOfJobsFromCompany.map(row => row.numberOfOffers)
          }
        ]
      }
    }
  );

  const numberOfJobsFromCity = getJobsFromByCity()
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
        labels: numberOfJobsFromCity.map(row => row.location),
        datasets: [
          {
            label: 'Number of Job by Cities',
            data: numberOfJobsFromCity.map(row => row.numberOfOffers),
            borderColor: '#FE3212',
            borderWidth: 3
          }
        ]
      }
    }
  );

  const numberOfLanguages = languageNumber()
  // Third Query
  new Chart(
    document.getElementById('acquisitions3'),
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
        labels: numberOfLanguages.map(row => row.language),
        datasets: [
          {
            label: 'Most seeked technology',
            data: numberOfLanguages.map(row => row.number),
            hoverOffset: 4
          }
        ]
      }
    }
  );

})();
