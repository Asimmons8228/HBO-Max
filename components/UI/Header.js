const Header = (props) =>{
    return(
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="fas fa-bars"/>
                </div>
                <div className="top-header__search-btn">
                    <i className="fas fa-search" />
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img className="top-header__user-img" src="https://mighty.tools/mockmind-api/content/human/46.jpg" width={60}/>
                <div className="top-header__user-name">Rajiv</div>
            </div>
        </header>
    )
}

export default Header;