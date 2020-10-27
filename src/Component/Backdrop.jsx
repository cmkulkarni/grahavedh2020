import react from 'react';
import classes from './mystyle.module.css';

const Backdrop = props => {
    return(
        <div className={classes.backdrop} onClick={props.loginDialogHandler}>
        </div>
    );
}

export default Backdrop;