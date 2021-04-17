import React, { useState } from "react"
import TableRow from "@material-ui/core/TableRow"
import SalesTableCell from "./SalesTableCell"

import useHelpers from "common/hooks/useHelpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import transactionByTypes from "data/transactionByTypesData"

import { faCalculator, faLink } from "@fortawesome/free-solid-svg-icons"
import { Collapse, IconButton, TableCell } from "@material-ui/core"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const SalesTableRowSm = ({
	IdBoldTransaction,
	amountSummary,
	date,
	paymentMethod,
	transactionBy,
	transaction,
}) => {
	const {
		currency,
		formatDate,
		formatCreditCard,
		iconCreditCard,
	} = useHelpers()

	const [open, setOpen] = useState(false)

	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<SalesTableCell>
					<span className="_text-primary font-medium h-full">
						{transactionBy === transactionByTypes.dataphone ? (
							<FontAwesomeIcon icon={faCalculator} className="mr-1" />
						) : (
							<FontAwesomeIcon icon={faLink} className="mr-1" />
						)}
						{transaction}
					</span>
				</SalesTableCell>

				<SalesTableCell>
					<span className="_text-light-gray">{IdBoldTransaction}</span>
				</SalesTableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{
						paddingBottom: 0,
						paddingTop: 0,
					}}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:text-center">
							<span className="_text-light-gray">{formatDate(date)}</span>
							<span className="_text-light-gray flex md:justify-center items-center">
								{iconCreditCard(paymentMethod)}
								{formatCreditCard(paymentMethod)}
							</span>

							<ul className="space-y-2">
								{amountSummary.map(({ value, description }) => (
									<>
										{description && (
											<li className="_text-light-gray">{description}</li>
										)}
										<li
											className={
												value < 0 ? "_text-secondary" : "_text-primary"
											}
										>
											{currency(value)}
										</li>
									</>
								))}
							</ul>
						</div>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}
export default SalesTableRowSm
