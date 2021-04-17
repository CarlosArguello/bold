import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons"
import Checkbox from "common/components/inputs/Checkbox"
import Button from "common/components/inputs/Button"

import transactionByTypes from "data/transactionByTypesData"

const SalesFilter = ({ handleFilter }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [activeFilter, setActiveFilter] = useState(false)

	const Filter = () => (
		<div className="relative">
			<div className="absolute top-0 right-0 z-30">
				<FontAwesomeIcon
					icon={faTimes}
					onClick={() => setOpenFilter(false)}
					className="_text-primary m-4 cursor-pointer"
				/>
			</div>

			<div className="p-4 absolute right-0 _bg-light rounded-lg z-20 shadow-md">
				<h3 className="text-center text-sm _text-primary mb-3">FILTRAR</h3>

				<Checkbox
					value={transactionByTypes.dataphone}
					checked={activeFilter === transactionByTypes.dataphone}
					onClick={({ target }) => setActiveFilter(target.value)}
				>
					Cobro con datáfono
				</Checkbox>

				<Checkbox
					value={transactionByTypes.link}
					checked={activeFilter === transactionByTypes.link}
					onClick={({ target }) => setActiveFilter(target.value)}
				>
					Cobros con link de pago
				</Checkbox>

				<Checkbox
					value=""
					checked={activeFilter === ""}
					onClick={({ target }) => setActiveFilter(target.value)}
				>
					Ver todos
				</Checkbox>

				<div className="flex justify-center mt-3">
					<Button
						rounded="full"
						fontWeight="bold"
						color="secondary"
						onClick={() => handleFilter(activeFilter)}
					>
						Aplicar
					</Button>
				</div>
			</div>
		</div>
	)

	return (
		<>
			{!openFilter && (
				<Button rounded="lg" onClick={() => setOpenFilter(true)}>
					FILTRAR <FontAwesomeIcon icon={faFilter} className="ml-2" />
				</Button>
			)}
			{openFilter && <Filter />}
		</>
	)
}

export default SalesFilter
