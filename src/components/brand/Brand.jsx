
import'./brand.css';
import { google,slack, atlassian,dropbox,shopify} from "./import";
import React from 'react'

const Brand = () => {
  return (

 <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="img1" />
    </div>
    <div>
      <img src={slack} alt="img2" />
    </div>
    <div>
      <img src={atlassian} alt="img3" />
    </div>
    <div>
      <img src={dropbox} alt="img4" />
    </div>
    <div>
      <img src={shopify} alt="img5" />
    </div>
  </div>
  )
}

export default Brand