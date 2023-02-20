import react from 'react'
import "./hero.css"

const searchBar = ({placeholder, data}) => {
    return (
        // <div className='flex'>
        //     <div className='searchInputs'>
        //         <input type="text" placeholder={placeholder}/>
        //         <div className='searchIcon'></div>
        //     </div>
        //     <div className="dataresult">
        //       {data.map((value,key) => {
        //         return <a className="dataItem" href={value.image} target="_blank">
        //           <p>{value.location}</p>
        //           </a>
        //       })}
        //     </div>
        // </div>
<>
        <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder={placeholder} />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            {/* <div className="dataresult">
              {data.map((value,key) => {
                return <a className="dataItem" href={value.image} target="_blank">
                  <p>{value.location}</p>
                  </a>
              })}
            </div> */}
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> 
          <div className='results'>
            <div className="locationresult">
                {data.map((value,key) => {
                  return <a className="dataItem" href={value.image} target="_blank">
                    <p>{value.location}</p>
                    </a>
                })}
              </div>
              <div className="typeresult">
                {data.map((value,key) => {
                  return <a className="dataItem" href={value.image} target="_blank">
                    <p>{value.location}</p>
                    </a>
                })}
              </div>
              <div className="priceresult">
                {data.map((value,key) => {
                  return <a className="dataItem" href={value.image} target="_blank">
                    <p>{value.location}</p>
                    </a>
                })}
              </div>
          </div>
          
</>
    ) 
}

export default searchBar