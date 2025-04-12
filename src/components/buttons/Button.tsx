import React from 'react';

interface ButtonProps {
  label: string;
  iconURL?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
  borderColor?: string | null;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconURL = null,
  backgroundColor = null,
  textColor = null,
  borderColor = null,
  onClick = () => {}
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || 'transparent',
    color: textColor || '#000',
    border: borderColor ? `1px solid ${borderColor}` : 'none'
  };

  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full"
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button; 