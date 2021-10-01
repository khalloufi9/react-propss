import './App.css';
import Profile from './Profile/Profile';
import React from 'react';
import Image from './image.jpg'


function App() {
  let Name="oumaima";
  const Affichage=()=>{return (alert(Name))};
  const StyleObject={color: "red", textAlign: 'center'};
  return (

    <div style={StyleObject}>
      <Profile FullName={Name} bio="xxxxxxxxx" proffesion="Technicienne superieur en informatique" Affichage={Affichage} >
        <h2><img src={Image} alt="not-found"></img></h2>
      </Profile>
    </div>
  );
}

export default App;
