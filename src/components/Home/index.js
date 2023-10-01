// Write your JS code here
import './index.css'
import Headers from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="home-container">
    <Headers />
    <h1 className="Home-route-heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
