import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useNavigate } from "react-router";

import S1 from "../../assets/abarna/slider/slide1.jpg";
import S2 from "../../assets/abarna/slider/slide2.jpg";
import S3 from "../../assets/abarna/slider/slide3.jpg";
import S4 from "../../assets/abarna/slider/slide4.jpg";


const PageSlider = () => {
    const push = useNavigate();

    const data = [
        {
            image: S1,
            caption: "Recommending Solutions for Psychological Issues"
        },
        {
            image: S2,
            caption: "Recommending Solutions for Psychological Issues"
        },
        {
            image: S3,
            caption: "Recommending Solutions for Psychological Issues"
        },
        {
            image: S4,
            caption: "Recommending Solutions for Psychological Issues"
        },

    ];

    const captionStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        
        // color: 'black',
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
                width="1800px"
                height="500px"
                captionStyle={captionStyle}
                // radius="10px"
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                style={{
                    textAlign: "center",
                    maxWidth: "1800px",
                    maxHeight: "400px",
                    margin: "20px auto",
                }}
            />
        </div>
    );
}

export default PageSlider;