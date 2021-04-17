import React from "react"

const GroupTabs = ({ value = 0, handleTab, tabs = [] }) => (
	<div className="_bg-light flex p-1 space-x-3">
		{tabs.map((tab, index) => (
			<button
				onClick={() => handleTab(index)}
				className={`flex-grow flex-shrink w-32 rounded-full py-2 text-xs sm:text-sm md:text-base capitalize font-semibold _text-primary outline-none ${
					value === index ? "_bg-gray" : "hover:bg-gray-100"
				}`}
				key={index}
			>
				{tab}
			</button>
		))}
	</div>
)

export default GroupTabs
