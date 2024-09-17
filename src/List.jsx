import { useState } from "react"
function List(){
    const[marks,setName]=useState([14,4,265,7995,74,32,10,2,65])
    return(
        <div>
            <p>
                I am taneem from list component
            </p>
            {
                marks.map((i)=>{
                    return <p key={i}>{i}</p>
                })
            }

        </div>
    )

}
export default List//List kata so ek component