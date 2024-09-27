import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
          
          <nav>
            <span> my website</span>
         <Link to="/">Home</Link>
         <Link to="/users">Users</Link>
         {/* <NavLink to="/posts">Posts</NavLink> */}
         <NavLink to="/posts">posts</NavLink>
         {/* <Link to="/posts">Posts</Link> */}
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            </nav> 
        </div>
    );
};

export default Header;