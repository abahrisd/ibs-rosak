import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux'
import {toggleDrawer} from '../../AC/toggleDrawer'
import {setAppBarTitle} from '../../AC/setAppBarTitle'

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
        this.props.setAppBarTitle(titleData);
    }

    getMenuList = () => {


        const menuItems = [
            {code: 'main', name: 'Главная', color: '#5E35B1'},
            {code: 'egrul', name: 'ЕГРЮЛ', color: '#e53935'},
            {code: 'control', name: 'Контроль за деятельностью аккредитованных лиц', color: '#1E88E5'},
            {code: 'checks', name: 'Проверки', color: '#43A047'},
            {code: 'histroy', name: 'История изменений', color: '#F4511E'},
        ];

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

            return <MenuItem key={item.code} style={style}
                             onTouchTap={()=>this.onMenuItemSelect(titleData)}>{item.name}</MenuItem>
        })

    }

    render (){

        const {isDrawerOpen} = this.props;
        const toggleDrawer = this.props.toggleDrawer;
        const appBarTitle = this.props.appBarTitle.name;
        const appBarColor = this.props.appBarTitle.color;

        return (
            <div>
                <AppBar
                    title={appBarTitle}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleLeftIcon}
                    style={{
                        backgroundColor: appBarColor
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
            </div>
        )
    }
}


export default connect((state)=>{
    const {isDrawerOpen, appBarTitle} = state;
    return {isDrawerOpen, appBarTitle}
}, {
    toggleDrawer,
    setAppBarTitle
})(AppBarMain)