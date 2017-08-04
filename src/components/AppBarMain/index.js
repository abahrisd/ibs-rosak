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
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import topLogo from './rosakr_top.png'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

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

            let style = {
                textAlign: "left"
            };

            if (item.code === 'control'){
                style = {...style, ...{
                    whiteSpace:"wrap",
                        lineHeight: "23px",
                        padding: "10px 0"
                }}
            }

            const titleData = {
                name: item.name,
                color: item.color
            }

            let leftIconComponent;
            switch(item.icon){
                case "ContentInbox":
                    leftIconComponent = <ContentInbox/>
                    break;
                case "ActionGrade":
                    leftIconComponent = <ActionGrade/>
                    break;
                case "ContentSend":
                    leftIconComponent = <ContentSend/>
                    break;
                case "ContentDrafts":
                    leftIconComponent = <ContentDrafts/>
                    break;
            }

            return <Link key={item.code} to={'/'+item.code}>
                <MenuItem
                    key={item.code}
                    style={style}
                    leftIcon={leftIconComponent?leftIconComponent:''}
                    onTouchTap={()=>this.onMenuItemSelect(titleData)}
                >
                    {item.name}
                </MenuItem></Link>
        })
    }

    render (){
        const {isDrawerOpen, toggleDrawer, appBarTitle} = this.props;
        const name = appBarTitle.name;
        const color = appBarTitle.color;
        const style = {
            iconElementLeft: {
                display: "table",
                cursor: "pointer"
            },
            iconElementLeftButton: {
                margin: "10px 0 0 0",
                display: "table-cell",
                verticalAlign: "top"
            }
        };

        return (
            <div className="App">
                <AppBar
                    title={name}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleLeftIcon}
                    iconElementLeft={<div style={style.iconElementLeft}><IconButton style={style.iconElementLeftButton}> <NavigationMenu /> </IconButton> <img height={60} src={topLogo} alt="росаккредитация" /></div>}
                    style={{
                        backgroundColor: color,
                        position: "fixed"
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
                <div className="root">
                    {this.props.children}
                </div>
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