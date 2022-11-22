
import { Chart } from 'chart.js/auto'
import newData from '../../job_scrapper/output.json'

(async function() {

  //console.log('my data - ', newData)


  let data = []

  newData.forEach(job => {
    if (data.find(x => x?.company === job?.company)) {
      let position = data.findIndex(x => x?.company === job?.company) 
      data[position].numberOfOffers += 1
    } else {
      data.push({company: job.company, numberOfOffers: 1})
    }
  })

  data.sort((a, b) => b.numberOfOffers - a.numberOfOffers)
  const slicedData = data.slice(0, 20)


  // const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];

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