import React from 'react';
import MouseFollower from "./components/mouse-follower";
const MouseFollowerContainer: React.FC = () => {
    const fetchText = async (url: string) => {
        const response = await fetch(url);
        return await response.text();
    }

    const csvUrl  = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';

    fetchText(csvUrl).then(text => {
        console.log(text)
    });

    return (
        <div>
            <MouseFollower></MouseFollower>
        </div>
    );
};

export default MouseFollowerContainer;
