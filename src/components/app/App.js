export class App {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        $root.classList.add('app')

        this.components.forEach((Component) => {
            const $el = document.createElement('div')
            $el.classList.add(Component.className)
            const component = new Component($el)
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}
