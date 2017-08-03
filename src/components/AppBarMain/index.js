import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom'
import './App.css'
import {connect} from 'react-redux'
import {toggleDrawer} from '../../AC/toggleDrawer'
import {setAppBarTitle} from '../../AC/setAppBarTitle'
import {menuItems} from '../../fixtures'

class AppBarMain extends Component {

    handleClose = (ev) => {
        if (ev) ev.preventDefault();
        this.props.toggleDrawer({isOpen: false});
    }

    handleLeftIcon = (ev) =>{
        if (ev) ev.preventDefault();
        this.props.toggleDrawer({isOpen: !this.props.isDrawerOpen});
    }

    onMenuItemSelect = (titleData) => {
        this.handleClose();
        return;
        //this.props.setAppBarTitle(titleData);
    }

    getMenuList = () => {

        return menuItems.map((item) => {

            let style = {};

            if (item.code === 'control'){
                style = {
                    whiteSpace:"wrap",
                    lineHeight: "23px",
                    padding: "10px 0"
                }
            }

            const titleData = {
                name: item.name,
                color: item.color
            }

            return <Link key={item.code} to={'/'+item.code}>
                <MenuItem
                    key={item.code}
                    style={style}
                    onTouchTap={()=>this.onMenuItemSelect(titleData)}>
                    {item.name}
                </MenuItem></Link>
        })
    }

    render (){
        const {isDrawerOpen, toggleDrawer, appBarTitle} = this.props;
        const name = appBarTitle.name;
        const color = appBarTitle.color;

        return (
            <div className="App">
                <AppBar
                    title={name}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleLeftIcon}
                    style={{
                        backgroundColor: color
                    }}
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={isDrawerOpen}
                    onRequestChange={(open) => toggleDrawer({isOpen: open})}
                >
                    {this.getMenuList()}
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}

export default connect((state)=>{
    const {isDrawerOpen/*, appBarTitle*/} = state;
    return {isDrawerOpen/*, appBarTitle*/}
}, {
    toggleDrawer,
    setAppBarTitle
})(AppBarMain)