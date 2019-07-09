import React,{Component} from 'react';

class Reset extends Component{
  
  onResetdefault=()=>{
    this.props.onSettingDefault(true)
  }
  render(){
    return(
        <button type="button" className="btn btn-success" onClick={this.onResetdefault}>Reset</button>
    )
  }
}

export default Reset;
