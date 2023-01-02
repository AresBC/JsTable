import {ModelListFactory, RowFactory, TableFactory, TableRenderer} from "./JsTable.js";

export class JsTableFactory {

    create(selector) {
        const tableFactory = new TableFactory(new RowFactory, new ModelListFactory)
        const table = tableFactory.create(selector)
        table.addRenderer(new TableRenderer())
        return table
    }
}