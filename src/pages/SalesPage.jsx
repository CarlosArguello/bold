import React from "react"

import BasicLayout from "common/layouts/basicLayout"
import Card from "common/components/Card"
import SalesTable from "components/SalesTable/index"
import SalesFilter from "components/SalesFilter"
import SalesDateTab from "components/SalesDateTab"

import useSales from "common/hooks/useSales"
import useHelpers from "common/hooks/useHelpers"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faInfoCircle, faFilter } from "@fortawesome/free-solid-svg-icons"

const HomePage = () => {
	const {
		totalPayment,
		filteredSales,
		setActiveFilterByDate,
		setActiveFilterByTransaction,
	} = useSales()
	const { currency, getMonthName, getYear } = useHelpers()

	return (
		<BasicLayout>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8">
				<Card title={"Total de ventas"}>
					<p className="text-center text-xs md:text-sm _text-primary capitalize">
						<strong className="block text-3xl mb-1 _text_gd_secondary">
							{currency(totalPayment)}
						</strong>{" "}
						{getMonthName()} {getYear()}
					</p>
				</Card>
				<div className="col-span-2">
					<SalesDateTab handleDate={setActiveFilterByDate} />
					<div className="float-right mt-4">
						<SalesFilter handleFilter={setActiveFilterByTransaction} />
					</div>
				</div>
			</div>
			<div className="py-12">
				<SalesTable
					title={`Tus ventas de ${getMonthName()}`}
					data={filteredSales}
				/>
			</div>
		</BasicLayout>
	)
}
export default HomePage
