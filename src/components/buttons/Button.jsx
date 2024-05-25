import "./button.scss"
import Image from "next/image"
const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none btn
        	${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : "bg-blue-600 text-white"
          } rounded-full`}
      //   onClick={onbtnClick}
      style={{}}
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
