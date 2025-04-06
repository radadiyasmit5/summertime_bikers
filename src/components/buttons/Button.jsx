import "./button.scss"
import Image from "next/image"

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, onClick}) => {
  return (
    <button
      className={`btn flex justify-center items-center gap-2 font-montserrat leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ''}`}
      onClick={onClick}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="ArrowRightIcon"
          className="ml-2 rounded-full bg-white w-5 h-3"
        />
      )}
    </button>
  )
}

export default Button
