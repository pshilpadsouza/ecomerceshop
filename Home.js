import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
<div className="divhome">
    
</div>
<div className="home_container">

<img src="https://tse4.mm.bing.net/th?id=OIP.mdKJwxRwCN2eGwRGig4l6wHaEK&pid=Api&P=0&h=180" alt="" className="home_image" />

<div className="home_row">
<Product
id="1111"
title="1 its my first props in reactjs eshop app"
price={11}
rating={3}
image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"  
/>


<Product
id="2222"
title="2 its my first props in reactjs eshop app"
price={11}
rating={3}
image="https://tse1.mm.bing.net/th?id=OIP.-HFgZLxgcAqMFc70qc4BQQHaFf&pid=Api&P=0&h=180"
/>
</div>

<div className="home_row">
<Product
id="3333"
title="3 its my first props in reactjs eshop app"
price={11}
rating={2}
image="https://tse2.mm.bing.net/th?id=OIP.1ZYx_NVuvP5AFCPHMiw5NgHaEW&pid=Api&P=0&h=180"
/>
<Product
id="4444"
title="4 its my first props in reactjs eshop app"
price={11}
rating={2}
image="https://tse1.mm.bing.net/th?id=OIP.nEoXuhgLPOB0GJEJTUkR9wHaDt&pid=Api&P=0&h=180L"
/>

<Product
id="5555"
title="5 its my first props in reactjs eshop app"
price={11}
rating={2}
image="https://tse4.mm.bing.net/th?id=OIP.wdc_Bw8c-UbaZhYJnsWvRwHaD4&pid=Api&P=0&h=180"
/>
</div>

<div className="home_row">

<Product
id="6666"
title="6 its my first props in reactjs eshop app"
price={11}
rating={2}
image="https://tse1.mm.bing.net/th?id=OIP.d3qPKwNTW8i2SlhFLOIitwHaEK&pid=Api&P=0&h=180"
/>
</div>

    </div>
    </div>

  )
}

export default Home