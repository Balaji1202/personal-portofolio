<template>
	<form
		autocomplete="off"
		@submit.prevent="handleSubmit"
		name="coffee-with-me" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		
		<input type="hidden" name="form-name" value="coffee-with-me"/>
		<div class="coffee-form">
			<div class="coffee-ques">
				<label class="coffee-label" for="message">Your message</label>
				<textarea
					@focus="placeFocusClass"
					@blur="clearFocusClass"
					@input="event => this.form.message = event.target.value"
					required cols="40" rows="3" class="coffee-input" type="text" name="message" id="message"/>
			</div>
			<div class="coffee-ques">
				<label class="coffee-label" for="contact">Contact handle</label>
				<input
					@focus="placeFocusClass"
					@blur="clearFocusClass"
					@input="event => this.form.contact = event.target.value"
					required class="coffee-input" type="text" name="contact" id="contact"/>
			</div>
		</div>
		<div class="coffee-submit-wrapper">
			<input class="coffee-submit" type="submit" value="Submit">
		</div>
	</form>
</template>

<script>
import axios from 'axios';
export default {
	name: 'CoffeeForm',
	data() {
		return {
			form: {
				message: '',
				contact: ''
			}
		}
	},
	methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
		placeFocusClass(event) {
			event.currentTarget.parentElement.querySelector('.coffee-label').classList.add('active')
		},
		clearFocusClass(event) {
			if(!event.currentTarget.value) {
				event.currentTarget.parentElement.querySelector('.coffee-label').classList.remove('active')
			}
		},
    handleSubmit () {
			if(this.form.message && this.form.contact) {
				console.log('');
				this.$emit('formSubmitted');
				const axiosConfig = {
					header: { "Content-Type": "application/x-www-form-urlencoded" }
				};
				axios.post(
					"/",
					this.encode({
						"form-name": "coffee-with-me",
						...this.form
					}),
					axiosConfig
				);
			}
    }
  }
}
</script>

<style lang="css" scoped>
.coffee-form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
}
.coffee-ques {
	position: relative;
  margin: 1rem 0;
}
.coffee-label {
	position: absolute;
  top: 0;
  font-size: 20px;
  margin: 0.8rem;
  padding: 0.1rem 0.8rem;
  background-color: var(--theme-base-body);
	border-radius: 0.5rem;
  transition: top .2s ease-in-out, 
							font-size .2s ease-in-out;
	-webkit-transition: top .2s ease-in-out, 
              font-size .2s ease-in-out;
	transition: 0.5s;
	color: rgb(101, 119, 134);
	border: 1px solid var(--theme-base-body);
}
.coffee-input {
	width: 100%;
  padding: 20px;
  border: 1px solid var(--theme-base-text);
  font-size: 20px;
  background-color: var(--theme-base-body);
  color: var(--theme-base-text);
	transition: 0.5s;
	border-radius: 1rem;
}
.coffee-input:focus {
  outline: none;
	border: 1px solid rgb(29, 161, 242);
}
.active {
  top: -25px;
  font-size: 18px;
	border: 1px solid rgb(29, 161, 242);
}
.coffee-submit-wrapper {
	width: 100%;
	text-align: center;
}
.coffee-submit {
	width: 7rem;
	padding: 0.5rem;
	border-radius: 9999px;
	background: rgb(29, 161, 242);
	color: white;
	border: none;
	font-size: 20px;
	cursor: pointer;
	transition: 0.5s;
	margin-top: 1rem;
}
.coffee-submit:hover {
	background-color: rgb(26, 145, 218);
	transition: 0.5s;
}
</style>