import '../styles/InputOption.css';

export default function InputOption({ Icon, title, color }) {
  return (
    <div className="input-option">
      <Icon className="input-option-icon" style={{ color: color }} />
      <h4 className="input-option-title">{title}</h4>
    </div>
  )
}
