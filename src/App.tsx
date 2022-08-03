import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";

type GetType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}


function App() {

    let [get, setG  et] = useState<Array<GetType>>([])
    console.log(get)

    const getRequestHandler = () => {
        return setGet([])

    }

useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => setGet(json))},[])


    return (
        <div className="App">
            <Button name={"ClearPage"} callBack={getRequestHandler}/>
            <p></p>
            <ul>
                {get.map((el, index) => {
                    return (
                        <li >
                            <span>{el.id}</span>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                        </li>

                        )

                })}</ul>

        </div>
    );
}

export default App;
