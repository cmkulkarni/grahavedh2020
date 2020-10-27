import {Component} from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import classes from './Component/mystyle.module.css';

class Grahavedh extends Component{
  constructor(props){
      super(props);

      this.state={
          isLogInDialogvisible: false,
          isPaymentDialogVisible: false
      }
  }

  handleDialogVisibility(){
    var visible = !this.state.isLogInDialogvisible;
    this.setState({
        isLogInDialogvisible: visible
    });
  }

  handlePayment(){
    var visible = !this.state.isPaymentDialogVisible;
    this.setState({
      isPaymentDialogVisible: visible
    });
    if(visible===true)
      this.handleDialogVisibility();
  }

  render(){    
    return(
      <div className={classes.page}>
        <Header viewButton={!this.state.isLogInDialogvisible} loginDialogHandler={this.handleDialogVisibility.bind(this)}/>
        <Content 
          viewDialog={this.state.isLogInDialogvisible} 
          handlePayment={this.handlePayment.bind(this)} 
          loginDialogHandler={this.handleDialogVisibility.bind(this)}
          viewPayment={this.state.isPaymentDialogVisible}/> 
        <Footer />
      </div>    
    );
  }
}

export default Grahavedh;
