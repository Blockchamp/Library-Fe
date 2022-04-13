import React, {useEffect, useState} from "react";
import * as IPFS from 'ipfs-core'
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  const [fileBuff, setFileBuff] = useState();
  
  const [cid, setCID] = useState('')

  useEffect(() => {

  })

  //handling upload
  const fileUpload = (e) => {
    e.preventDefault()
    
    const file = e.target.files[0]

    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setFileBuff(Buffer(reader.result))
    }
  
  }

  //handle file upload button click
  const fileSubmitted = async (e) => {
    e.preventDefault()
    try {
      const ipfs = await IPFS.create();

      const result = await ipfs.add(fileBuff)
      
      setCID(result.path)

      //handle smartcontract here

    } catch (error) {
      console.log(error)
    }



  }

  return <div className="container">
    <div className="pt-5 d-flex flex-column-reverse flex-lg-row justify-content-around">
      <div className="main mt-5">
        <div className=" main_info mt-">
          <h1 className="h1 mb-3">Easily manage your files in our platform</h1>
          <p>A decentralized file management library...</p>
        </div>
        <div className="main_upload d-flex flex-column  mt-5">
          <input className="my-3" type="file" onChange={fileUpload} ></input>
          <button className="my-3" onClick={fileSubmitted}>Upload File</button>
        </div>
      </div>
      <div className="library mt-5">
          
          <Link to="/library" className="px-5 button_library">Go to Library</Link>
      </div>
    </div>
  </div>;
}
