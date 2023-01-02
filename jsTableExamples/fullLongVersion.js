// long version with full control
import {ModelListFactory, RowFactory, TableFactory, TableRenderer} from "../jsTable/JsTable.js";

const fetchJson = async fileName => (await fetch(fileName)).json()
const persons = await fetchJson('persons.json')

const tableFactory = new TableFactory(new RowFactory, new ModelListFactory)
const personTable = tableFactory.create('#persons')
personTable.addRenderer(new TableRenderer())

personTable.addRows(persons)
personTable.render()