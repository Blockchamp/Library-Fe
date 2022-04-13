import {Button} from 'react-bootstrap'

const SearchField = () => {
    return(
       <div className="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box p-2">
           <div className="input-group form-container">
               <input type="text" name="search" className="form-control search-input" placeholder="Search"
               autoFocus="autofocus" autoComplete="off">
               </input>

               <div className='px-3'>
               <Button variant="outline-success">Search</Button>
               </div>
               
              
           </div>
       </div>
    );
}

export default SearchField;