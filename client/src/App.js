import React from "react";
import {Container, AppBar, Typography, Grow,Grid} from '@material-ui/core';
import bks from './images/bks.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles.js';

const App = () =>{
    const classes = useStyles();
    return (
        <Container maxWidth = "lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography variant = "h2" align = "center">
                    Diario
                    <img  className = {classes.image} src={bks} alt="back" height="60"/>
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>        

                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;