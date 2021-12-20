import {FiInstagram} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <h1 className="logo">
        COVID19<span className="india">INDIA</span>
      </h1>
      <p className="tagline">
        We stand with everyone fighting on the front lines
      </p>
      <div className="icon-container">
        <VscGithubAlt className="icon" />
        <FiInstagram className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  )
}
