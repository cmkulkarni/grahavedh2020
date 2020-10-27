import react from 'react';
import classes from './mystyle.module.css';

const PayINput = (props) => {
    return(
        <div className={classes.dialogPayment}>
            <form className={classes.form} >
                <label className={classes.label}>Upi Id.:</label>
                <input className={classes.input} type="text" name="Name"></input>
            </form>   
            <button 
                className={classes.registerButton} 
                type="button"
                onClick={props.handlePayment}>
            Proceed to payments.
            </button>         
        </div>
    );
}

export default PayINput;