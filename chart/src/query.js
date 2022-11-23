import newData from '../../job_scrapper/output.json'

export const getJobsByCompany = () => {
  try {
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
    const slicedData = data.slice(0, 10)
  
    return slicedData
  } catch (error) {
    console.error('Error - ', error)
  }
}

export const getJobsFromByCity = () => {}