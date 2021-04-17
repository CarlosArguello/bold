import React from "react"
import NavBar from "common/components/Navbar"

const BasicLayout = ({ children }) => (
	<>
		<NavBar />
		<main className="_bg-gray min-h-screen">
			<div className="container mx-auto py-12 px-4">{children}</div>
		</main>
	</>
)

export default BasicLayout
