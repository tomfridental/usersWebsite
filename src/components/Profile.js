import React from 'react';
import color_names from './color-names';
import Profile_Picture from './Profile_Picture'

export default ({id,first_name,last_name,email,country,description,avatar=""})=> {
        
        avatar = avatar.replace(/80x80/,'300x300')

		return (
                    <div className="profile-box">
                    <Profile_Picture avatar={avatar} />
                        {/* <div className="profile-image-box " >
                                <img src={avatar} />
                        </div> */}
                        <div className="profile-details-box">
                            <h2 className="profile-title">{first_name} {last_name}</h2>
                            <span className="grad-line mt20"/>
                            <h5 className="profile-detail mt20">id: {id}</h5>
                            <h5 className="profile-detail">country: {country}</h5>
                            <h5 className="profile-detail">email: {email}</h5>
                            <p className="profile-description mt20">{description}</p>
                        </div>
                    </div>
                )	
}