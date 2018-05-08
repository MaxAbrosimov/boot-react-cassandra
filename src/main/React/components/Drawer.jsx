import React from 'react'
import { Link } from 'react-router'
import { AppBar, Drawer as DrawerMUI, MenuItem } from 'material-ui';
import onClickOutside from "react-onclickoutside";


class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    };


    handleClickOutside(event) {
        this.state.open && this.handleToggle();
    }

    appBar() {
        return (
            <AppBar
                onLeftIconButtonClick={() => this.handleToggle()}
                onTitleClick={() => this.handleToggle()}
                titleStyle={{cursor: 'pointer'}}
            />
        );
    };

    render() {
        return (
            <div>
                {this.appBar()}
                <DrawerMUI open={this.state.open}>
                    {this.appBar()}
                    <MenuItem onClick={() => this.handleToggle()} containerElement={<Link to="/products" />} primaryText="Products" />
                    <MenuItem onClick={() => this.handleToggle()} containerElement={<Link to="/products/new" />} primaryText="Add Product" />
                </DrawerMUI>
            </div>


        );
    }
}

export default onClickOutside(Drawer);