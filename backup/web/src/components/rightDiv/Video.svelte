<script lang="ts">
	import type { Items } from "$lib/types/DynamicScroll.type";
	import DynamicScroll from "./DynamicScroll.svelte";

	const videos: Items[] = [
		{
			id: "Lzt1Y1uFdLU",
			description:
				"stremSync Proof of Concept | Integrates voice with super chats",
			imageUrl: "https://img.youtube.com/vi/Lzt1Y1uFdLU/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=Lzt1Y1uFdLU",
		},
		{
			id: "vMq3I2Ey6Uc",
			description: "SquadX demo | WebRTC Multiple Peer Connection",
			imageUrl: "https://img.youtube.com/vi/vMq3I2Ey6Uc/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=vMq3I2Ey6Uc",
		},
		{
			id: "zQv_ktDfduM",
			description: "callRoom - Simple WebRTC Video Calling App",
			imageUrl: "https://img.youtube.com/vi/zQv_ktDfduM/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=zQv_ktDfduM",
		},
		{
			id: "Cu8M1_eS4kA",
			description: "Telegram bot",
			imageUrl: "https://img.youtube.com/vi/Cu8M1_eS4kA/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=Cu8M1_eS4kA",
		},
		{
			id: "k1eMtm2ISLg",
			description: "aiMovieChatbot",
			imageUrl: "https://img.youtube.com/vi/k1eMtm2ISLg/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=k1eMtm2ISLg",
		},
		{
			id: "yG8irvUutdI",
			description: "Multi-Chain Crypto Wallet",
			imageUrl: "https://img.youtube.com/vi/yG8irvUutdI/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=yG8irvUutdI",
		},
		{
			id: "YTGfyUdhu-U",
			description: "omegle clone demo | Real-time video chat app",
			imageUrl: "https://img.youtube.com/vi/YTGfyUdhu-U/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=YTGfyUdhu-U",
		},
	];
</script>

<DynamicScroll items={videos} title="Youtube Videos" />
