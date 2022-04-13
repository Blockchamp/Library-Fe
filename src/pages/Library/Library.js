import React, {useState, useEffect} from 'react';
import SearchField from '../../components/SearchField';
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
} from 'mdb-react-ui-kit';

export default function Library() {

    const [filesCID, setFilesCID] = useState([])
    const [cid, setCID] = useState()


    useEffect(() => {
        //get CID from smartcontract
        //store them as array
        //itireate over the cid
        //use ipfs get method to get each file
        //display in the filed
        //to use javascript map
    })

    const onSearch = (e) => {
        e.preventDefault()

        let filteredCID = filesCID.filter(cid => {
            return cid === e.target.value
        })

        setFilesCID(filteredCID)
    }

    return (
        <div>
            <SearchField onSearch={onSearch} cid={cid}/>
            <div style={{margin: 50}}>
                
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Book Title</MDBCardTitle>
                                <MDBCardText>
                                    Book Description
                                </MDBCardText>
                            </MDBCardBody>

                            {/* Social sharing links */}
                            <MDBCardFooter>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Book Title</MDBCardTitle>
                                <MDBCardText>
                                    Book Description
                                </MDBCardText>
                            </MDBCardBody>

                            {/* Social sharing links */}
                            <MDBCardFooter>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Book Title</MDBCardTitle>
                                <MDBCardText>
                                    Book Description
                                </MDBCardText>
                            </MDBCardBody>

                            {/* Social sharing links */}
                            <MDBCardFooter>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div >
        </div>
    );
}