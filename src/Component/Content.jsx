import react from 'react';
import {Component} from 'react';
import classes from './mystyle.module.css';
import PDFViewer from './PDFViewer';
import Overview from './Overview.jsx';
import UserInput from './UserInput.jsx';
import PayInput from './PayInput.jsx';
import Backdrop from './Backdrop.jsx';

class Content extends Component{
    //<PDFViewer />
                    //<UserInput />    
    render(){
        var loginDialog;
        var paymentDialog;
        
        if(this.props.viewDialog){
            loginDialog=<>
                <UserInput 
                    handlePayment={this.props.handlePayment}
                />
                <Backdrop 
                    loginDialogHandler={this.props.loginDialogHandler}
                />
            </>;
        }

        if(this.props.viewPayment){
            paymentDialog=<>
                <PayInput 
                    handlePayment={this.props.handlePayment}
                />
                <Backdrop 
                    handlePayment={this.props.handlePayment} 
                    loginDialogHandler={this.props.loginDialogHandler}
                />
            </>;            
        }

        return (
            <div className={classes.inLine}>
                {loginDialog}
                {paymentDialog}
                <Overview />
                <PDFViewer />
            </div>
        );
    }
}

export default Content;