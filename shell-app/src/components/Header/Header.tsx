// components/LeftNav.tsx
import Link from "next/link";

const Header: React.FC = () => {



  const logMeIn = () =>{
    const event = new CustomEvent('addToCart', { login: true });
    window.dispatchEvent(event);
  }

  return (
    <div className="header">
  
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/contact">Contact</a></div>
        <div> <><button  className="btn btn-primary" onClick={logMeIn}>Login</button></></div>
  </div>
  );
};

export default Header;
