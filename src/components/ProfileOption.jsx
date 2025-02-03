import '../styles/ProfileOption.css';

export default function ProfileOption({ title, options }) {
  return (
    <div className="profile-option">
      <h2>{title}</h2>
      {options.map((option, index) => (
        <h4 key={index}>{option}</h4>
      ))}
    </div>
  )
}
