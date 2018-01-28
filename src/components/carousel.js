import React, { Component } from 'react'
import * as _ from 'lodash'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

export class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { currentIndex: 0, visibleIndexes: [] }
    }
    
    static defaultProps = {
        images: [],
        onCurrentIndexChange: null,
        scrollOnVertScroll: true
    }
    
    onChange(isVisible, index) {
        if (!this.props.onCurrentIndexChange) return
        this.setState(prevState => {
            const visibleIndexes = isVisible ?
                _.union(prevState.visibleIndexes, [index]).sort() :
                _.filter(prevState.visibleIndexes, (i) => i !== index).sort()
                
            const currentIndex = _.size(visibleIndexes) ? visibleIndexes[0] : prevState.currentIndex
            this.props.onCurrentIndexChange(currentIndex)
            
            return { currentIndex, visibleIndexes }
        })
    }
    
    onMouseWheel(e) {
        if (this.props.scrollOnVertScroll) {
            this.scrollDiv.scrollLeft += (e.deltaY)
        }
    }
    
    render() {
        const { images, onImageClick } = this.props
        return <div className="carousel-component-container">
            <div className="scrollbar-mask"
                onWheel={(e) => this.onMouseWheel(e)}
                ref={(div) => this.scrollDiv = div}>
                {images.map((image, i) => (
                    <VisibilitySensor key={i}
                        onChange={(isVisible) => this.onChange(isVisible, i)}
                        offset={{ left: -100 }}
                        partialVisibility="left">
                        <img alt=""
                            onClick={() => onImageClick(i)}
                            src={image.url}>
                        </img>
                    </VisibilitySensor>
                ))}
            </div>
        </div>
    }
}

Carousel.propTypes = {
    images: PropTypes.array,
    onCurrentIndexChange: PropTypes.func,
    onImageClick: PropTypes.func,
    scrollOnVertScroll: PropTypes.bool,
}