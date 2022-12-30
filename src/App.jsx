import React,{useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import InnerPage from "./InnerPage";

function App(){

    const [create, setCreate] = useState(false);

    function creation(){
      setCreate(true);
    }
return  <div >
    
    <Navbar navigate ={setCreate}/>

   {!create ? <Home set={creation}/> : <InnerPage isCreate={create} change={setCreate}/>}
   
        
        
    </div>
    
}


export default App;