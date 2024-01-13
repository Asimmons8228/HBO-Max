const SideNav = (props) =>{
    return(
        <div className="side-nav">
           <div className="side-nav__close-btn">
                <i className="fas fa-times"/>
            </div> 
            <ul className="side-nav__main">
                <li>
                    <a href="/" className="active">Home</a>
                </li>
                <li>
                    <a href="/" className="active">Series</a>
                </li>
                <li>
                    <a href="/" className="active">Movies</a>
                </li>
                <li>
                    <a href="/" className="active">Originals</a>
                </li>
                <li>
                    <a href="/" className="active">Just Added</a>
                </li>
                <li>
                    <a href="/" className="active">Last Chance</a>
                </li>
                <li>
                    <a href="/" className="active">Coming Soon</a>
                </li>
            </ul>
            <div className="side-nav__divider"></div>
            <ul className="side-nav__main">
                <li>
                    <a href="/" className="active">Action</a>
                </li>
                <li>
                    <a href="/" className="active">Animation</a>
                </li>
                <li>
                    <a href="/" className="active">Comedy</a>
                </li>
                <li>
                    <a href="/" className="active">Crime</a>
                </li>
                <li>
                    <a href="/" className="active">Doocumentaries</a>
                </li>
                <li>
                    <a href="/" className="active">Drama</a>
                </li>
                <li>
                    <a href="/" className="active">Fantasy & Sci-fi</a>
                </li>
                <li>
                    <a href="/" className="active">Horror</a>
                </li>
                <li>
                    <a href="/" className="active">International</a>
                </li>
                <li>
                    <a href="/" className="active">Kids & Family</a>
                </li>
                <li>
                    <a href="/" className="active">Latino</a>
                </li>
                <li>
                    <a href="/" className="active">Music</a>
                </li>
                <li>
                    <a href="/" className="active">News/Talk</a>
                </li>
                <li>
                    <a href="/" className="active">Reality</a>
                </li>
                <li>
                    <a href="/" className="active">Romance</a>
                </li>
                <li>
                    <a href="/" className="active">Shorts</a>
                </li>
                <li>
                    <a href="/" className="active">Sports</a>
                </li>
                <li>
                    <a href="/" className="active">Suspence</a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;