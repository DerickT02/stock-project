import {useState, useEffect} from 'react'

function Search(){
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <div>
            <h2>Search Stock</h2>
            <input value = {input} onChange = {handleChange}></input>
        </div>
    )
}

export default Search