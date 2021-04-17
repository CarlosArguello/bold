import React from "react"
import TableRow from "@material-ui/core/TableRow"
import SalesTableCell from "./SalesTableCell"

import useHelpers from "common/hooks/useHelpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import transactionByTypes from "data/transactionByTypesData"

import { faCalculator, faLink } from "@fortawesome/free-solid-svg-icons"

const SalesTableRow = ({
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

	return (
		<TableRow>
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
				<span className="_text-light-gray">{formatDate(date)}</span>
			</SalesTableCell>
			<SalesTableCell>
				<span className="_text-light-gray flex items-center">
					{iconCreditCard(paymentMethod)}
					{formatCreditCard(paymentMethod)}
				</span>
			</SalesTableCell>
			<SalesTableCell>
				<span className="_text-light-gray">{IdBoldTransaction}</span>
			</SalesTableCell>
			<SalesTableCell>
				<ul className="space-y-2">
					{amountSummary.map(({ value, description }) => (
						<>
							{description && (
								<li className="_text-light-gray">{description}</li>
							)}
							<li
								className={value < 0 ? "_text-secondary" : "_text-primary"}
							>
								{currency(value)}
							</li>
						</>
					))}
				</ul>
			</SalesTableCell>
		</TableRow>
	)
}
export default SalesTableRow
