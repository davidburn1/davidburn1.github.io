import Link from 'next/link'
  
const NavBar = () => (
    // <div className="container-fluid">
<nav className="navbar navbar-expand-sm bg-light navbar-light static-top">
    <Link href="/"><a className='navbar-brand'>David Burn</a></Link>

    <ul className="navbar-nav">
        <li className="nav-item"><Link href="/publications"><a className='nav-link'>Publications</a></Link></li>
        <li className="nav-item"><Link href="/presentations"><a className='nav-link'>Presentations</a></Link></li>
        <li className="nav-item"><Link href="/news"><a className='nav-link'>News</a></Link></li>            
    </ul>
</nav>
// </div>

);
  
export default NavBar;