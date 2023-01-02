// customizable long version
import {JsTableFactory} from "../jsTable/JsTable.js";

const fetchJson = async fileName => (await fetch(fileName)).json()
const persons = await fetchJson('persons.json')

const jsTableFactory = new JsTableFactory
const personTable = jsTableFactory.create('#persons')

personTable.addRows(persons)
personTable.render()