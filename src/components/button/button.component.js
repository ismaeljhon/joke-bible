import { Link } from "react-router-dom"
import './button.scss'

const Button = ({ label, type, to = '#', className = '', styles = {} }) => {
  return (
    <Link to={to} className={`btn ${type} ${className}`} style={styles}>{label}</Link>
  )
}


export default Button