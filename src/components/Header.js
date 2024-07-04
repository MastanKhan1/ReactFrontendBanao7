import { Link } from "react-router-dom";
import './header.css';

const Header = ()=>{
    return(
        <>
            <header className="">
                <div className="navbar">
                <div className="navbar-item">
                    <div className="heading">
                        <div>
                            <h1 className="title">M</h1>
                        </div>
                        <div>
                            <h2>hobbyCue</h2>
                            <p>Your Headerobby, Your Community</p>
                        </div>  
                    
                    </div>
                    <div>
                            <input className="search" type="text" placeholder="search"/>
                            <button className="search-btn">search</button>
                    </div>
                </div>

                <div>
                    <div className="grid-item">
                        <select name="Explore" id="" className="select">
                            <option value="">People-Community</option>
                            <option value="">Places-Venues</option>
                            <option value="">Program-Events</option>
                            <option value="">Product-Store</option>
                            <option value="">Blogs</option>
                        </select>
                        <select name="" id="" className="select">
                            <option value="">Hobbies</option>
                            <option value="">Hobbies</option>
                            <option value="">Hobbies</option>
                        </select>
                        <Link className="links">Wish</Link>
                        <Link className="links">Notifications</Link>
                        <Link className="links">Cart</Link>
                        <Link className="links">Account</Link>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Header;