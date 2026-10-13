import React, { useEffect, useState } from 'react'

function FetchProducts() {
  
    const[data, setData] = useState([]);
    useEffect(()=>{
  async function fetchData(){
            try{
            const res = await fetch('https://dummyjson.com/products');
            const jsonData = await res.json();
            setData(jsonData.products);
            console.log(jsonData.products);
            }
            catch(error){
                console.log(error);
            }
            finally{
                console.log("Fetch Products");
            }

        }
        fetchData();
    },[])

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'5px'}}>
        {/* <h2>{JSON.stringify(data)}</h2> */}

        {
            data.map(ele=>(
                
                <div style={ {border:'3px solid blue', margin:'15px', padding:'5px', backgroundColor:'#FFFAB5'}}>

                <img src={ele.images} width="100px" height="100px" padding="10px"/>
                <h2>{ele.id}</h2>
                <h2>{ele.title}</h2>
                <h2>{ele.rating}</h2>
                <h2>{ele.price}</h2>
                <button >Add To Cart</button>
                <button>Buy Now</button>
                </div>

                
            ))
        }
    </div>
  )
}

export default FetchProducts

// useEffect => calls very time 
// 1. mount -> 2. update -> 3. unmount