import React from 'react'
import PropTypes from 'prop-types'

import { ScrollCarousel, SnapCarousel } from '../'

export const Carousel = ({ images, onChange, onImageClick, scrollOnVertScroll = true }) => [
    <div className="carousel-component-container hidden-desktop" key="scroll">
        <SnapCarousel images={images} onChange={onChange} />
    </div>,
    <div className="carousel-component-container hidden-mobile hidden-tablet" key="snap">
        <ScrollCarousel images={images} onChange={onChange} onImageClick={onImageClick} scrollOnVertScroll={scrollOnVertScroll} />
    </div>
]

Carousel.propTypes = {
    images: PropTypes.array,
    onChange: PropTypes.func,
    onImageClick: PropTypes.func,
    scrollOnVertScroll: PropTypes.bool,
}