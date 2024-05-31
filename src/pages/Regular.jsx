import { Form } from "../component/Form";
import { DisplayMem } from "../component/DisplayMem";
import { useState } from "react";


export function Regular (){

  const [items, setItems] = useState();

  const addMem = (data) => {
  const newMem =[...items,data]
  setItems(newMem)
};  
 
  return (
    <section>
      <DisplayMem/>
      <div className="form">
      <Form onAddMem ={addMem}/>
      </div>
      </section>
  )
}


