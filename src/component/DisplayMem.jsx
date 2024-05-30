
import { useState } from 'react';
import { memes } from "./memes";
import "./displayMem.css"

export function DisplayMem() {
  return (
    <div>
      {memes.map((mem) => (
        <MemeItem key={mem.title} mem={mem} />
      ))}
    </div>
  );
}

const whatHot = memes.filter((mem) => mem.upvotes - mem.downvotes >5)

const isHot = () => {
  if(whatHot(mem) == true) {
      return <Hot/>;
  }
  return false;}





function MemeItem({ mem }) {
  const [upvotes, setUpvotes] = useState(mem.upvotes);
  const [downvotes, setDownvotes] = useState(mem.downvotes);

  return (
    <li><div key={mem.title}>
      <h3>{mem.title}</h3>
      <button className='btn' onClick={() => setUpvotes(upvotes + 1)}>Upvotes ({upvotes})</button>
      <p>Upvotes: {upvotes}</p>
      <button className='btn' onClick={() => setDownvotes(downvotes + 1)}>Downvotes ({downvotes})</button>
      <p>Downvotes: {downvotes}</p>
      <div className='img'>{mem.img} </div>
      <hr />
    </div>
    </li>
  );
}