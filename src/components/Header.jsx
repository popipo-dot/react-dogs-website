import Nav from "./Nav"


function Header () {
    return ( 
            <header>
                    <div className="header_logo">
                        <img src="img/paw-logo.png" alt="" />
                        <h2>Pawsome Dogs</h2>
                    </div>
                    <Nav />
            </header>
    )
}

export default Header