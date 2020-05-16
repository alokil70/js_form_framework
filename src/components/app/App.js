import {$elem} from '@core/Dom'

export class App {
    constructor(selector, options) {
        this.$el = $elem(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $elem.create('div', 'app')

        this.components = this.components.map((Component) => {
            const el = $elem.create('div', Component.className)
            const component = new Component(el)
            el.html(component.toHTML())
            $root.append(el)
            return component
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())

        this.components.forEach((component) => component.init())
    }
}
