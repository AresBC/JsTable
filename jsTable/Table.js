export class Table {
    #rows = []
    #renderers = [];
    #elementBox
    #rowFactory
    #modelListFactory

    #headOrder

    get headOrder() {
        return this.#headOrder
    }

    get select() {
        return this.#modelListFactory.create(this.#rows)
    }

    getElementBox() {
        return this.#elementBox
    }

    constructor(selector, rowFactory, modelListFactory) {
        this.#elementBox = document.querySelector(selector)
        if (this.#elementBox === null) throw new Error(`No element with with selector ${selector} found.`)
        this.#rowFactory = rowFactory
        this.#modelListFactory = modelListFactory
    }

    getAll() {
        return this.#rows
    }

    addRows(rows) {
        for (const row of rows) this.addRow(row)
        return this
    }

    #autoHeadOrder(row) {
        this.#headOrder = Object.keys(row)
    }

    addRow(row) {
        if (this.#headOrder === undefined) this.#autoHeadOrder(row)
        this.#rows.push(this.#rowFactory.create(row, this.#headOrder))
        return this
    }

    addRenderer(renderer) {
        this.#renderers.push(renderer)
        return this
    }

    render() {
        this.#renderers.forEach(r => r.render(this))
        return this
    }

    getById(id) {
        for (const row of this.#rows) {
            if (row.val.id === id) return row
        }
        throw new Error('Row not found. No row with the id: ' + id)
    }

    async addByJson(fileName) {
        this.addRows(await (await fetch(fileName)).json()).render()
        return this
    }
}