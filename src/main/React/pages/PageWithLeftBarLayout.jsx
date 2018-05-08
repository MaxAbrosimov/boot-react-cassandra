import React from 'react'

import Drawer from 'components/Drawer'
import Footer from 'components/Footer'


export class PageWithLeftBarLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="wrapper">
            <Drawer/>
            <div className="main-panel">
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        </div>
    }
}

