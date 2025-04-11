const handleShowMenu =()=>{
    document.getElementById('mobileMenu').classList.remove('hidden')
    document.getElementById('menubarIcon').classList.add('hidden')
    document.getElementById('menuCloseIcon').classList.remove('hidden')
}
const handleHideMenu =() =>{
    document.getElementById('mobileMenu').classList.add('hidden')
    document.getElementById('menubarIcon').classList.remove('hidden')
    document.getElementById('menuCloseIcon').classList.add('hidden')
}
export {handleShowMenu,handleHideMenu}