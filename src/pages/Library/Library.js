import React from 'react';
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
    return (
        <div>
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
    );
}