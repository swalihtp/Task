import React, {useState} from 'react';


function Theme(){

    const[theme,setTheme]=useState(false);


    function changeTheme(){
        setTheme(!theme)
    }


    return(
        <div
        style={{
                width:"100%",
                height:"100vh",
                backgroundColor:theme?"white":"black"
            }}
        >
           
            <button onClick={changeTheme}>Change Theme</button>

        </div>
        
    );
}
export default Theme;