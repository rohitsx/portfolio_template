<script lang="ts">
	import type { Items } from "$lib/types/DynamicScrolltype";
	import DynamicScroll from "./DynamicScroll.svelte";

	const items: Items[] = [
		{
			id: 1,
			name: "Squadx",
			description: "Omegle-like real-time video chat with multi-peer WebRTC.",
			imageUrl: "https://img.youtube.com/vi/vMq3I2Ey6Uc/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/SquadX",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=vMq3I2Ey6Uc",
		},
		{
			id: 2,
			name: "callroom",
			description: "Lightweight video call app built with PHP & Ratchet.",
			imageUrl: "https://img.youtube.com/vi/zQv_ktDfduM/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/callRoom",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=zQv_ktDfduM",
		},
		{
			id: 3,
			name: "OmegleClone",
			description: "Real-time video chat app inspired by Omegle.",
			imageUrl: "https://img.youtube.com/vi/YTGfyUdhu-U/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/omegleClone",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=YTGfyUdhu-U",
		},
		{
			id: 4,
			name: "aiMovieChatbot",
			description: "Multi-level REST API for semantic search & AI responses.",
			imageUrl: "https://img.youtube.com/vi/k1eMtm2ISLg/0.jpg",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/aiMovieChatbot",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=k1eMtm2ISLg",
		},
		{
			id: 5,
			name: "Telegram bot",
			description: "Simple Telegram bot",
			imageUrl: "https://img.youtube.com/vi/Cu8M1_eS4kA/0.jpg",
			buttonText: "Demo",
			buttonUrl: "https://www.youtube.com/watch?v=Cu8M1_eS4kA",
		},
		{
			id: 6,
			name: "web3-wallet",
			description: "Simple Web3 wallet for Solana and Ethereum.",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748191684/2025-05-25_22-17_ag1rf4.png",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/web3-wallet",
			buttonText2: "Demo",
			buttonUrl2: "https://www.youtube.com/watch?v=yG8irvUutdI",
		},
		{
			id: 7,
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
			id: 8,
			name: "ycScaper",
			description: "Python tool to scrape YC company data.",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1024px-Y_Combinator_logo.svg.png",
			buttonText: "Github",
			buttonUrl: "https://github.com/rohitsx/ycScaper",
		},
	];
</script>

<DynamicScroll {items} title="Side Project" />
