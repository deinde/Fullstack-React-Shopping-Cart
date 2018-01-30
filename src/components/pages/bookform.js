"use strict";


import React from 'react';
import { Well, Panel,FormGroup,FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';



let pad ={
	
   padding: '2rem'
}



class BookForm extends React.Component{
	handleSubmit(){
		const book=[{
         title:findDOMNode(this.refs.title).value,
         description:findDOMNode(this.refs.description).value,
         price:findDOMNode(this.refs.price).value,
		}]
		this.props.postBooks(book)
	}
	render(){
		return(
             	<Well style={pad}>
             		<Panel style={pad}>
             		 	<FormGroup controlId="title">
             		 		<ControlLabel>Title</ControlLabel>
             		 		<FormControl
    							type="text"
    							placeholder='Enter Title'
    							ref='title'
             		 		/>
             		 	</FormGroup>
             		 	<FormGroup controlId="description">
             		 		<ControlLabel>description</ControlLabel>
             		 		<FormControl
    							type="text"
    							placeholder='Enter description '
    							ref='description'
             		 		/>
             		 	</FormGroup>
             		 	<FormGroup controlId="price">
             		 		<ControlLabel>Price</ControlLabel>
             		 		<FormControl
    							type="text"
    							placeholder='Enter price'
    							ref='price'
             		 		/>
             		 	</FormGroup>
             		 	<Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save Book</Button>
             		 </Panel>
             	</Well>


			)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({postBooks},dispatch)
}

export default connect(null,mapDispatchToProps)(BookForm) ;





