import moment from "moment"
import "moment/locale/es"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCcMastercard,
	faCcVisa,
} from "@fortawesome/free-brands-svg-icons"

const useHelpers = () => {
	moment.locale("es")

	return {
		formatDate(date, formatDate = "YYYY-MM-DD HH:mm:ss") {
			return moment(date).format(formatDate)
		},
		getMonthName(date = moment()) {
			return date.format("MMMM")
		},
		getYear() {
			return moment().format("YYYY")
		},
		currency(value) {
			return new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(value)
		},

		iconCreditCard(numberCard) {
			switch (numberCard.charAt()) {
				case "4":
					return (
						<FontAwesomeIcon
							className="_text-primary mr-2 text-xl"
							icon={faCcVisa}
						/>
					)
				default:
					return (
						<FontAwesomeIcon
							className="_text-secondary mr-2 text-xl"
							icon={faCcMastercard}
						/>
					)
			}
		},

		formatCreditCard(numberCard) {
			const privateDigits = numberCard
					.substr(0, numberCard.length - 4)
					.replace(/[0-9]/g, "*")
					.replace(/-/gi, " "),
				publicDigits = numberCard.substr(
					numberCard.length - 4,
					numberCard.length
				)

			return privateDigits + publicDigits
		},
	}
}

export default useHelpers
