import React from 'react'
import PropTypes from 'prop-types'
const NukaCarousel = require('nuka-carousel')

export const Carousel = ({ onChange = () => {}, images }) => (
    <div className="carousel-component-container">
        <NukaCarousel afterSlide={(index) => onChange(index)}>
            {images.map((image, i) => (
                <div className="image-container" key={i}>
                    <img alt="" src={image.url} />
                </div>
            ))}
        </NukaCarousel>
    </div>
)

Carousel.propTypes = {
    images: PropTypes.array,
    onChange: PropTypes.func,
}