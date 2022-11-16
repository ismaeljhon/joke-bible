import './button.scss'

const Button = ({ label, type, to = '#', className = '', styles = {}, onClick }) => {
  return (
    <button to={to} className={`btn ${type} ${className}`} style={styles} onClick={onClick}>{label}</button>
  )
}


export default Button