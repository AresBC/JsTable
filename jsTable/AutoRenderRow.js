export class AutoRenderRow {
    val
    element
    #rowFactory
    #order

    constructor(val, element, order, rowFactory) {
        this.val = val
        this.element = element
        this.#rowFactory = rowFactory
        this.#order = order
    }

    update(newFields) {
        for (const [k, v] of Object.entries(newFields)) {
            this.val[k] = v
        }
        this.element.innerHTML = this.#rowFactory.create(this.val, this.#order).element.innerHTML
    }
}