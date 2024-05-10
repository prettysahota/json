'use client'
import { useState } from "react";
import JsonToHtml from './components/JsonToHtml'
import axios from "axios";
import JsonToMarkdown from './components/JsonToMarkdown'
export default function Home() {

  const [url,seturl]=useState('');
  const [html,sethtml]=useState(true);
  const [mark,setMarkdown]=useState(false);
  const [jsondata,setjsondata]=useState('')
  const [err,seterr]=useState('')

 const fetchdata=(e)=>
  {
    if(url==='')
{
  seterr('Please Enter url')
  return;
}    
    console.log(url,"--------->url data")

    axios.get(url).then(res=>{
      console.log(res.data)
      
//       const parsedData = JSON.parse(res.data);

// // Stringify the parsed data back to JSON format
// const jsonString = JSON.stringify(parsedData, null, 2); // the third argument (2) is for indentation level for pretty printing

// Now you can show or use the jsonString variable which contains the JSON data in the same format as the original API response
setjsondata(res.data);
    }).catch(err=>{
console.log(err);
seterr("Something went wrong");
    })



 }

 const handleJsonChange = (event) => {
  console.log(event,"========>event");
  try {
    // Attempt to parse the JSON data
    const newData = JSON.parse(event.target.value);
    setJsonData(newData);
  } catch (error) {
    // If parsing fails, do nothing (or handle the error as needed)
    console.error('Invalid JSON format:', error);
  }
};


  return (
   <>

    <div className="parentdiv">

     

      <div className="childdiv">
        <div className="childsec">
        API End Point
        
   <div className="flex"> 
     <input type="url" className="input1" value={url} onChange={(e)=>{seturl(e.target.value);seterr("")}}/>
     <button className="btn"  onClick={(e)=>{fetchdata(e)}}>Get</button>
   </div>
   {err?<p style={{color:'red'}}>{err}</p>:""}

   <div className="flex mydiv">
    
    <div className="jsontext">Json</div>
    <div className="htmltext"><button className="btn2"  onClick={(e)=>{sethtml(true);setMarkdown(false)}}>Html</button><button className="btn3"  onClick={(e)=>{setMarkdown(true);sethtml(false)}}>Markdown</button></div>
    </div>
   <div className="flex">
   
    <div className="jsondiv">
      <textarea className="textarea"
        value={jsondata?JSON.stringify(jsondata, null, 2):""}
        onChange={(e)=>{handleJsonChange(e)}}
    ></textarea>
    </div>

    <div className="hMdiv">
      {html===true?
      jsondata?<JsonToHtml data={jsondata} />:"":
     jsondata? <JsonToMarkdown jsonData={jsondata}/>:""
    
    }




    </div>


   </div>



        </div>
      </div>
    </div>








   </>
  );
}
