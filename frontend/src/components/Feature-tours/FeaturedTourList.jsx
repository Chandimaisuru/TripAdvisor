
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'

import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

function FeaturedTourList() {

  const {data:FeaturedTours, loading,error} = useFetch (BASE_URL+'/tour/search/getFeaturedTour');

  console.log(FeaturedTours);
  
  return (
    <>

     {
      loading && <h4>Loading......</h4>
     }

     {
      error && <h4>{error}</h4>
     }

     {
        !loading && !error && FeaturedTours ?.map (tour =>(
            <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id} >
                <TourCard tour={tour}/>
            </Col>
        ))

        
     }
    
    
    
    </>
  )
}

export default FeaturedTourList