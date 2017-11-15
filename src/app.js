'use strict';
import {createStore} from 'redux';

import {addToCart} from './actions/cartActions';
import {postToBooks} from './actions/bookActions';
import {talk} from './actions/bookActions'

import reducers from './reducers/index';

//  function postToBooks(book){
//      console.log('post books is being called!!!')
//     return {type:"POST_BOOK",payload:book}
// }


// function reducers (state={carts:[]},action) {
//     switch(action.type){
//     case "ADD_TO_CART":
//     console.log('cart being called!!!!!')
//      return {carts:[...state.carts,...action.payload]}
           
//      break;
//     }
//     return 
   
// }




//STEP ONE CREATE STORE!!

var store = createStore(reducers);

store.subscribe(function(){
    console.log('this is the state ',store.getState())
    //console.log('this is the state ',store.getState()[1].price)
})


//STEP TWO CREATE AND DISPACH ACTIONS


// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})

store.dispatch(postToBooks({type:'POST_BOOK',
payload:[
{
    id:1,
    title:'Kong',
    description:'A fucking story of cool Gorrilla',
    price:89.00
   
},
{
    id:2,
    title:'Annie',
    description:'The son will come out tomorrow',
    price:13.00
},
{
    id:3,
    title:'This is another Thing',
    descrip:'Cool story bro',
    price:10
   
    },
    {
        
    id:4,
    title:'A Third Thing',
    descrip:'A new story',
    price:15
    
 }

]
}))

store.dispatch({type:"POST_BOOK",payload:[{
    id:4,
    title:'The Third Joint!',
    description:'Re writing history!',
    price:69.69
}]})



//DELETE
store.dispatch({type:"DELETE_BOOK",payload:{ id:1}})
store.dispatch({type:"DELETE_BOOK",payload:{ id:2}})

//UPDATE
store.dispatch({type:"UPDATE_BOOK",payload:
{id:3,
 title:'Updated Book Title',
 description:'This is the story of me building a fullstack react app'

}
})


//CART ACTIONS
//store.dispatch({type:"ADD_TO_CART",payload:{id:1}})

//BELOW IS THE OLD WAY OF CREATING AN ACTION!!!!!!
//store.dispatch({type:"ADD_TO_CART",payload:[{ id:1,title:'adding to cart title'}]})


//BELOW IS THE NEW WAY OF CREATING AN ACTION!!!!
//NEW ADD TO CART
  store.dispatch(addToCart([{id:1}]));
  store.dispatch(postToBooks([
      {
          id:1,
          title:'KONG STRONG',
          des
      }
    ]))


//store.dispatch(postToBooks([{id:2}]))
talk();