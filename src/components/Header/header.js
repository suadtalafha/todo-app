import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import "./header.css"







class Header extends React.Component {
  render() {
 
    return(
     
      <>
         
         <header>

<nav>

    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">connect with us</a></li>
    </ul>
</nav>
</header>
      </>
    );
  }
}

export default (Header) ;