<template>
	<div class="profile-text">
		<div class="profile-name">
			Balaji Saravanan
		</div>
		<svg class="twitter-original" viewBox="0 0 2100 2100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2100 1100C2100 942 2012.5 805 1885.21 740C1900.61 696.5 1909.01 649.5 1909.01 600C1909.01 379 1738.02 200.2 1527.23 200.2C1480.23 200.2 1435.23 208.6 1393.63 225.2C1331.84 91.5 1201.04 0 1050.05 0C899.057 0 768.463 91.7 706.366 225C664.868 208.5 619.771 200 572.773 200C361.783 200 190.991 379 190.991 600C190.991 649.4 199.29 696.4 214.69 740C87.4958 805 0 941.8 0 1100C0 1249.5 78.1963 1379.8 194.191 1448.6C192.191 1465.6 190.991 1482.6 190.991 1500C190.991 1721 361.783 1900 572.773 1900C619.771 1900 664.768 1891.4 706.266 1875C768.263 2008.4 898.857 2100 1049.95 2100C1201.14 2100 1331.74 2008.4 1393.63 1875C1435.13 1891.3 1480.13 1899.8 1527.23 1899.8C1738.22 1899.8 1909.01 1720.8 1909.01 1499.8C1909.01 1482.4 1907.81 1465.4 1905.71 1448.5C2021.5 1379.8 2100 1249.5 2100 1100.1V1100ZM1438.43 766.6L1005.05 1416.6C990.553 1438.3 966.854 1450 942.555 1450C928.256 1450 913.757 1446 900.957 1437.4L889.458 1428L647.969 1186.5C618.671 1157.2 618.671 1109.7 647.969 1080.5C677.268 1051.3 724.765 1051.1 753.964 1080.5L930.956 1257.2L1313.44 683.2C1336.44 648.7 1383.03 639.6 1417.43 662.5C1452.03 685.5 1461.43 732.1 1438.43 766.5V766.6Z" fill="#1DA1F2"/>
		</svg>
		<div class="profile-handle">
			@balajisv_
		</div>
		<div class="profile-store profile-store-dot">·</div>
		<div class="profile-store">{{eventDate}}</div>
	</div>
</template>
<script>
export default {
	props: {
		eventDate: {
			type: String,
			required: false
		}
	}
}
</script>
<style lang="css" scoped>
.profile-text {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
	padding-bottom: 0.5rem;
}
.profile-name {
	font-size: 1rem;
	font-weight: bold;
	padding-right: 0.2rem;
}
.profile-handle {
	font-size: 0.9rem;
	padding-left: 0.2rem;
	color: rgb(101, 119, 134);
}
.profile-store {
	font-size: 0.9rem;
	color: rgb(101, 119, 134);
}
.profile-store-dot {
	padding: 0 0.4rem;
}
.twitter-original {
	width: 1rem;
	height: 1rem;
}
</style>