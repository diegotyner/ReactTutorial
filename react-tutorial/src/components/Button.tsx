
interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'dark'; // UNION OPERATOR. Can add more, aligning with bootstrap
    onClick: () => void;
}
const Button = ({children, color="primary", onClick}: ButtonProps) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>{children}</button>
  )
}

export default Button