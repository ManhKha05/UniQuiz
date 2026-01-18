import "./button.scss"

function Button (props) {
  const { text, link } = props;
  return (
    <>
      <a href={link} className="button">
        {text}
      </a>
    </>
  )
}

export default Button;