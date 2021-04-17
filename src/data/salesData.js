import faker from "faker"
import rand from "random-key"
import moment from "moment"

import transactionTypes from "data/transactionTypes"
import transactionByTypes from "data/transactionByTypesData"

const generateSales = (n) =>
	Array.from({ length: n }).map(() => {
		const amountValue = faker.finance.amount(100, 9999, 2)
		return {
			IdBoldTransaction: rand.generateBase30(13),
			paymentMethod: faker.finance.creditCardNumber(),
			date: faker.date.between(moment().subtract(1, "months"), moment()),
			transactionBy: faker.helpers.randomize(
				Object.values(transactionByTypes)
			),
			transaction: faker.helpers.randomize(
				Object.values(transactionTypes)
			),
			get amountSummary() {
				const amount = [{ value: amountValue }]
				if (this.transaction === transactionTypes.success) {
					amount.push({
						description: "Deducción Bold",
						value: ((amountValue * 15) / 100).toFixed(2) * -1,
					})
				}
				return amount
			},
		}
	})

export default generateSales
