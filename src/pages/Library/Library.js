import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBRow,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
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
                        <MDBCardFooter>
                            <small className='text-muted'>#author, #genre</small>
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
                        <MDBCardFooter>
                            <small className='text-muted'>#author, #genre</small>
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
                        <MDBCardFooter>
                            <small className='text-muted'>#author, #genre</small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}