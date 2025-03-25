export function sortByName(T,mode){
    
    let aux=[...T];
    if (mode=="1"){
        aux.sort(
            (a,b)=>a.title.localeCompare(b.title)
        )
    }
    else{
        aux.sort(
            (a,b)=>b.title.localeCompare(a.title)
        )
    }
    return aux;
}

export function sortByDate(T,mode){
    let aux=[...T];
    if (mode=="1"){
        aux.sort(
            (a,b)=>a.creationDate.pureDate-b.creationDate.pureDate
        )
    }
    else{
        aux.sort(
            (a,b)=>b.creationDate.pureDate-a.creationDate.pureDate
        )
    }
    return aux;
}
