import React, { Component } from 'react'
import PropTypes from 'prop-types'



class User extends Component {

  constructor(props){
    super(props)
  }

 render() {
  return(
   <div>
     <h1>The User Page</h1>

     <p>User Name : {this.props.username}</p>
   </div>
    )
   }
 }


export default User;