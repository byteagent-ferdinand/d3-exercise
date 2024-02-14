// App.tsx

import React from 'react';
import SmileyFaceContainer from "./lections/smiley-face/smiley-face-container";
import ColorsContainer from "./lections/colors/colors-container";
import MouseFollowerContainer from "./lections/mouse-follower/mouse-follower-container";
import WorldPopulationContainer from "./lections/world-population/world-population-container";
import FlowerPetalsContainer from "./lections/flower-petals/flower-petals-container";
import TemperatureContainer from "./lections/temperature/temperature-container";


const App: React.FC = () => {

    return (
        <div>

{/*

            <SmileyFaceContainer></SmileyFaceContainer>


*/}

{/*
            <ColorsContainer></ColorsContainer>
*/}



          {/*  <MouseFollowerContainer></MouseFollowerContainer>
*/}

{/*
            <WorldPopulationContainer></WorldPopulationContainer>
*/}

            <FlowerPetalsContainer></FlowerPetalsContainer>

            <TemperatureContainer></TemperatureContainer>
        </div>
    );
};

export default App;
