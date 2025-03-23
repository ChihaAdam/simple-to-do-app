function getFromLocal(key){
    const item =window.localStorage.getItem(key);
    return item ? JSON.parse(item):undefined;
}
function setToLocal(key,info){
    try{
        window.localStorage.setItem(key,JSON.stringify(info));
    }
    catch(error){
        console.error(error);
    }
}
export {getFromLocal,setToLocal}