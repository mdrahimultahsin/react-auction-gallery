const getFavouriteItemFromLocalStorage =()=>{
    const storedItems = localStorage.getItem('favItems');
    return storedItems?JSON.parse(storedItems):[]
}
const setFavItemToLocalStorage =(list) =>{
    const strinifiedItems = JSON.stringify(list);
    if(strinifiedItems){
        localStorage.setItem('favItems',strinifiedItems)
    }
}
const addFavouriteItemToLocalStorage =(id)=>{
    const storedItems = getFavouriteItemFromLocalStorage();
    const newStoredItems = [...storedItems,id]
    setFavItemToLocalStorage(newStoredItems)
}
export {getFavouriteItemFromLocalStorage as getFavItemFromStorage,addFavouriteItemToLocalStorage as addFavItemToStorage}