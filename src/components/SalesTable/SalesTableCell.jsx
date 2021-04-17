import React from "react"
import { TableCell } from "@material-ui/core"

const SalesTableCell = ({ children, ...props }) => (
	<TableCell
		className="px-6 py-4 text-sm _text-dark-gray"
		style={{ verticalAlign: "top" }}
		{...props}
	>
		{children}
	</TableCell>
)

export default SalesTableCell
