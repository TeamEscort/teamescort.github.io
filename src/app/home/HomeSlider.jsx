import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import S1 from "../../assets/administrationSlider.jpg";
import S2 from "../../assets/psychologicalSlider.png";
import S3 from "../../assets/recomendationSlider.jpg";
import S4 from "../../assets/careerSlider.png";

const HomeSlider = () => {

    const data = [
        {
            image: S1,
            caption: ""
        },
        {
            image: S2,
            caption: ""
        },
        {
            image: S3,
            caption: ""
        },
        {
            image: S4,
            caption: ""
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }

    return (
        <div className="App">
            <Carousel
                data={data}
                time={3000}
                width="1100px"
                height="415px"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                style={{
                    textAlign: "center",
                    maxWidth: "1100px",
                    maxHeight: "500px",
                }}
            />
        </div>
    );
}

export default HomeSlider;