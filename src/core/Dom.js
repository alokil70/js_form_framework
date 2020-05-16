class Dom {
    constructor(selector) {
        this.elem = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.elem.innerHTML = html
            return this
        }
        return this.elem.outerHTML.trim()
    }

    on(eventType, cb) {
        this.elem.addEventListener(eventType, cb)
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.elem
        }

        if (Element.prototype.append) {
            this.elem.append(node)
        } else {
            this.elem.appendChild(node)
        }

        return this
    }
}

export function $elem(selector) {
    return new Dom(selector)
}

$elem.create = (tagName, className) => {
    const element = document.createElement(tagName)
    if (className) {
        element.classList.add(className)
    }
    return $elem(element)
}
