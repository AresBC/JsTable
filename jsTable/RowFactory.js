import {AutoRenderRow} from "./JsTable.js";

export class RowFactory {

    create(row, order) {
        const tr = document.createElement('tr')
        let trHtml = ''
        for (const posName of order) {
            trHtml += `<td>${row[posName] ?? ''}</td>`
        }
        tr.innerHTML = trHtml

        return new AutoRenderRow(row, tr, order, this)
    }
}