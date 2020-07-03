import Button from './Button.vue'

const components = [
	Button
]

const install = function(Vue){
	components.forEach(component => {
		Vue.component(component.name, component);
	})
}

export default {
	install
}