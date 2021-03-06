"use strict";


import React from 'react';
import {Row,Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';
import Cart from './carts';

//import {connect} from 'react-redux';


let pad ={
	
   padding: '3rem'
}




class BookItem extends React.Component{
	handleCart(){
		const book=[this.props.cart, {
			id:this.props.id,
			title:this.props.title,
			description:this.props.description,
			price:this.props.price
		}]
		this.props.addToCart(book)
	}
	render(){
		return(
          		<Well style={pad}>
          			<Row>
          				<Col xs={12}></Col>
          				<h6>{this.props.id}</h6>
          				<h6>{this.props.title}</h6>
          				<p>{this.props.description}</p>
          				<h6>usd: {this.props.price}</h6>
          				<Button onClick={this.handleCart.bind(this)} bsStyle="primary">Buy This Now!</Button>
          			</Row>
          		</Well>


			)
	}
}

function mapStateToProps(state){
	return{
      cart:state.carts.carts
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addToCart:addToCart},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem);




