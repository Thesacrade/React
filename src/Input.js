
const Input = ({colorName, setColorName})=>{   

    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Enter color name</label>
            <input
            autoFocus
            className="colorInput"
            type="text"
            placeholder="Enter Color"
            required
            value={colorName}
            onChange={(e)=> setColorName(e.target.value)}
        />
        </form>
        
    )
}
export default Input;