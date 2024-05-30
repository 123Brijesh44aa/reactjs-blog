interface LogoProps {
	width?: string;
	height?: string;
	fill?: string;
}

const Logo = ({
	              width = "3125",
	              height = "769",
	              fill = "#4f46e5",
              }: LogoProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 3125 769" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd"
			      d="M670.143 625C700.542 627.133 730.943 628.2 761.342 628.2C845.076 628.2 908.009 613.533 950.143 584.2C992.809 554.867 1014.14 511.133 1014.14 453C1014.14 424.2 1007.74 398.333 994.943 375.4C982.143 352.467 958.143 334.333 922.943 321C965.609 295.4 986.943 260.467 986.943 216.2C986.943 186.867 980.809 162.333 968.543 142.6C956.809 122.333 940.276 106.067 918.943 93.8C897.609 81.5333 872.009 73 842.143 68.2C812.809 62.8666 780.542 60.2 745.342 60.2C719.209 60.2 690.943 61.5333 660.542 64.2C630.142 66.3333 602.142 69.8 576.542 74.6V612.2C609.076 619.133 640.276 623.4 670.143 625ZM698.143 522.6V379.4H776.542C812.276 379.4 839.742 385 858.943 396.2C878.143 406.867 887.742 425 887.742 450.6C887.742 479.4 876.276 499.133 853.343 509.8C830.409 520.467 800.276 525.8 762.943 525.8C750.143 525.8 738.409 525.533 727.742 525C717.076 524.467 707.209 523.667 698.143 522.6ZM758.943 284.2H698.143V163.4C707.742 162.333 718.676 161.8 730.943 161.8C743.209 161.267 754.676 161 765.342 161C798.409 161 823.476 165.533 840.542 174.6C857.609 183.667 866.143 199.4 866.143 221.8C866.143 243.667 857.876 259.667 841.342 269.8C824.809 279.4 797.343 284.2 758.943 284.2ZM1322.04 297.8C1336.44 300.467 1348.98 303.133 1359.64 305.8L1379.64 207.4C1373.24 204.733 1365.51 202.6 1356.44 201C1347.38 198.867 1338.31 197.267 1329.24 196.2C1320.18 194.6 1311.11 193.533 1302.04 193C1292.98 191.933 1285.24 191.4 1278.84 191.4C1243.11 191.4 1210.58 194.867 1181.24 201.8C1152.44 208.2 1127.38 215.133 1106.04 222.6V621H1225.24V299.4C1230.58 297.8 1238.31 296.467 1248.44 295.4C1259.11 293.8 1268.18 293 1275.64 293C1292.18 293 1307.64 294.6 1322.04 297.8ZM1443.54 621H1562.74V200.2H1443.54V621ZM1552.34 130.6C1566.74 117.8 1573.94 100.467 1573.94 78.6C1573.94 56.7333 1566.74 39.6666 1552.34 27.4C1538.48 14.6 1521.94 8.19997 1502.74 8.19997C1483.54 8.19997 1466.74 14.6 1452.34 27.4C1438.48 39.6666 1431.54 56.7333 1431.54 78.6C1431.54 100.467 1438.48 117.8 1452.34 130.6C1466.74 142.867 1483.54 149 1502.74 149C1521.94 149 1538.48 142.867 1552.34 130.6ZM1602.79 766.6C1617.19 768.2 1628.13 769 1635.59 769C1686.79 769 1725.99 755.667 1753.19 729C1780.39 702.333 1793.99 661.267 1793.99 605.8V200.2H1674.79V602.6C1674.79 623.933 1671.06 640.2 1663.59 651.4C1656.13 662.6 1643.06 668.2 1624.39 668.2C1614.26 668.2 1605.99 667.667 1599.59 666.6C1592.66 665.533 1585.19 663.667 1577.19 661L1561.19 757.8C1573.99 762.067 1587.86 765 1602.79 766.6ZM1783.59 130.6C1797.99 117.8 1805.19 100.467 1805.19 78.6C1805.19 56.7333 1797.99 39.6666 1783.59 27.4C1769.73 14.6 1753.19 8.19997 1733.99 8.19997C1714.79 8.19997 1697.99 14.6 1683.59 27.4C1669.73 39.6666 1662.79 56.7333 1662.79 78.6C1662.79 100.467 1669.73 117.8 1683.59 130.6C1697.99 142.867 1714.79 149 1733.99 149C1753.19 149 1769.73 142.867 1783.59 130.6ZM1902.84 316.2C1891.64 343.933 1886.04 376.467 1886.04 413.8C1886.04 444.733 1890.31 473.533 1898.84 500.2C1907.91 526.867 1921.51 550.067 1939.64 569.8C1958.31 589 1981.51 604.2 2009.24 615.4C2037.51 626.6 2070.58 632.2 2108.44 632.2C2123.38 632.2 2138.31 631.4 2153.24 629.8C2168.18 628.2 2182.04 626.067 2194.84 623.4C2208.18 621.267 2220.18 618.6 2230.84 615.4C2241.51 612.2 2250.04 609 2256.44 605.8L2240.44 509C2227.11 514.867 2209.78 519.933 2188.44 524.2C2167.64 527.933 2146.31 529.8 2124.44 529.8C2090.31 529.8 2063.11 522.6 2042.84 508.2C2022.58 493.8 2011.11 474.333 2008.44 449.8H2278.84C2279.38 443.4 2279.91 436.2 2280.44 428.2C2280.98 419.667 2281.24 411.933 2281.24 405C2281.24 334.067 2263.91 280.467 2229.24 244.2C2194.58 207.4 2147.38 189 2087.64 189C2062.04 189 2036.98 193.8 2012.44 203.4C1988.44 213 1967.11 227.133 1948.44 245.8C1929.78 264.467 1914.58 287.933 1902.84 316.2ZM2160.44 338.6C2163.64 348.2 2165.51 358.067 2166.04 368.2H2008.44C2010.04 358.067 2012.44 348.2 2015.64 338.6C2019.38 328.467 2024.44 319.667 2030.84 312.2C2037.24 304.733 2045.24 298.867 2054.84 294.6C2064.44 289.8 2075.91 287.4 2089.24 287.4C2103.11 287.4 2114.58 289.8 2123.64 294.6C2133.24 299.4 2140.98 305.533 2146.84 313C2153.24 320.467 2157.78 329 2160.44 338.6ZM2540.43 529C2531.36 533.267 2515.9 535.4 2494.03 535.4C2473.23 535.4 2452.16 533.267 2430.83 529C2409.5 524.2 2388.7 517.8 2368.43 509.8L2348.43 606.6C2358.03 610.867 2375.1 616.2 2399.63 622.6C2424.7 629 2455.9 632.2 2493.23 632.2C2550.3 632.2 2594.3 621.533 2625.23 600.2C2656.7 578.867 2672.43 547.4 2672.43 505.8C2672.43 488.2 2670.3 472.733 2666.03 459.4C2662.3 446.067 2655.36 434.067 2645.23 423.4C2635.63 412.2 2622.3 402.067 2605.23 393C2588.16 383.4 2566.56 373.8 2540.43 364.2C2527.63 359.4 2516.96 355.133 2508.43 351.4C2500.43 347.133 2494.03 343.4 2489.23 340.2C2484.43 336.467 2481.23 332.733 2479.63 329C2478.03 325.267 2477.23 321 2477.23 316.2C2477.23 295.4 2495.9 285 2533.23 285C2553.5 285 2571.63 286.867 2587.63 290.6C2604.16 294.333 2619.36 298.6 2633.23 303.4L2654.03 210.6C2640.16 205.267 2621.5 200.467 2598.03 196.2C2574.56 191.4 2550.03 189 2524.43 189C2473.23 189 2432.96 200.467 2403.63 223.4C2374.3 246.333 2359.63 277.533 2359.63 317C2359.63 337.267 2362.56 354.6 2368.43 369C2374.3 383.4 2382.56 395.933 2393.23 406.6C2403.9 416.733 2416.7 425.533 2431.63 433C2447.1 440.467 2464.16 447.667 2482.83 454.6C2506.83 463.667 2524.7 471.933 2536.43 479.4C2548.16 486.333 2554.03 494.6 2554.03 504.2C2554.03 516.467 2549.5 524.733 2540.43 529ZM2761.51 19.4V621H2880.71V301C2888.18 298.867 2896.44 297 2905.51 295.4C2915.11 293.267 2925.24 292.2 2935.91 292.2C2962.58 292.2 2980.71 300.2 2990.31 316.2C3000.44 332.2 3005.51 359.4 3005.51 397.8V621H3124.71V383.4C3124.71 354.6 3121.78 328.467 3115.91 305C3110.58 281.533 3100.98 261.267 3087.11 244.2C3073.78 227.133 3055.64 214.067 3032.71 205C3010.31 195.4 2982.04 190.6 2947.91 190.6C2936.18 190.6 2923.91 191.933 2911.11 194.6C2898.84 196.733 2888.71 199.133 2880.71 201.8V0.199982L2761.51 19.4ZM0 35.7939H101.293V629.872H0V35.7939ZM288.685 323.716C372.599 323.716 440.624 259.262 440.624 179.755C440.624 100.247 372.599 35.7939 288.685 35.7939C204.771 35.7939 136.745 100.247 136.745 179.755C136.745 259.262 204.771 323.716 288.685 323.716ZM288.685 629.872C372.599 629.872 440.624 565.419 440.624 485.911C440.624 406.404 372.599 341.951 288.685 341.951C204.771 341.951 136.745 406.404 136.745 485.911C136.745 565.419 204.771 629.872 288.685 629.872Z"
			      fill={fill}/>
		</svg>

	)
}

export default Logo
