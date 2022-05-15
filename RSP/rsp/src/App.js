import './App.css';
import {useState} from 'react'


function App() {
    let [leadMonitor, leadMonitorCng] = useState()
    let [opntLeadMonitor, opntLeadMonitorCng] = useState()

    const opntMonitor = () => {
        if(opnt === 0){
            opntLeadMonitorCng('img/rock.png')
        }
        else if(opnt === 1){
            opntLeadMonitorCng('img/scissors.png')
        }
        else{
            opntLeadMonitorCng('img/paper.png')
        }
    }
    
  return (
    <div className='body'>
    <div className='player'>
        <div className='playerLead score'>
            {playerScore}
            <img className='lead' src={leadMonitor}></img>
            
        </div>
    </div>

    <div className='monitor'>
        <div className='result'>
            
        </div>
        <div className='btnGrp'>
            <button onClick={()=>{
                opnt = Math.floor(Math.random() * 3)
                leadrock();
                opntMonitor();
                leadMonitorCng('img/rock.png')}
                } className='card rock'>Rock</button>
            <button onClick={()=>{
                opnt = Math.floor(Math.random() * 3)
                leadscissor();
                opntMonitor();
                leadMonitorCng('img/scissors.png')} 
                } className='card scissor'>Scissor</button>
            <button onClick={()=>{
                opnt = Math.floor(Math.random() * 3)
                leadpaper();
                opntMonitor();
                leadMonitorCng('img/paper.png')}
                } className='card paper'>Paper</button>
        </div>
        <button onClick={()=>{
            {playerScore = 0}
            {opntScore = 0}
            alert("Reset!")
        }} className='reset'>Reset</button>
    </div>

    <div className='opponent'>
        <div className='opnt score'>
            {opntScore}
            <img className='lead' src={opntLeadMonitor}></img>
        </div>
    </div>

</div>

  );
}

let playerScore = 0
let opntScore = 0
let match= "d"
let opnt = "d"

const result = () =>{

    if(match-opnt === -1||match-opnt === 2){
        alert("win!")
        playerScore++
    }

    else if(match === opnt){
        alert("Draw")
    }

    else{
        alert("Rose")
        opntScore++
    }
}

const leadrock = () =>{
    match = 0
    result(match)
}

const leadscissor = () =>{
    match = 1
    result(match)
}

const leadpaper = () =>{
    match = 2
    result(match)
}



export default App;
