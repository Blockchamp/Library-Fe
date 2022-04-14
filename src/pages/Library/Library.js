import React, { useState, useEffect } from "react";
import SearchField from "../../components/SearchField";
import { BigNumber, ethers } from "ethers";
import fileStorage from "../../utils/fileStorage.json";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardLink,
} from "mdb-react-ui-kit";

export default function Library() {
  const fileStorageContractAddress =
    "0x942E216eA1a697c77163bc13d897Cd3Fc9f763E2";
  const fileStoragecontractABI = fileStorage.abi;

  const [filesCID, setFilesCID] = useState([]);
  const [cid, setCID] = useState();
  const [data, setData] = useState([]);

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
        setData(publicData);

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

  const onSearch = (e) => {
    e.preventDefault();

    let filteredCID = filesCID.filter((cid) => {
      return cid === e.target.value;
    });

    setFilesCID(filteredCID);
  };

  return (
    <div>
      <SearchField onSearch={onSearch} cid={cid} />
      <div style={{ margin: 50 }}>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => {
            return (
              <MDBCol>
                <MDBCard className="h-100">
                  <a
                    target="_blank"
                    href={`https://ipfs.io/ipfs/${item[0]}/${item[2]}`}
                    alt="..."
                    position="top"
                    rel="noreferrer"
                  >
                    File Link
                  </a>
                  <MDBCardBody>
                    <MDBCardTitle>{item[2]}</MDBCardTitle>
                    <MDBCardText>{item[3]}</MDBCardText>
                  </MDBCardBody>

                  {/* Social sharing links */}
                  <MDBCardFooter>
                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#"
                    >
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#55acee" }}
                      href="#"
                    >
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#ac2bac" }}
                      href="#"
                    >
                      <MDBIcon fab icon="instagram" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#0082ca" }}
                      href="#"
                    >
                      <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
}
