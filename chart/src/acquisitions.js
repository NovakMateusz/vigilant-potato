
import { Chart } from 'chart.js/auto'
import newData from '../../job_scrapper/output.json'

(async function() {

  let data = []

  newData.forEach(job => {
    if (data.find(x => x?.company === job?.company)) {
      let position = data.findIndex(x => x?.company === job?.company) 
      data[position].numberOfOffers++
    } else {
      data.push({company: job.company, numberOfOffers: 1})
    }
  })

  data.sort((a, b) => b.numberOfOffers - a.numberOfOffers)
  const slicedData = data.slice(0, 20)

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: slicedData.map(row => row.company),
        datasets: [
          {
            label: 'Number of Jobs',
            data: slicedData.map(row => row.numberOfOffers)
          }
        ]
      }
    }
  );

})();