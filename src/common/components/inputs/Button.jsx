import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Button = ({
	children,
	color = "light",
	rounded = "md",
	fontWeight = "medium",
	...props
}) => {
	const [backgroundClass, setBackgroundClass] = useState("")
	const [colorClass, setColorClass] = useState("")

	useEffect(() => {
		switch (color) {
			case "primary":
				setBackgroundClass("_bg-primary")
				setColorClass("_text-light")
				break

			case "secondary":
				setBackgroundClass("_bg-secondary")
				setColorClass("_text-light")
				break

			default:
				setBackgroundClass("_bg-light")
				setColorClass("_text-primary")
				break
		}
	}, [color])

	return (
		<button
			className={`px-8 md:px-12 py-2 md:py-3 rounded-${rounded} font-${fontWeight} text-xs md:text-sm ${backgroundClass} ${colorClass}`}
			{...props}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	color: PropTypes.oneOf("primary", "secondary", "light"),
	rounded: PropTypes.oneOf("md", "lg", "full"),
	fontWeight: PropTypes.oneOf(
		"thin",
		"extralight",
		"light",
		"normal",
		"medium",
		"semibold",
		"bold",
		"extrabold",
		"black"
	),
}

export default Button
