
import { Fragment } from 'react'
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
import {
	BellIcon,
	MenuIcon,
	XIcon,
} from '@heroicons/react/solid'
import {BiSearch} from "react-icons/bi";
import {FaMoon} from "react-icons/fa6";
import {useLocation} from "react-router-dom";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Project', href: '/projects', current: false },
    { name: 'About', href: '/about', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames (...classes : string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation () {

	const location = useLocation().pathname;

	const current = (path: string) => location === path;

    return (
      <>
          <div className="min-h-full">
              <Disclosure as="nav"
                          className="bg-white border-b border-gray-200">
                  {
                      ({ open }) => (
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
                                                        ? 'border-indigo-500 text-gray-900'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                                                    )}
                                                    aria-current={item.current
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
                                              className={"px-4 border-none rounded-md bg-gray-100"}
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
                                          className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View Themes</span>
                                            <FaMoon className="h-6 w-6"
                                                      aria-hidden="true"/>
                                        </button>

                                        {/* Sign in button*/}
	                                    <button className={"rounded-xl ml-3 px-4 py-2 ring-1 ring-gray-200 hover:bg-gray-50 font-medium"}>
		                                    Sign in
	                                    </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div"
                                              className="ml-3 relative hidden">
                                            <div>
                                                <MenuButton
                                                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                      className="h-8 w-8 rounded-full"
                                                      src={user.imageUrl}
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
                                                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {
                                                        userNavigation.map(
                                                          (item) => {
                                                              return (
                                                                <MenuItem
                                                                  key={item.name}>
                                                                    {({ focus }) => (
                                                                      <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                          focus
                                                                            ? 'bg-gray-100'
                                                                            : '',
                                                                          'block px-4 py-2 text-sm text-gray-700',
                                                                        )}
                                                                      >
                                                                          {item.name}
                                                                      </a>
                                                                    )}
                                                                </MenuItem>
                                                              )
                                                          },
                                                        )
                                                    }
                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <div
                                      className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton
                                          className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span
                                          className="sr-only">Open main menu</span>
                                            {open ? (
                                              <XIcon className="block h-6 w-6"
                                                     aria-hidden="true"/>
                                            ) : (
                                              <MenuIcon
                                                className="block h-6 w-6"
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
                                          item.current
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                                          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                                        )}
                                        aria-current={item.current
                                          ? 'page'
                                          : undefined}
                                      >
                                          {item.name}
                                      </DisclosureButton>
                                    ))}
                                </div>
                                <div
                                  className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4">
                                        <div className="flex-shrink-0">
                                            <img
                                              className="h-10 w-10 rounded-full"
                                              src={user.imageUrl} alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div
                                              className="text-base font-medium text-gray-800">{user.name}</div>
                                            <div
                                              className="text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <button
                                          type="button"
                                          className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6"
                                                      aria-hidden="true"/>
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        {userNavigation.map((item) => (
                                          <DisclosureButton
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                          >
                                              {item.name}
                                          </DisclosureButton>
                                        ))}
                                    </div>
                                </div>
                            </DisclosurePanel>
                        </>
                      )}
              </Disclosure>

          </div>
      </>
    )
}
