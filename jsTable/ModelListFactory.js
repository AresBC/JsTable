import {ModelList} from "./ModelList.js";

export class ModelListFactory {
    create(rows) {
        return new ModelList(rows)
    }
}