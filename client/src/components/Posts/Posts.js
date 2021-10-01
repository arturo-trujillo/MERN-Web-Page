import React from "react";

import Post from "./Post/Post";
import useStyles from './styles.js';
const Posts = () => {
    const classes = useStyles();
    return(
       <>
            <h1> Pipi Pupu pipi</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;
