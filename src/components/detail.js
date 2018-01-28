import React, { Component } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const DetailToggle = ({ onClick, titleJSX = null }) => (
    <div className="detail-toggle-container flex-row justify-content-center align-items-center">
        <div className="hidden-desktop">
            {titleJSX}
        </div>
        <i onClick={onClick} className={classNames('fa fa-plus', { 'push-right': !!titleJSX })} aria-hidden="true"></i>
    </div>
)

export class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = { showDetail: props.showDetail }
    }
    
    static defaultProps = {
        onToggle: () => {},
        orientation: 'vertical',
        showDetail: true,
        showToggle: false,
        titleJSX: null
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.showDetail !== nextProps.showDetail) {
            this.setState({ showDetail: nextProps.showDetail })
        }
    }
    
    toggle(isVisible) {
        this.setState(({ showDetail }) => {
            showDetail = (isVisible !== undefined) ? isVisible : !showDetail
            this.props.onToggle(showDetail)
            return { showDetail }
        })
    }
    
    render() {
        return <div className={`detail-component-container flex-col ${this.props.orientation !== 'horizontal' ? 'vertical' : 'horizontal'}`}>
            {(this.props.showToggle && !this.state.showDetail) && (
                <DetailToggle onClick={() => this.toggle()} titleJSX={this.props.titleJSX}/>
            )}
            <div className={`content-container ${this.state.showDetail ? '' : 'hidden'}`}>
                {this.props.children}
                {this.props.showToggle && (
                    <div className="close-button-container flex-row justify-content-center align-items-center">
                        <i onClick={() => this.toggle(false)} className="fa fa-times" aria-hidden="true"></i>
                    </div>
                )}
            </div>
        </div>
    }
}

Detail.propTypes = {
    onToggle: PropTypes.func,
    orientation: PropTypes.string,
    showDetail: PropTypes.bool,
    showToggle: PropTypes.bool,
    titleJSX: PropTypes.object,
}