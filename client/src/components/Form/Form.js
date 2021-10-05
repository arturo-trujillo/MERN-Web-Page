import React , {useState, useEffect} from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";



const Form = ({currentId, setCurrentId}) => {
    
    const [postData, setPostData] = useState({title : '', message: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
        }else{
            dispatch(createPost(postData));
        }
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
                <Typography variant='h6'> {currentId ? 'Edit' : 'Add'} note</Typography>
                <TextField 
                name="title" 
                variant='outlined' 
                label='Title'
                value={postData.title}
                onChange={(e) => setPostData({...postData,title:e.target.value})}
                fullWidth />
                <TextField 
                name="message" 
                variant='outlined' 
                label='Message'
                value={postData.message}
                onChange={(e) => setPostData({...postData,message:e.target.value})}
                fullWidth />
               <Button className = {classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
               <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
