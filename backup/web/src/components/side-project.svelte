<script lang="ts">
	import ProductTemplete from "./product-templete.svelte";
	import { type Product } from "$lib/types/product-type";

	const products: Product[] = [
		{
			id: 1,
			name: "callroom",
			description:
				"A lightweight, peer-to-peer video and audio calling application built with PHP, JavaScript (WebRTC), Ratchet (WebSockets), and MySQL, all containerized with Docker.",
			imageUrl: "https://img.youtube.com/vi/zQv_ktDfduM/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/callRoom",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=zQv_ktDfduM",
		},
		{
			id: 2,
			name: "OmegleClone",
			description:
				"OmegleMeet is a real-time video chat app inspired by Omegle. It allows users to connect with strangers for live video calls and text chats.",
			imageUrl: "https://img.youtube.com/vi/YTGfyUdhu-U/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/omegleClone",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=YTGfyUdhu-U",
		},
		{
			id: 3,
			name: "aiMovieChatbot",
			description:
				"aiMovieChatbot is a multi-level REST API chatbot that allows users to interact with movie characters, retrieve movie scripts, and perform semantic searches using advanced AI techniques.",
			imageUrl: "https://img.youtube.com/vi/k1eMtm2ISLg/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/aiMovieChatbot",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=k1eMtm2ISLg",
		},
		{
			id: 4,
			name: "Telegram bot",
			description: "Simple Telegram bot",
			imageUrl: "https://img.youtube.com/vi/k1eMtm2ISLg/0.jpg",
			buttonText: "Demo",
			buttonUrl: "https://www.youtube.com/watch?v=Cu8M1_eS4kA",
		},
		{
			id: 5,
			name: "web3-wallet",
			description:
				"A simple, user-friendly cryptocurrency wallet application supporting Solana and Ethereum blockchains.",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748191684/2025-05-25_22-17_ag1rf4.png",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/web3-wallet",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=yG8irvUutdI",
		},
		{
			id: 6,
			name: "WebRTC",
			description: "WebRTC perfect negotiation logic.",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/6/68/WebRTC_Logo.svg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/webRTC",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=DlcM5WlSlDs",
		},
		{
			id: 7,
			name: "ycScaper",
			description:
				"A Python-based tool to scrape Y Combinator company data, including startup URLs and social media links.",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1024px-Y_Combinator_logo.svg.png",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/ycScaper",
		},
	];
</script>

<ProductTemplete {products} title="Side Project" />
