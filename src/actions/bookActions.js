'use strict'


//UPDATE BOOK
export function updateBooks(id){
    return {
        type:"UPDATE_BOOK",
        payload:id
    }
}



//POST BOOK
export function postToBooks(book){
    return {
        type:"POST_BOOK",
        payload:book
    }
}

//DELETE BOOK
export function deleteBooks(id){
    return {
        type:"DELETE_BOOK",
        payload:id
    }
}




export function talk(){
    console.log('Holllllaaaaaaaa!!!!!!!')
}