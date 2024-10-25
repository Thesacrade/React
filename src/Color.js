
const Color = ({colorValue})=>{
    
    
    return(
        <main
        className="color"
        style={{backgroundColor: colorValue}}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
        </main>
    )
}
export default Color;