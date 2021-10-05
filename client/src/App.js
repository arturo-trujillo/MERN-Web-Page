import React, {useState,useEffect} from "react";
import {Container, AppBar, Typography, Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import bks from './images/bks.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles.js';


const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth = "lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography variant = "h3"  align = "center">
                    Notes
                    <img  className = {classes.image} src={bks} alt="back" height="40" />
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent= "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>        

                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;