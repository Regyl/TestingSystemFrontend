import React, {Component} from "react";
import {AppBar, ButtonGroup, Grid, IconButton, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle, ArrowBack} from "@material-ui/icons";
import {API} from "../../api/API";
import HistoryPaths from "../../enums/HistoryPaths";
import {withRouter} from "react-router-dom";
import GlobalVariables from "../../enums/GlobalVariables";

class CustomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget})
    };

    handleLogout = () => {
        API.logout().then(this.props.history.push(HistoryPaths.Home));
        this.handleClose();
    }

    onBackClick = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <Grid item style={{width: '100%', height: '100%'}}>
                <AppBar position={"static"} style={{backgroundColor: GlobalVariables.basicColor}}>
                    <Toolbar>
                        <Typography variant={"h6"} component={"div"}>
                            {GlobalVariables.name}
                        </Typography>
                        <ButtonGroup style={{marginLeft: 'auto'}}>
                            <IconButton
                                color={"inherit"}
                                onClick={this.onBackClick}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton
                                color={"inherit"}
                                onClick={this.handleMenu}>
                                <AccountCircle />
                            </IconButton>
                        </ButtonGroup>
                        <Menu
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleLogout}>Sign out</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Grid>
        );
    }

}

export default withRouter(CustomAppBar);