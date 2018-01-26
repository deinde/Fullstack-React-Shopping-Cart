"use strict"

import React from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import {Grid,Col,Row,Button} from 'react-bootstrap';
import BookItem from './bookItem';

// function getBooks(){
//     return{ 
//        type:"GET_BOOKS"
//     }
// }
      let dis ={
      	display:'block!important',
      	width:'100%'
      }




class BooksList extends React.Component{
	componentDidMount(){
		//Dispatch this action
		this.props.getBooks();
	}
  render(){
      console.log('Accessing the state!!!!', this.props.books);

      const bookList = this.props.books.map(function(booksArr){
        return(
            // <div style={dis} key={booksArr.id}>
            //   <h2>{booksArr.title}</h2>
            //   <h2>{booksArr.description}</h2>
            //   <h2>{booksArr.price}</h2>
            //   <Button bsStyle='primary'>Buy Now</Button>
            // </div>
            <Col xs={12} sm={6} md={4} key={booksArr.id}>
             <BookItem
             	id:{booksArr.id},
             	title:{booksArr.title},
             	description:{booksArr.description},
             	price:{booksArr.price}
             />
            </Col>

        	)
      })
    return(

         <Grid>
          <Row style={{marginTop:'15px'}}>
           {bookList}
          </Row>
         </Grid>
    	)
   }
}

function mapStateToProps(state){
	return{
		books:state.books.books
	}
}

function mapDispatchToProps(dispatch){
	
	return bindActionCreators({getBooks:getBooks},dispatch)

	
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList);




