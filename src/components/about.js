import React from 'react'

import { Detail, Footer, Header } from './index'

export const About = () => (
    <div className="about-component-container">
        <Header title="About"/>
        <div className="img-container">
            <img alt="" src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/21055934_10110279783777780_1254177382171133017_o.jpg?oh=8476dad30578e95e4c7ced5392d952f3&oe=5AD06577"></img>
        </div>
        {/* Tablet & Desktop */}
        <div className="hidden-mobile">
            <Detail showDetail={false} showToggle={true}>
                <div className="flex-row justify-content-center align-items-center">
                    <p>Brief, witty description goes here so people know I’m cool and creative. Dont laugh at me Luis. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
            </Detail>
        </div>
        {/* Mobile */}
        <div className="hidden-tablet hidden-desktop">
            <Detail showDetail={false} showToggle={true} titleJSX={<Footer />}>
                <div className="flex-row justify-content-center align-items-center">
                    <p>Brief, witty description goes here so people know I’m cool and creative. Dont laugh at me Luis. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
            </Detail>
        </div>
        <Footer />
    </div>
)