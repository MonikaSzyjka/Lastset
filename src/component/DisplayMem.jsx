
import { useState } from 'react';
import { memes } from "./memes";

export function DisplayMem() {
  return (
    <div>
      {memes.map((mem) => (
        <MemeItem key={mem.title} mem={mem} />
      ))}
    </div>
  );
}

function MemeItem({ mem }) {
  const [upvotes, setUpvotes] = useState(mem.upvotes);
  const [downvotes, setDownvotes] = useState(mem.downvotes);

  return (
    <div>
      <h3>{mem.title}</h3>
      <button onClick={() => setUpvotes(upvotes + 1)}>Upvotes ({upvotes})</button>
      <p>Upvotes: {upvotes}</p>
      <button onClick={() => setDownvotes(downvotes + 1)}>Downvotes ({downvotes})</button>
      <p>Downvotes: {downvotes}</p>
      <img src={mem.img} alt={mem.title} />
      <hr />
    </div>
  );
}