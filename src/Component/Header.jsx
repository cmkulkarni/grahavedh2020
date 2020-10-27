import react from 'react';
import logo from './Logo.png';
import classes from './mystyle.module.css';

const Header = props => {
    var readButton;
    
    if(props.viewButton)
        readButton = <div className={classes.Access} onClick={props.loginDialogHandler}>Read Now!</div>;
    
    return(
    <div  className={classes.header}>       
        <img className={classes.logo} src={logo} alt="Grahavedh 2020"></img>
        {readButton}
    </div>
    );
}

export default Header;