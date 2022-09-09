import React from 'react'
import Pic from './images/Pic.jpeg'


const ProfilePhoto = () => {
  return (
    <div className="card" style={{marginTop:"8rem", width: "24rem" , borderRadius: "50%"}}>
          <img src={Pic} className="card-img" alt="pic" style={{width: "24rem" , height: "24rem" , borderRadius: "50%" }} />
    </div>
//

  )
}

export default ProfilePhoto
