import React from 'react'
import PropTypes from 'prop-types'
const NukaCarousel = require('nuka-carousel')

export const SnapCarousel = ({ onChange = () => {}, images }) => (
    <div className="snap-carousel-component-container">
        <NukaCarousel afterSlide={(index) => onChange(index)}>
            {images.map((image, i) => (
                <div className="image-container" key={i}>
                    <img alt="" src={image.url} />
                </div>
            ))}
        </NukaCarousel>
    </div>
)

SnapCarousel.propTypes = {
    images: PropTypes.array,
    onChange: PropTypes.func,
}