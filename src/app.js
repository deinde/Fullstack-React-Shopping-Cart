'use strict';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';

//import {postToBooks} from './actions/bookActions';


import {addToCart} from './actions/cartActions';
import {postToBooks,deleteBooks,updateBooks,talk} from './actions/bookActions'
//import {talk} from './actions/bookActions'



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







const middleware = applyMiddleware(logger);

//STEP ONE CREATE STORE!!
const store = createStore(reducers,middleware);

//DONT NEED BELOW ANYMORE BECAUSE INSTALLED redux-logger
// store.subscribe(function(){
//     console.log('this is the state ',store.getState())
//     //console.log('this is the state ',store.getState()[1].price)
// })


//STEP TWO CREATE AND DISPACH ACTIONS


// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})

// store.dispatch(postToBooks({type:'POST_BOOK',
// payload:[
// {
//     id:1,
//     title:'Kong',
//     description:'A fucking story of cool Gorrilla',
//     price:89.00
   
// },
// {
//     id:2,
//     title:'Annie',
//     description:'The son will come out tomorrow',
//     price:13.00
// },
// {
//     id:3,
//     title:'This is another Thing',
//     descrip:'Cool story bro',
//     price:10
   
//     },
//     {
        
//     id:4,
//     title:'A Third Thing',
//     descrip:'A new story',
//     price:15
    
//  }

// ]
// }))

// store.dispatch({type:"POST_BOOK",payload:[{
//     id:4,
//     title:'The Third Joint!',
//     description:'Re writing history!',
//     price:69.69
// }]})



//DELETE
// store.dispatch({type:"DELETE_BOOK",payload:{ id:1}})
// store.dispatch({type:"DELETE_BOOK",payload:{ id:2}})

//UPDATE
// store.dispatch({type:"UPDATE_BOOK",payload:
// {id:3,
//  title:'Updated Book Title',
//  description:'This is the story of me building a fullstack react app'

// }
// })


//CART ACTIONS
//store.dispatch({type:"ADD_TO_CART",payload:{id:1}})

//BELOW IS THE OLD WAY OF CREATING AN ACTION!!!!!!
//store.dispatch({type:"ADD_TO_CART",payload:[{ id:1,title:'adding to cart title'}]})


//BELOW IS THE NEW WAY OF CREATING AN ACTION!!!!
//NEW ADD TO CART






  //DELETE BOOK -TIP TO REMEMMBER!!-WHAT EVER THE action.payload in Reducers is
  //IS HOW YOU SHOULD scruture your argument!!! VERY IMPORTANT WILL SCREW UP ARGUMENT RESULTS
  //IF YOU DONT!!! SO CHECK REDUCER action.payload first and match it!!
  //example "DELETE_BOOK" return {books:[...state.books,...action.payload]}; 
  //BELOW SHOULD 
//   BE this first one:
// 
//   store.dispatch(postToBooks(
//  [
//    {
//      id:1,
//      title:'Any Title',
//      descrip:'whatever',
//      price:20.00
//   },
//      id:2,
//      title:'Amptjer Title',
//      descrip:'Yea whatever',
//      price:22.00 
//   ]
//)
// 
//NOT this second !!! store.dispatch(postToBooks(
    //{
   //       id:1,
    //      title:'Any Title',
    //      descrip:'whatever',
    //      price:20.00,
 //},
   //{
    //      id:2,
    //      title:'Amptjer Title',
    //      descrip:'Yea whatever',
    //      price:22.00 

//}
  //)
// )

// The correct approach first above is passing in an array of objects
//as opposed to the second who is just passing an object look at the aciton.payload
//from reducer its inside a array!! therefore you need to pass in array here!!
// if it was somethingl like book:action.payload.id 
// then pass in like this  store.dispatch(deleteBooks({id:2})); notice no array!!!
//just object. BE FREAKING CARFULE OR YOU WILL WONDER WHY ITS NOT WORKING!!!

//POST TO BOOKS
  store.dispatch(
      postToBooks(
    [{
        id:1,
        title:'This is another Thing',
        descrip:'Cool story bro',
        price:10
       
        },
        {
        id:2,
        title:'Stussy Crew',
        descrip:'Yep thats it',
        price:27.00
           
        },
        {
        id:3,
        title:'Three AMigos',
        descrip:'Yep thats it',
        price:27.00
            
        }

        

    ]
  )
)


    store.dispatch(deleteBooks({id:2}));
    
    
   //UPDATE BOOK
    store.dispatch(updateBooks(
        
            {
                id:1,
                title:'Change the title!!'
            }
        
    ))

    //ADD TO CART
    store.dispatch(addToCart([{id:1}]));
   

//just to see if the function would import
talk();