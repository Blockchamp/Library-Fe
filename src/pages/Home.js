import React, { useEffect, useState, useRef } from "react";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";
import * as IPFS from "ipfs-core";
import "./Home.css";
import { Link } from "react-router-dom";
import { BigNumber, ethers } from "ethers";
import fileStorage from "../utils/fileStorage.json";

export default function Home() {
  const [fileBuff, setFileBuff] = useState();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const [name, setName] = useState("");
  const descRef = useRef();
  const checkRef = useRef();
  const fileStorageContractAddress =
    "0x942E216eA1a697c77163bc13d897Cd3Fc9f763E2";
  const fileStoragecontractABI = fileStorage.abi;

  const [cid, setCID] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        //setLoading(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const fileStorageContract = new ethers.Contract(
          fileStorageContractAddress,
          fileStoragecontractABI,
          signer
        );

        const publicData = await fileStorageContract.retrievePublic({
          gasLimit: 300000,
        });

        console.log(publicData);

        //setStacked(Number(BigNumber.from(tokenStaked).toString()) / 10 ** 18);
        //setToken(Number(BigNumber.from(tokenBalance).toString()) / 10 ** 18);
        //setLoading(false);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});

  //handling upload
  const fileUpload = async (e) => {
    e.preventDefault();
    setLoading1(true);
    console.log(e.target.files);
    const file = e.target.files[0];
    const name = e.target.files[0].name;
    console.log(name);
    setName(name);

    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNiRGZhNDBBYjBEZTcwNTkwNURERDg4RTAwOWMzOTM3OGEzOWRhMmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDk5MjExMTU1NDYsIm5hbWUiOiJXZWIzIn0._kphTIOj4s98lZpgrkcHCSxAmW7j15CNEYd5qbWULjs",
    });

    const cid = await client.put(e.target.files, {
      name: name,
      maxRetries: 3,
    });
    console.log(cid);
    setLoading1(false);
    setCID(cid);
  };

  useEffect(() => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const fileStorageContract = new ethers.Contract(
      fileStorageContractAddress,
      fileStoragecontractABI,
      signer
    );

    const imageSent = () => {
      setLoading(false);
      window.alert("Image uploaded successfully");
    };

    fileStorageContract.on("StoreFile", imageSent);

    return () => {
      if (fileStorageContract) {
        fileStorageContract.off("StoreFile", imageSent);
      }
    };
  }, []);

  //handle file upload button click
  const fileSubmitted = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const status = checkRef.current.checked;
      const desc = descRef.current.value;
      console.log(status);
      console.log(name);
      console.log(desc);

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const fileStorageContract = new ethers.Contract(
          fileStorageContractAddress,
          fileStoragecontractABI,
          signer
        );

        const storeTxn = await fileStorageContract.store(
          accounts[0],
          cid,
          status,
          name,
          desc,

          {
            gasLimit: 3000000,
          }
        );

        console.log("Mining...", storeTxn.hash);
      }

      //handle smartcontract here
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="pt-5 d-flex flex-column-reverse flex-lg-row justify-content-around">
        <div className="main mt-5">
          <div className=" main_info mt-">
            <h1 className="h1 mb-3">
              Easily manage your files in our platform
            </h1>
            <p>A decentralized file management library...</p>
          </div>
          <div className="main_upload d-flex flex-column  mt-5">
            <div>{loading1 === true ? "uploading...." : ""}</div>
            <input className="my-3" type="file" onChange={fileUpload}></input>
            <input placeholder="Description" ref={descRef} className="form" />
            <label>
              Private: <input type="checkbox" ref={checkRef} className="mt-3" />{" "}
            </label>
            <div>{loading === true ? "loading....." : ""}</div>
            <button className="my-3" onClick={fileSubmitted}>
              Upload File
            </button>
          </div>
        </div>
        <div className="library mt-5">
          <Link to="/library" className="px-5 button_library">
            Go to Library
          </Link>
        </div>
      </div>
    </div>
  );
}
