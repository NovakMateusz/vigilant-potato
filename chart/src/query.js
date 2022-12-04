import newData from '../../job_scrapper/output.pandas'

// First Chart
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
    const slicedData = data.slice(0, 15)
  
    return slicedData
  } catch (error) {
    console.error('Error - ', error)
  }
}

// Second Chart
export const getJobsFromByCity = () => {
  try {
    let data = []
  
    newData.forEach(job => {
      if (data.find(x => x?.location === job?.location)) {
        let position = data.findIndex(x => x?.location === job?.location) 
        data[position].numberOfOffers++
      } else {
        data.push({location: job.location, numberOfOffers: 1})
      }
    })
  
    data.sort((a, b) => b.numberOfOffers - a.numberOfOffers)
    const slicedData = data.slice(0, 15)
    // console.log('slicedData - ', slicedData)
  
    return slicedData
  } catch (error) {
    console.error('Error - ', error)
  }
}

// Third Chart
export const languageNumber = () => {
  try {
    let data = []
  
    newData.forEach(job => {
      job.tags.forEach(language => {
        if (data.find(x => x.language === language)) {
          let position = data.findIndex(x => x?.language === language) 
          data[position].number += 1
        } else {
          data.push({language: language, number: 1})
        }

      })
    })
  
    data.sort((a, b) => b.number - a.number)
    const slicedData = data.slice(0, 15)
    // console.log('slicedData - ', slicedData)
  
    return slicedData
  } catch (error) {
    console.error('Error - ', error)
  }
}