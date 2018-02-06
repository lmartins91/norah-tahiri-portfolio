import React, { Component } from 'react'
import * as _ from 'lodash'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

export class ScrollCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = { currentIndex: 0, visibleIndexes: [] }
    }
    
    static defaultProps = {
        images: [],
        onChange: null,
        scrollOnVertScroll: true
    }
    
    onChange(isVisible, index) {
        if (!this.props.onChange) return
        this.setState(prevState => {
            const visibleIndexes = isVisible ?
                _.union(prevState.visibleIndexes, [index]).sort() :
                _.filter(prevState.visibleIndexes, (i) => i !== index).sort()
                
            const currentIndex = _.size(visibleIndexes) ? visibleIndexes[0] : prevState.currentIndex
            this.props.onChange(currentIndex)
            
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
        return <div className="scroll-carousel-component-container">
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

ScrollCarousel.propTypes = {
    images: PropTypes.array,
    onChange: PropTypes.func,
    onImageClick: PropTypes.func,
    scrollOnVertScroll: PropTypes.bool,
}