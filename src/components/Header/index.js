// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Headers = () => (
  <nav>
    <Link to="/" className="home-link">
      Home
    </Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Headers
