import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useNavigate } from "react-router";

import S1 from "../../assets/abarna/slider/s1.png";
import S2 from "../../assets/abarna/slider/s2.png";
import S3 from "../../assets/abarna/slider/s3.jpg";
import S4 from "../../assets/abarna/slider/s4.png";
import S6 from "../../assets/abarna/slider/s6.jpg";

const PageSlider = () => {
    const push = useNavigate();

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
        {
            image: S6,
            caption: ""
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className="App">
            <Carousel
                data={data}
                time={3000}
                width="1100px"
                height="400px"
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
                    margin: "20px auto",
                }}
            />
        </div>
    );
}

export default PageSlider;