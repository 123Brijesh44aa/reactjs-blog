
/* This example requires Tailwind CSS v2.0+ */


import {navigation} from "@/utils/constants";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-36 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 xl:col-span-1">
						<img
							className="h-10"
							src={'/src/assets/images/website-logo-600-gray.svg'}
							alt="Company name"
						/>
						<p className="text-gray-500 text-base">
							Exploring the Layers of Thought - Unraveling Ideas for a Brighter World.
						</p>
						<div className="flex space-x-6">
							{navigation.social.map((item) => (
								<a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
									<span className="sr-only">{item.name}</span>
									<item.icon className="h-6 w-6" aria-hidden="true" />
								</a>
							))}
						</div>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">ABOUT</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a href={item.href} target={item.name==="brijesh-mourya"?"_blank":""} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">FOLLOW US</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<a href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">LEGAL</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>

						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
					<p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} BrijeshMourya, Inc. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
