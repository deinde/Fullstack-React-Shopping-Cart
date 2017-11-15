'use strict'



export function booksReducers(state={books:[]},action){
    switch(action.type){
        case'POST_BOOK':
        // let books = state.books.concat(action.payload);
        // return {books};
        //another way of writing the same thing above
        console.log('Post book just got called!!!')
        return {books:[...state.books,...action.payload]};
        break;
        case 'DELETE_BOOK':
        //CREATE A COPY OF THE BOOKS ARRAY THAT ALREADY HAS BOOKS
        let currentBookToDelete = [...state.books];
        //'FIND INDEX' WILL MAP THROUGH AND RETURN INDEX OF BOOK MATCHING ID FROM
        //ACTION.PAYLOAD.ID AND SET 'indexOfDelete' to example '2' or whatever index passed in
        //through payload
        let indexOfDelete = currentBookToDelete.findIndex(

            function(x){
                return x.id === action.payload.id;
            }
        )
        //MAKE 2 COPIES OF 'currentBookToDelete' the first to cut and copy the part of the array up to the index
        //that was passed in through action.payload.id. The second cut and copy half after the index passed 
        //in by action.payload.id .So essentially taking first half minus passed in index, and second half minus
        //passed in index. THEN EVERYTHING IS SMUSHED TOGETHER. IE SPREAD OPERATOR. 'MERGED' AND SET TO 'books:'copy
        //then returning a new array minus the passed index's element!!!

        return  {books:[...currentBookToDelete.slice(0,indexOfDelete), ...currentBookToDelete.slice(indexOfDelete + 1)]}
        break;
        case "UPDATE_BOOK":
        let currentBookToUpdate = [...state.books];
        let indexOfUpDate = currentBookToUpdate.findIndex(
            function(x){
                return x.id = action.payload.id;
            }
        )
        const newBookeToUpdate = {
            ...currentBookToUpdate[indexOfUpDate],
            title:action.payload.title
        }
        console.log('this is the updated book', newBookeToUpdate)
        return {books:[...currentBookToUpdate.slice(0,indexOfUpDate), newBookeToUpdate, ...currentBookToUpdate.slice(indexOfUpDate + 1)]}
    }
    return state;
}
