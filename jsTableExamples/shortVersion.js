// short version
import {JsTableFactory} from "../jsTable/JsTable.js";

const personTable = await (new JsTableFactory())
    .create('#persons')
    .addByJson('persons.json')