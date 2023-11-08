// import {useEffect} from 'react';
// import './ServiceBtn.css';
const ServiceBtn2 = () => { 
 alert('Hello');
}

export default function ServiceBtn(){
    return(
        <div>
        <div className="section">
          <h1>Services</h1>
          <p>Here you can describe your services.</p>
          <a href="">Learn More</a>
          <button onClick={ServiceBtn2} >Change Oil</button>
          <button>Change Brake Pads</button>
          <button>Change Clutch</button>
        </div>
      </div>
    )
}