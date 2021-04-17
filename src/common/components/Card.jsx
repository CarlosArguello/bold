import React from "react"

const Card = ({ title, children }) => (
	<div className="rounded-md shadow-md _bg-light overflow-hidden">
		<div className="title _text-light text-sm md:text-base font-semibold _gd_secondary p-4">
			{title}
		</div>
		<div className="body  py-4 md:py-8 px-4">{children}</div>
	</div>
)

export default Card
