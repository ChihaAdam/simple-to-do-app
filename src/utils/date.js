const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const date = new Date;


function pad(number){
    return `${number<10? "0":""}${number}`;
}


export default function getDate(){
    let info= {
        date:null,
        time:null
    }
    const day = pad(date.getDate());
    const month = pad(date.getMonth());
    const year = date.getFullYear();
    const seconds=pad(date.getSeconds());
    const minutes=pad(date.getHours());
    const hours = pad(date.getHours())
    info.date=`${days[date.getDay()]} • ${day}-${month}-${year}`;
    info.time=`${hours}:${minutes}:${seconds}`;
    return info;
}
