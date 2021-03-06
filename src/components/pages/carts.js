"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {Panel,Well, Col, Row, Button} from 'react-bootstrap';




const header ={
    height:"52px",
    background: "blue",
    fontSize:"2rem",
    color: "#fff",
    padding: "1rem 0 0 3rem",
    borderRadius:"7px"
}


const panelPrimary ={
    borderColor: "none"
}


class Cart extends React.Component{
	render(){
		if(this.props.cart[0]){
			return this.renderCart();
		}else{
			return this.renderEmpty();
		}

   }
   renderEmpty(){
   	return (
   		<div>
   		  Empty Cart
   		</div>
   		)
   }

   renderCart(){
   	const cartItemList = this.props.cart.map(function(cartArr){
   		return(
   	
         <Panel key= {cartArr.id}  >
         	<Row>
	         	<Col xs={12} sm={4}>
 					<h6>{cartArr.title}</h6>
 					<p>{cartArr.description}</p>
 					<h6>{cartArr.price}</h6>
	         	</Col>	
         	</Row>
         </Panel>
   

   		)
   	})
   	return(
      <Panel header='Cart'  style={panelPrimary}>
      <div style={header}>Cart</div>
      	{cartItemList}
      </Panel>
   	)
   }
}





function mapStateToProps(state){
	return{
      cart:state.carts.carts
	}
}



export default connect(mapStateToProps)(Cart);