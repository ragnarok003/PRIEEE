import React from 'react'

const CropImage = (crop) => {
  return (
    <div>
   <img src={`src/assets/images/${crop.crop}.jpeg`} alt={crop.crop}/>
    </div>
  )
}

export default CropImage