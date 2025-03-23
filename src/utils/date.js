let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function pad(number){
    return `${number<10? "0":""}${number}`;
}


export default function getDate(){
    let date = new Date;
    let info= {
        date:null,
        time:null
    }
    let day = pad(date.getDate());
    let month = pad(date.getMonth());
    let year = date.getFullYear();
    let seconds=pad(date.getSeconds());
    let minutes=pad(date.getMinutes());
    let hours = pad(date.getHours())
    info.date=`${days[date.getDay()]} • ${day}-${month}-${year}`;
    info.time=`${hours}:${minutes}:${seconds}`;
    return info;
}
