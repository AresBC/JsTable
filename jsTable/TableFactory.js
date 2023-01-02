import {Table} from "./Table.js";

export class TableFactory {

    #rowFactory
    #modelListFactory

    constructor(rowFactory, modelListFactory) {
        this.#rowFactory = rowFactory
        this.#modelListFactory = modelListFactory
    }

    create(selector) {
        return new Table(selector, this.#rowFactory, this.#modelListFactory)
    }
}