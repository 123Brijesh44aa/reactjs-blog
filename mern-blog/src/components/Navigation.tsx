import {Fragment} from 'react'
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react'
import {MenuIcon, XIcon,} from '@heroicons/react/solid'
import {BiSearch} from "react-icons/bi";
import {FaMoon} from "react-icons/fa6";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {toggleTheme} from "@/redux/theme/themeSlice";
import {FaSun} from "react-icons/fa";


const navigation = [
	{name: 'Home', href: '/',},
	{name: 'Project', href: '/projects',},
	{name: 'About', href: '/about',},
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

	const location = useLocation().pathname;
	const {currentUser} = useSelector((state: RootState) => state.user);
	const {theme} = useSelector((state: RootState) => state.theme);

	const dispatch = useDispatch();

	const current = (path: string) => location === path;

	return (
		<>
			<div className="min-h-full">
				<Disclosure as="nav"
				            className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-black">
					{
						({open}) => (
							<>
								<div
									className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
									<div className="flex justify-between h-24">
										<div className="flex">
											<div
												className="flex-shrink-0 flex items-center">
												<img
													className="block lg:hidden h-10 w-auto"
													// src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
													src={'src/assets/images/website-logo-600.svg'}
													alt="brijesh"
												/>
												<img
													className="hidden lg:block h-10 w-auto"
													// src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
													src={'src/assets/images/website-logo-800.svg'}
													alt="brijesh"
												/>
											</div>
											<div
												className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
												{
													navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className={classNames(
																current(item.href)
																	? 'border-indigo-500 text-gray-800 dark:text-gray-200'
																	: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
																'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
															)}
															aria-current={current(item.href)
																? 'page'
																: undefined}
														>
															{item.name}
														</a>
													))
												}
											</div>
										</div>

										{/*Search bar for small screens*/}
										<div className={"sm:hidden content-center"}>
											<input
												type={"search"}
												name={"search"}
												placeholder={"Search here..."}
												className={"px-4 border-none rounded-md bg-gray-100 dark:bg-black dark:ring-1 dark:ring-gray-600 dark:focus:ring-indigo-600 "}
											/>
										</div>

										<div
											className="hidden sm:ml-6 sm:flex sm:items-center">
											{/* Search Bar */}
											<button className={"content-center mr-3"}>
												<BiSearch className={"text-gray-500 text-xl hover:text-gray-600"}/>
											</button>

											<button
												type="button"
												className="bg-white dark:bg-black p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
												onClick={() => dispatch(toggleTheme())}
											>
												<span className="sr-only">View Themes</span>
												{
													theme === "light"
														?
														(
															<FaMoon className="h-6 w-6" aria-hidden="true"/>
														)
														:
														(
															<FaSun className={"h-6 w-6 bg-black"} aria-hidden={"true"}/>
														)
												}
											</button>


											{
												currentUser
													?
													(
														// Profile dropdown
														<Menu as="div"
														      className="ml-3 relative">
															<div>
																<MenuButton
																	className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
																	<span className="sr-only">Open user menu</span>
																	<img
																		className="h-8 w-8 rounded-full"
																		src={currentUser.user.profilePicture}
																		alt=""/>
																</MenuButton>
															</div>
															<Transition
																as={Fragment}
																enter="transition ease-out duration-200"
																enterFrom="transform opacity-0 scale-95"
																enterTo="transform opacity-100 scale-100"
																leave="transition ease-in duration-75"
																leaveFrom="transform opacity-100 scale-100"
																leaveTo="transform opacity-0 scale-95"
															>
																<MenuItems
																	className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">

																	<MenuItem>
																		{({focus}) => (
																			<p
																				className={classNames(
																					focus
																						? 'bg-gray-100'
																						: '',
																					'block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-gray-500',
																				)}
																			>
																				@{currentUser.user.username}
																			</p>
																		)}
																	</MenuItem>

																	<MenuItem>
																		{({focus}) => (
																			<p
																				className={classNames(
																					focus
																						? 'bg-gray-100'
																						: '',
																					'block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-gray-500',
																				)}
																			>
																				{currentUser.user.email}
																			</p>
																		)}
																	</MenuItem>

																	<MenuItem>
																		{({focus}) => (
																			<a
																				href={"/dashboard?tab=profile"}
																				className={classNames(
																					focus
																						? 'bg-gray-100'
																						: '',
																					'block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-gray-500',
																				)}
																			>
																				Profile
																			</a>
																		)}
																	</MenuItem>

																	<MenuItem>
																		{({focus}) => (
																			<p
																				// onClick={handleSignout}
																				className={classNames(
																					focus
																						? 'bg-gray-100'
																						: '',
																					'block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-gray-500',
																				)}
																			>
																				Sign out
																			</p>
																		)}
																	</MenuItem>

																</MenuItems>
															</Transition>
														</Menu>

													)
													:
													(
														// Sign in button
														<Link
															className={"rounded-xl ml-3 px-4 py-2 ring-2 ring-violet-200 hover:bg-gray-50 font-medium focus:ring-violet-600 dark:ring-gray-600 dark:text-gray-500 dark:focus:bg-gray-800"}
															to={"/sign-in"}>
															Sign in
														</Link>
													)
											}

										</div>
										<div
											className="-mr-2 flex items-center sm:hidden">

											{/* Theme Toggle Button in with mobile menu button*/}
											<button
												type="button"
												className="bg-white dark:bg-black p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
												onClick={() => dispatch(toggleTheme())}
											>
												<span className="sr-only">View Themes</span>
												{
													theme === "light"
														?
														(
															<FaMoon className="h-6 w-6" aria-hidden="true"/>
														)
														:
														(
															<FaSun className={"h-6 w-6 bg-black"} aria-hidden={"true"}/>
														)
												}
											</button>

											{/* Mobile menu button */}
											<DisclosureButton
												className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black">
												<span
													className="sr-only">Open main menu</span>
												{open ? (
													<XIcon className="block h-6 w-6 dark:bg-black"
													       aria-hidden="true"/>
												) : (
													<MenuIcon
														className="block h-6 w-6 dark:bg-black"
														aria-hidden="true"/>
												)}
											</DisclosureButton>
										</div>
									</div>
								</div>

								<DisclosurePanel className="sm:hidden">
									<div className="pt-2 pb-3 space-y-1">
										{navigation.map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className={classNames(
													current(item.href)
														? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-600 dark:text-gray-200'
														: 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-300 dark:hover:border-gray-800 hover:text-gray-800',
													'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
												)}
												aria-current={current(item.href)
													? 'page'
													: undefined}
											>
												{item.name}
											</DisclosureButton>
										))}
									</div>

									{
										currentUser
											?
											(
												<div
													className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
													<div className="flex items-center px-4">
														<div className="flex-shrink-0">
															<img
																className="h-10 w-10 rounded-full"
																src={currentUser.user.profilePicture} alt=""/>
														</div>
														<div className="ml-3">
															<div
																className="text-base font-medium text-gray-800 dark:text-gray-300">@{currentUser.user.username}</div>
															<div
																className="text-sm font-medium text-gray-500">{currentUser.user.email}</div>
														</div>
													</div>
													<div className="mt-3 space-y-1">
														<DisclosureButton
															as={"a"}
															href={"/dashboard?tab=profile"}
															className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-400"
														>
															Your Profile
														</DisclosureButton>

														<DisclosureButton
															as={"button"}
															// onClick={handleSignout}
															className="w-full text-start block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-400"
														>
															Sign out
														</DisclosureButton>
													</div>
												</div>
											)
											:
											(
												<>
													<DisclosureButton
														as="a"
														href={"/sign-in"}
														className={classNames(
															current("/sign-in")
																? 'bg-indigo-50 border-indigo-500 text-indigo-700'
																: 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
															'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
														)}
														aria-current={current("/sign-in")
															? 'page'
															: undefined}
													>
														Sign in
													</DisclosureButton>

													<DisclosureButton
														as="a"
														href={"/sign-up"}
														className={classNames(
															current("/sign-up")
																? 'bg-indigo-50 border-indigo-500 text-indigo-700'
																: 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
															'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
														)}
														aria-current={current("/sign-up")
															? 'page'
															: undefined}
													>
														Sign up
													</DisclosureButton>
												</>
											)
									}

								</DisclosurePanel>
							</>
						)}
				</Disclosure>

			</div>
		</>
	)
}
