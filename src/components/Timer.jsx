import { useEffect, useState } from "react"

function Timer(){
    const [time,setTime] = useState(new Date().toLocaleString())
    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(new Date().toLocaleString())
        },1000)
        return ()=>clearInterval(id)
    },[])
    return(
        <div>
            <h1>Time : {time}</h1>
        </div>
    )
}
export default Timer