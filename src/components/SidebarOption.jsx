import '../styles/SidebarOption.css';

export default function SidebarOption({ Icon, title }) {
  return (
    <div className="sidebar-option">
      <Icon className="sidebar-option-icon" />
      <p className="sidebar-option-title">{title}</p>
    </div>
  )
}
