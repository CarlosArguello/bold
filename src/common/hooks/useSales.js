import moment from "moment"
import { useState, useEffect } from "react"
import generateSales from "data/salesData"

const useSales = () => {
	const [sales, setSales] = useState([])
	const [filteredSales, setFilteredSales] = useState([])

	const [activeFilterByDate, setActiveFilterByDate] = useState("")
	const [
		activeFilterByTransaction,
		setActiveFilterByTransaction,
	] = useState("")

	const currentDate = moment()

	const [totalPayment, setTotalPayment] = useState(0)

	useEffect(() => {
		const sales = generateSales(80)
		setSales(sales)
	}, [])

	useEffect(() => {
		setTotalPayment(totalPaymentSales())
		// eslint-disable-next-line
	}, [filteredSales])

	useEffect(() => {
		const filteredByDate = filterByDate(sales, activeFilterByDate)
		const filteredByTransaction = filterByTransaction(
			filteredByDate,
			activeFilterByTransaction
		)

		setFilteredSales(filteredByTransaction)
		// eslint-disable-next-line
	}, [activeFilterByTransaction, activeFilterByDate])

	const filterByDate = (scopeSales, byDate) =>
		scopeSales.filter(({ date }) =>
			moment(currentDate).isSame(date, byDate)
		)

	const filterByTransaction = (scopeSales, transaction) =>
		scopeSales.filter(({ transactionBy }) =>
			transactionBy.includes(transaction)
		)

	//TRAER EL VALOR TOTAL DE LAS VENTAS
	const totalPaymentSales = () => {
		return filteredSales.reduce((accumulator, { amountSummary }) => {
			return (
				accumulator +
				amountSummary.reduce(
					({ value: valueA = 0 }, { value: valueB = 0 }) => {
						return parseInt(valueA) + parseInt(valueB)
					},
					0
				)
			)
		}, 0)
	}

	return {
		totalPayment,
		filteredSales,
		setActiveFilterByDate,
		setActiveFilterByTransaction,
	}
}

export default useSales
