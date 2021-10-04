import React , {useState} from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";


const Form = () => {
    
    const [postData, setPostData] = useState({
        title : '', message: '',
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit = {handleSubmit}>
                <Typography variant='h6'> Add to Diary</Typography>
                <TextField 
                name="title" 
                variant='outlined' 
                label='Title'
                defaultValue={postData.title}
                onChange={(e) => setPostData({...postData,title:e.target.value})}
                fullWidth />
                <TextField 
                name="message" 
                variant='outlined' 
                label='Message'
                defaultValue={postData.message}
                onChange={(e) => setPostData({...postData,message:e.target.value})}
                fullWidth />
               <Button className = {classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
               <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
