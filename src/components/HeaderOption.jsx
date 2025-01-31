import '../styles/HeaderOption.css';

export default function HeaderOption({ Icon, title }) {
  return (
    <nav className="header-option">
      <Icon className="header-option-icon" />
      <h3 className="header-option-title">{title}</h3>
    </nav>
  )
}
