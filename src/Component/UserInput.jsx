import react from 'react';
import classes from './mystyle.module.css';

const UserINput = (props) => {
    return(
        <div className={classes.dialog}>
            <form className={classes.form} >
                <label className={classes.label}>Email Id.:</label>
                <input className={classes.input} type="text" name="Name"></input>

                <label className={classes.label}>Password:</label>
                <input className={classes.input} type="text" name="Password"></input>   
            </form>   
            <button 
                className={classes.registerButton} 
                type="button" 
                onClick={props.handlePayment}>
            Buy Now!</button>         
            <button className={classes.button} type="button">Login</button>         
        </div>
    );
}

export default UserINput;