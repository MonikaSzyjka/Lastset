import { useState } from "react"
import "../component/form.css"


export const Form = ({onAddMem}) => {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState()
    return (
      <form
      onSubmit ={(e) => {
       e.preventDefault();
       onAddMem({title, file});
      }}>
        
     <div>

       <input defaultValue={title} 
       onChange={(e) =>{
         setTitle(e.target.value)
       }}
       type="text" title="title" placeholder="title"/>
     </div>
     <div>
     <button disabled={title.length === 0 }>upvotes</button>
     </div>
     <div>
      <button  disabled={title.length === 0 }>downvotes</button>
      </div>
     <div>
       <input type="file" 
       defaultValue={file}
       onChange={(e) => {
         setFile(e.target.files[0])
       }}
       /> 
      </div>
      <div>
       <button disabled={title.length === 0 }>Save</button>
      </div>
     </form>
    )}