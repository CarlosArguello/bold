import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import SalesTableRow from "./SalesTableRow"
import SalesTableRowSm from "./SalesTableRowSm"
import SalesTableCell from "./SalesTableCell"

const SalesTable = ({ title, data = [] }) => {
	const screen = window.matchMedia("(max-width: 1000px)")
	return (
		<>
			<div className="_gd_primary py-2 px-5 _text-light text-xl font-medium rounded-t-lg">
				{title}
			</div>
			<TableContainer component={Paper} className="h-96">
				<Table size="medium" stickyHeader={true}>
					<TableHead>
						<TableRow>
							{screen.matches && <TableCell></TableCell>}
							<SalesTableCell>Transacción</SalesTableCell>
							{!screen.matches && (
								<SalesTableCell>Fecha y hora</SalesTableCell>
							)}

							{!screen.matches && (
								<SalesTableCell>Método de pago</SalesTableCell>
							)}
							<SalesTableCell>ID transacción Bold</SalesTableCell>
							{!screen.matches && <SalesTableCell>Monto</SalesTableCell>}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item, index) => (
							<>
								{screen.matches ? (
									<SalesTableRowSm
										{...item}
										key={item.IdBoldTransaction}
									/>
								) : (
									<SalesTableRow {...item} key={item.IdBoldTransaction} />
								)}
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
export default SalesTable
