import logo from '../../images/valinups.png'

export const Navbar = () => {
  return (
    <header>
          <a href="#" className='a-logo'><img src={logo} alt="HOME" className='logo'/></a> 

            <ul className="navbar">
              <li><a href="/lineups" className="active"><span>LINEUPS</span></a></li>
              <li><a href="/ranking" className="active"><span>RANKING</span></a></li>
            </ul>

          <div className="main">
              <a href="/register" className="active" id='reg'>Register</a>
              <a href="/login" className="active" id='user'>Login</a> 
          </div>
    </header>
  )
}
