
import React from "react";
import propTypes from "prop-types"

const Profile=({FullName,bio,proffesion,children,Affichage})=>
{
    return (<div><h1>{FullName}</h1>
                 <br/>
                 <h1>{bio}</h1>
                 <br/>
                 <h1>{proffesion}</h1>
                 {children}
                <button onClick={Affichage}>click me</button>
                </div>)}

Profile.defaultProps={
    FullName:"med",
    bio:"yyy",
    Proffesion:"zzz"
}

Profile.propTypes={
    FullName:propTypes.string,
    bio:propTypes.string

}

export default Profile;