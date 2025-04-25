import React from 'React'

function Home(){
    
    const addItem =() => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;

        return variableA*3 + variableC*variableB
    }
    return(
        <><div>Home</div>
        <p>Hola Mundo</p>
        <button onclick = {addItem}></button>
        </>
    )
}
export default Home