<template>
	<div class="contact-tweet">
		<a
			v-for="(contact, index) in this.$root.contacts" :key="index"
			:href="contact.href" target="_blank">
			<ContactSvg
				:logo="contact.logo"
			/>
		</a>
	</div>
</template>

<script>
import ContactSvg from './ContactSvg.vue';
export default {
	components: {
		ContactSvg
	}
}
</script>


<style lang="css" scoped>
.contact-tweet {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 1rem;
}
</style>