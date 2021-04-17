import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false)
	return (
		<nav className="_gd_primary">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-20">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							onClick={() => setOpenNav(!openNav)}
							className="inline-flex items-center justify-center p-2 rounded-md _text-light focus:outline-none "
						>
							<MenuIcon />
						</button>
					</div>

					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<img
							className="h-8 w-auto"
							src="https://bold.co/assets/img/logo-white-fc9a0f140b.svg"
							alt="Bold logo"
						/>
					</div>

					<div className="hidden sm:block sm:ml-6">
						<div className="flex space-x-4">
							<a
								href="/"
								className="text-white px-3 py-2 rounded-md text-base font-medium"
							>
								Mi negocio
							</a>

							<a
								href="/"
								className="text-white px-3 py-2 rounded-md text-base font-medium"
							>
								Ayuda
								<HelpOutlineIcon className="ml-1" fontSize="small" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{openNav && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1  opacity-2">
						<a
							href="/"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Mi negocio
						</a>

						<a
							href="/"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Ayuda
						</a>
					</div>
				</div>
			)}
		</nav>
	)
}
export default NavBar
