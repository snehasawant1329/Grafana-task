import React from 'react';
import './page.css';
import Img from './image_processing20200420-1113-u2vttf.gif';
function Page()
{
    return(
        <div class="wrapper">
            <h2>Oops! Page not found.</h2>
            <div>
                <img src={Img}/>
            </div>
            <h4>We can't find the page you're looking for.</h4>
            <button type="button" class="main-btn">GO BACK HOME</button>
            
        </div>
        
    );
}

export default Page;