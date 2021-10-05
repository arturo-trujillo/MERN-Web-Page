import React from "react";
import useStyles from './styles.js';
import { CardActions, Card, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia  className={classes.media}  image={post.selectedFile || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'} title={post.title}/>
            <div className={classes.overlay}>
            <Typography variant="h6">{post.title}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:"white"}} size='small' onClick={()=>setCurrentId(post._id)} >
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <CardContent>
                <Typography variant='body2' color='textSecondary'> {post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;
