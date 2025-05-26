<script lang="ts">
	import VideoTemplete from "./video-templete.svelte";
	import { type YouTubeVideo } from "$lib/types/youtube-video-type";

	const videos: YouTubeVideo[] = [
		{
			id: "36hbYPvvbVQ",
			title: "StreamSync Demo | Integrate Audio Calls with YouTube Live Chat",
			thumbnailUrl: "https://img.youtube.com/vi/36hbYPvvbVQ/0.jpg",
		},
		{
			id: "Lzt1Y1uFdLU",
			title: "stremSync Proof of Concept | Integrates voice with super chats",
			thumbnailUrl: "https://img.youtube.com/vi/Lzt1Y1uFdLU/0.jpg",
		},
		{
			id: "vMq3I2Ey6Uc",
			title: "SquadX demo | WebRTC Multiple Peer Connection ",
			thumbnailUrl: "https://img.youtube.com/vi/vMq3I2Ey6Uc/0.jpg",
		},
		{
			id: "zQv_ktDfduM",
			title: "callRoom - Simple WebRTC Video Calling App",
			thumbnailUrl: "https://img.youtube.com/vi/zQv_ktDfduM/0.jpg",
		},
		{
			id: "Cu8M1_eS4kA",
			title: "Telegram bot",
			thumbnailUrl: "https://img.youtube.com/vi/Cu8M1_eS4kA/0.jpg",
		},
		{
			id: "k1eMtm2ISLg",
			title: "aiMovieChatbot",
			thumbnailUrl: "https://img.youtube.com/vi/k1eMtm2ISLg/0.jpg",
		},

		{
			id: "yG8irvUutdI",
			title: "Multi-Chain Crypto Wallet",
			thumbnailUrl: "https://img.youtube.com/vi/yG8irvUutdI/0.jpg",
		},
		{
			id: "YTGfyUdhu-U",
			title: "omegle clone demo | Real-time video chat app",
			thumbnailUrl: "https://img.youtube.com/vi/YTGfyUdhu-U/0.jpg",
		},
	];
</script>

<VideoTemplete {videos} />
