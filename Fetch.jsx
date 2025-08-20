import React,{useEffect,useState} from "react";
function Fetch(){
    const[quotes,setQuotes]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then((res)=>res.json())
        .then((data)=>(setQuotes(data.quotes.splice(0,10))))
    },[]

    )
    return(
        <div>
            
            <h1>Quotes</h1>
            {quotes.map((quotes)=>(
                <h1>{quotes.author}:   {quotes.quote}</h1>
            ))}
        </div>
    );
}
export default Fetch