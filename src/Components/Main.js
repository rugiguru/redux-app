import React, { Component } from 'react'

class  Main extends Component {
 
 render() {
  return(
   <div>
       <h1>The Main Page</h1>

       <button className='btn btn-primary' onClick={this.props.changeUsername}>Change the User name</button>
   </div>
    )
   }
 }



export default Main;