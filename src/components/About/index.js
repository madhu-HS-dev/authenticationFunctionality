// Write your JS code here
import './index.css'
import Headers from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div className="about-container">
    <Headers />
    <h1 className="about-route-heading">About Route</h1>
    <LogoutButton />
  </div>
)

export default About
