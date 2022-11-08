import './App.css'
import './grid.css'

function Event(){
    function test(){
        console.log('testando um dois tres');
    }

    return (
        <div onClick={test} id="t"></div>
    )
}

export  default Event