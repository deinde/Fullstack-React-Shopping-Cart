'use strict';
import {createStore} from 'redux';



const reducer = function(state={books:[]},action){
    switch(action.type){
        case'POST_BOOK':
        // let books = state.books.concat(action.payload);
        // return {books};
        //another way of writing the same thing above
        return {books:[...state.books,...action.payload]};
        break;
        case 'DELETE_BOOK':
        return {books:[...state.books.splice(...action.payload.id)]}
    }
    return state;
}

//STEP ONE CREATE STORE!!

var store = createStore(reducer);

store.subscribe(function(){
    console.log('this is the state ',store.getState())
    //console.log('this is the state ',store.getState()[1].price)
})


//STEP TWO CREATE AND DISPACH ACTIONS


// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})
// store.dispatch({type:'INCREMENT',payload:1})

store.dispatch({type:'POST_BOOK',payload:[{
    id:1,
    title:'Kong Dong!',
    description:'A story of a black porn star!',
    price:69.69
},
{
    id:2,
    title:'Annie',
    description:'The son will come out tomorrow',
    price:13.00
},
{
    id:3,
    title:'Off the Boat',
    description:'The history of racisim in America',
    price:25.00
 }
]
})



store.dispatch({type:"POST_BOOK",payload:[{
    id:1,
    title:'The Third Joint!',
    description:'Re writing history!',
    price:69.69
}]})


store.dispatch({type:"DELETE_BOOK",payload:[{
    id:1,
    title:'The Third Joint!',
    description:'Re writing history!',
    price:69.69
}]})

//STEP THREE IS TO DEFINE THE REDUCERS