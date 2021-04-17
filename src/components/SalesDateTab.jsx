import React, { useEffect, useState } from "react"
import GroupTabs from "common/components/GroupTabs"
import useHelpers from "common/hooks/useHelpers"

const SalesDateTab = ({ handleDate }) => {
	const { getMonthName } = useHelpers()
	const [activeTab, setActiveTab] = useState(0)
	const handleTab = (tab) => {
		setActiveTab(tab)
	}

	useEffect(() => {
		handleDate(dateSales[activeTab].filter)
	}, [activeTab])

	const dateSales = [
		{
			label: "Hoy",
			filter: "day",
		},
		{
			label: "Esta semana",
			filter: "week",
		},
		{
			label: getMonthName(),
			filter: "month",
		},
	]

	return (
		<GroupTabs
			value={activeTab}
			handleTab={handleTab}
			tabs={dateSales.map(({ label }) => label)}
		/>
	)
}

export default SalesDateTab
