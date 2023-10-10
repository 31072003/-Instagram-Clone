import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Pokemon = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState()

    useEffect(() => {
        // alert('hi')
        async function getDta() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name[0])
            setMoves(res.data.moves.length)
        }
        getDta()
    })

    return (

        <div>
            <h1>your chose <span style={{ color: "red" }}>{num}</span>  .</h1>
            <h1>my name is  <span style={{ color: "red" }}>{name}</span> .</h1>
            <h1>i have a moves <span style={{ color: "red" }}> {moves}</span> .</h1>
            <div>hi api call using axios and useeffect .</div>
            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }}>
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
        </div>
    )
}
export default Pokemon;