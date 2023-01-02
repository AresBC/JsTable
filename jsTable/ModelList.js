export class ModelList {
    #rows

    constructor(rows = []) {
        this.#rows = rows
    }

    getRows() {
        return this.#rows
    }

    #fieldsAreMatching(searchingFields, row) {
        for (const [propName, val] of Object.entries(searchingFields)) {
            if (row.val[propName] === val) continue
            return false
        }
        return true
    }

    where(searchingFields, f) {
        const rows = []
        for (const row of this.#rows) {
            if (!this.#fieldsAreMatching(searchingFields, row)) continue
            rows.push(row)
            if (f) f(row)
        }
        return new ModelList(rows)
    }

    fetch() {
        const vals = []
        for (const {val} of this.#rows) vals.push(val)
        return vals
    }

    update(newFields) {
        this.#rows.forEach(r => r.update(newFields))
        return this
    }

    count() {
        return this.#rows.length
    }

}