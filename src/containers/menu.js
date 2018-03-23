import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import classNames from 'classnames/bind'

import { toggleMenu } from '../actions'
import { Header } from '../components'

const RoundLink = ({ children, url }) => (
    <button className="round-link-container">
        <a href={url} className="flex-row justify-content-center align-items-center">{children}</a>
    </button>
)

const SocialLinks = () => (
    <div className="social-links-container">
        <RoundLink url="https://www.facebook.com/norah.tahiri">
            <i className="fa fa-facebook" aria-hidden="true"></i>
        </RoundLink>
        <RoundLink url="https://www.instagram.com/ntahiri/">
            <i className="fa fa-instagram" aria-hidden="true"></i>
        </RoundLink>
        <RoundLink url="https://www.behance.net/norahtahiri">
            <i className="fa fa-behance" aria-hidden="true"></i>
        </RoundLink>
    </div>
)

export class Menu extends Component {
    componentDidMount() {
        this.props.history.listen(() => {
            this.props.toggleMenu(false)
        })
    }
    
    render() {
        return <div className="menu-component-container">
            {!this.props.isOpen && (
                <i className="fa fa-bars tablet-menu flex-row justify-content-center align-items-center hidden-mobile hidden-desktop" aria-hidden="true"
                    onClick={() => this.props.toggleMenu()}>
                </i>
            )}
            <div className={classNames('menu-toggle-container', { 'hidden': !this.props.isOpen })}>
                <div className="header-container hidden-mobile hidden-desktop">
                    <Header />
                </div>
                <i className={`fa ${this.props.isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"
                    onClick={() => this.props.toggleMenu()}>
                </i>
            </div>
            <div className={`content-container flex-col justify-content-space-between ${this.props.isOpen ? '' : 'closed'}`}>
                <div className="description-container">
                    <p className="description">
                        Norah Tahiri is a multi-disciplinary designer that blah blah blah blah blah blah blah blah blah blah blah
                    </p>
                    <div className="contact-info-container hidden-mobile">
                        <div>
                            <h3 className="medium">Email</h3>
                            <span>ntahiri@gmail.com</span>
                        </div>
                        <div>
                            <h3 className="medium">Location</h3>
                            <span>Brooklyn, NY</span>
                        </div>
                        <div>
                            <h3 className="medium">Follow Me</h3>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                <div className="nav-container">
                    <Link to="/design"><h3>design</h3></Link>
                    <Link to="/photography"><h3>photography</h3></Link>
                    <Link to="/about"><h3>about</h3></Link>
                </div>
                <div className="credit-container">
                    <div className="hidden-tablet hidden-desktop">
                        <SocialLinks />
                    </div>
                    <div>
                        <div className="hidden-mobile hidden-tablet">© Norah Tahiri 2017. All Rights Reserved.</div>
                        <div className="hidden-desktop">© Norah Tahiri 2018.</div>
                        <div className="hidden-desktop">All Rights Reserved.</div>
                        <div>Developed by <a href="https://github.com/lmartins91">Luis Martins</a></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.menu.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    toggleMenu: (isVisible) => dispatch(toggleMenu(isVisible))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))