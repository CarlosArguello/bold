import React from "react"
import { Checkbox, FormControlLabel } from "@material-ui/core"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import CheckBoxIcon from "@material-ui/icons/CheckBox"

const CustomCheckbox = ({ children, ...props }) => (
	<FormControlLabel
		className="_text-primary font-medium whitespace-nowrap"
		control={
			<Checkbox
				{...props}
				icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
				checkedIcon={
					<CheckBoxIcon className="_text-primary" fontSize="small" />
				}
			/>
		}
		label={<strong className="font-medium">{children}</strong>}
	/>
)

export default CustomCheckbox
