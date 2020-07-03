<template>
	<button :class="btnClass">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import {Vue, Component, Prop } from 'vue-property-decorator';

@Component({
	name: "dui-button"
})
export default class Button extends Vue {
	@Prop({type: String, default: "default"}) type!: string;
	
	get btnClass(){
		return `btn-${this.type}`
	}
}
</script>

<style lang="less" scoped>
.btn-default {
	width: 120px;
	height: 40px;
	background-color: #ffaabb;
	color: #fff;
	outline: none;
	border: none;
}
.btn-primary {
	width: 120px;
	height: 40px;
	background-color: #00aaff;
	color: #fff;
	outline: none;
	border: none;
}
</style>
