import { ButtonProps } from "./button.types";
import clsx from 'clsx';


const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    fullWidth = false,
    className = '',
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(fullWidth && 'w-full', className)}
      >
        {children}
      </button>
    );
  };
  export default Button
  