'use strict'


//import combinreducers to put all reducers together
import {combineReducers} from 'redux';

//import the card reducers 
                              

//import books reducers
import {booksReducers} from './booksReducers';

//Here is where we actually cobine the reducers

import {cartReducers} from './cartReducers';

console.log('here are the book reducers',cartReducers)
export default combineReducers({
   
    books:booksReducers,
    carts:cartReducers
    
})
    