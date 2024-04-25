const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        	${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-blue-600 text-white border-black"} rounded-full`}
		>
			{label}
			{iconURL && <img src={iconURL} alt="ArrowRightIcon" className="ml-2 rounded-full bg-white w-5 h-5" />}
		</button>
	)
}

export default Button
