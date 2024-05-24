import React, { useState } from 'react' 
import { Typography, Rating } from '@mui/material';

const RatingComponent = () => {
    const  [value, setValue] = useState("")
  return (
    <>
    <div className='container'>
    <div className='row'>
        <div className='col-4'>
         <div>
            <h6>Customer Reviews</h6>
         </div>
         <div>
         <Rating name="half-rating" defaultValue={3} precision={0.5} />
          <span className='fs-5 '> 4.6 out of 5</span>
         </div>
        </div>
        <div className='col-8'>
            <div>
            <h6>Reviws </h6>
            </div>
            <div>
            {/* <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={5}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/> */}
{/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}

            </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default RatingComponent