import { ProductInterface } from '@/models'

const getProductsMock = (): ProductInterface[] => {
	let products = [
		{
			description: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
			price: 109.95,
			urlImage: '/images/Products/imagen_1.jpg',
			shipment: 'Envío gratis',
			previusPrice: 120,
			discount: '10% OFF',
		},
		{
			description: 'Mens Casual Premium Slim Fit T-Shirts',
			price: 22.3,
			urlImage: 'assets/imagesMock/imagen_2.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'Mens Cotton Jacket',
			price: 55.99,
			urlImage: '/images/Products/imagen_3.jpg',
			shipment: 'Envío gratis',
			previusPrice: 65.99,
			discount: '15% OFF',
		},
		{
			description: 'Mens Casual Slim Fit',
			price: 15.99,
			urlImage: '/images/Products/imagen_4.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
			price: 695,
			urlImage: '/images/Products/imagen_5.jpg',
			shipment: 'Envío gratis',
			previusPrice: 750,
			discount: '7% OFF',
		},
		{
			description: 'Solid Gold Petite Micropave',
			price: 168,
			urlImage: '/images/Products/imagen_6.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'White Gold Plated Princess',
			price: 9.99,
			urlImage: '/images/Products/imagen_7.jpg',
			shipment: 'Envío gratis',
			previusPrice: 12.99,
			discount: '23% OFF',
		},
		{
			description: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
			price: 10.99,
			urlImage: '/images/Products/imagen_8.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
			price: 64,
			urlImage: '/images/Products/imagen_9.jpg',
			shipment: 'Envío gratis',
			previusPrice: 79.99,
			discount: '20% OFF',
		},
		{
			description: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
			price: 109,
			urlImage: '/images/Products/imagen_10.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
			price: 109,
			urlImage: '/images/Products/imagen_11.jpg',
			shipment: 'Envío gratis',
			previusPrice: 129.99,
			discount: '16% OFF',
		},
		{
			description:
				'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
			price: 114,
			urlImage: '/images/Products/imagen_12.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
			price: 599,
			urlImage: '/images/Products/imagen_13.jpg',
			shipment: 'Envío gratis',
			previusPrice: 649.99,
			discount: '8% OFF',
		},
		{
			description:
				'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
			price: 999.99,
			urlImage: '/images/Products/imagen_14.jpg',
			shipment: 'Envío gratis',
			previusPrice: 1199.99,
			discount: '17% OFF',
		},
		{
			description: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
			price: 56.99,
			urlImage: '/images/Products/imagen_15.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
			price: 29.95,
			urlImage: '/images/Products/imagen_16.jpg',
			shipment: 'Envío gratis',
			previusPrice: 39.99,
			discount: '25% OFF',
		},
		{
			description: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
			price: 39.99,
			urlImage: '/images/Products/imagen_17.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: "MBJ Women's Solid Short Sleeve Boat Neck V",
			price: 9.85,
			urlImage: '/images/Products/imagen_18.jpg',
			shipment: 'Envío gratis',
			previusPrice: 12.99,
			discount: '24% OFF',
		},
		{
			description: "Opna Women's Short Sleeve Moisture",
			price: 7.95,
			urlImage: '/images/Products/imagen_19.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'DANVOUY Womens T Shirt Casual Cotton Short',
			price: 12.99,
			urlImage: '/images/Products/imagen_20.jpg',
			shipment: 'Envío gratis',
			previusPrice: 16.99,
			discount: '23% OFF',
		},
		{
			description:
				'Sony WH-1000XM4 Wireless Noise-Cancelling Over-Ear Headphones',
			price: 349.99,
			urlImage: '/images/Products/imagen_21.jpg',
			shipment: 'Envío gratis',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				'Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band',
			price: 399,
			urlImage: '/images/Products/imagen_22.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				'Nintendo Switch Console with Neon Blue and Neon Red Joy‑Con',
			price: 299,
			urlImage: '/images/Products/imagen_23.jpg',
			shipment: 'Envío gratis',
			previusPrice: 349.99,
			discount: '14% OFF',
		},
		{
			description:
				'Canon EOS M50 Mirrorless Vlogging Camera Kit with EF-M 15-45mm Lens, Black',
			price: 649,
			urlImage: '/images/Products/imagen_24.jpg',
			shipment: 'Envío gratis',
			previusPrice: 799,
			discount: '19% OFF',
		},
		{
			description: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones',
			price: 299,
			urlImage: '/images/Products/imagen_25.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description:
				'LG 27GN950-B 27 Inch UHD (3840 x 2160) Nano IPS Display Ultragear Gaming Monitor',
			price: 1296.99,
			urlImage: '/images/Products/imagen_26.jpg',
			shipment: 'Envío gratis',
			previusPrice: 1499.99,
			discount: '13% OFF',
		},
		{
			description:
				'Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone',
			price: 1199.99,
			urlImage: '/images/Products/imagen_27.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'Dell XPS 15 9500 15.6 inch UHD+ Touchscreen Laptop',
			price: 1899,
			urlImage: '/images/Products/imagen_28.jpg',
			shipment: 'Envío gratis',
			previusPrice: 2099,
			discount: '10% OFF',
		},
		{
			description: 'Samsung 65-Inch Class QLED Q80A Series',
			price: 1397.99,
			urlImage: '/images/Products/imagen_29.jpg',
			shipment: 'Mismo precio en 9 cuotas',
			previusPrice: null,
			discount: null,
		},
		{
			description: 'Logitech G502 Hero High Performance Gaming Mouse',
			price: 39.99,
			urlImage: '/images/Products/imagen_30.jpg',
			shipment: 'Envío gratis',
			previusPrice: 79.99,
			discount: '50% OFF',
		},
	]

	return products
}

export default getProductsMock
