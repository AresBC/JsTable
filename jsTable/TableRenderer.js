export class TableRenderer {
    render(table) {
        const tableElement = this.renderTable(table)
        table.getElementBox().append(tableElement)
    }

    renderTable(table) {
        const renderedTable = document.createElement('table')
        const thead = this.renderTableHead(table)
        renderedTable.append(thead)
        const tbody = document.createElement('tbody')
        for (const row of table.getAll()) tbody.append(row.element)
        renderedTable.append(tbody)
        return renderedTable
    }

    renderTableHead(table) {
        let ths = ''
        for (const key of table.headOrder) ths += `<th>${key}</th>`
        const theadEle = document.createElement('thead')
        theadEle.innerHTML = ths
        return theadEle
    }
}