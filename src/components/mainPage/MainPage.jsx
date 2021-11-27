import React, {Component} from 'react';
import {Box, Button, ButtonGroup, CardMedia, Grid, Typography} from "@material-ui/core";
import FirstImage from '../../img/mainPage/mainBack1.jpg';
import SecondImage from '../../img/mainPage/mainBack2.jpg';
import ThirdImage from '../../img/mainPage/mainBack3.jpg';
import {Link, withRouter} from "react-router-dom";
import HistoryPaths from "../../enums/HistoryPaths";
import GlobalVariables from "../../enums/GlobalVariables";

;
const circleSize = 600;

const styles = {
    backGrid : {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    secondBackGrid: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 2,
    },
    thirdBackGrid: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 3,
    },
    firstCard: {
        height: '70%',
        width: '65%',
        position: 'fixed',
        zIndex: 1,
        top: '0%',
        left: '0%',
    },
    secondCard: {
        height: '70%',
        width: '50%',
        position: 'relative',
        zIndex: 2,
        top: '14%',
        left: '20%',
    },
    thirdCard: {
        height: '40%',
        width: '25%',
        position: 'fixed',
        zIndex: 3,
        top: '0%',
        left: '75%',
    },
    secondTypography: {
        position: 'fixed',
        top: '20%',
        left: '38%',
        zIndex: 3,
        color: '#55430C',
        fontFamily: 'Cardo',
    },
    thirdTypography: {
        position: 'fixed',
        top: '40%',
        left: '75%',
        zIndex: 3,
        color: '#654321',
        fontFamily: 'Versailles',
    },
    gridButtonGroup: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 10,
        top: '30%',
        left: '40%',
    },
    buttonsStyle: {
        position: 'relative',
        color: '#55430C',
        width: '10%',
        height: '10%',
    },
    circle: {
        position: 'fixed',
        bgcolor: '#C8BDAC',
        width: circleSize,
        height: circleSize,
        borderRadius: '100%',
        zIndex: 2,
        top: '60%',
        left: '75%',
    },
    firstBox: {
        position: 'fixed',
        top: '83%',
        left: '25%',
        width: '100%',
        height: '0.3%',
        zIndex: 3,
        bgcolor: 'black'
    },
    secondBox: {
        position: 'fixed',
        top: '87%',
        left: '65%',
        width: '100%',
        height: '0.3%',
        zIndex: 3,
        bgcolor: 'black'
    },
};


const text = "WELCOME TO THE TESTING SYSTEM - OPEN SOURCE PROJECT WITH ONLY ONE GOAL - EDUCATION";


class MainPage extends Component {


    render() {
        return (
            <Grid container style={{width: '100%', height: '100%'}}>
                <Grid item style={styles.backGrid}>
                    <CardMedia image={FirstImage} style={styles.firstCard}/>
                </Grid>
                <Grid item style={styles.secondBackGrid}>
                    <CardMedia image={SecondImage} style={styles.secondCard}/>
                    <Typography variant={"h2"} style={styles.secondTypography}>
                        {GlobalVariables.name}
                    </Typography>
                </Grid>
                <Grid item style={styles.gridButtonGroup}>
                    <ButtonGroup variant={'text'} style={{width: '100%', height: '100%'}}>
                        <Button component={Link} to={HistoryPaths.Auth} style={styles.buttonsStyle}>
                            <Typography variant={'h4'} style={{fontFamily: 'Versailles'}}>
                                SIGN IN
                            </Typography>
                        </Button>
                        <Button component={Link} to={HistoryPaths.Registration} style={styles.buttonsStyle}>
                            <Typography variant={'h4'} style={{fontFamily: 'Versailles'}}>
                                SIGN UP
                            </Typography>
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item style={styles.thirdBackGrid}>
                    <CardMedia image={ThirdImage} style={styles.thirdCard}/>
                    <Typography variant={"h4"} style={styles.thirdTypography}>
                        {text}
                    </Typography>
                </Grid>
                <Box component="span"  sx={styles.circle} />
                <Box component={"span"} sx={styles.firstBox} />
                <Box component={"span"} sx={styles.secondBox} />
            </Grid>
        )
    };
}


export default withRouter(MainPage);