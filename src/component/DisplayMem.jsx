
import { useState } from 'react';
import { memes } from "./memes";
import "./displayMem.css"

  export function MemeItem({ mem }) {
  const [upvotes, setUpvotes] = useState(mem.upvotes);
  const [downvotes, setDownvotes] = useState(mem.downvotes);
  console.log(upvotes)  
  


  return (
    <li><div key={mem.title}><br></br>
      <h3>{mem.title}</h3><br></br>
      <div className='img'>{mem.img} </div>
      <button className='btn' onClick={() => setUpvotes(upvotes + 1)}>Upvotes ({upvotes})</button>
      <button className='btn' onClick={() => setDownvotes(downvotes + 1)}>Downvotes ({downvotes})</button><br></br>
      <hr />
    </div>
    </li>
  );
}
  
export function DisplayMem() {

  
return (
    <div>
     {memes.map((mem) => (
        <MemeItem key={mem.title} mem={mem} />
      ))}
    </div>
  );
}







