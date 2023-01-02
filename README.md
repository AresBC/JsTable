# JsTable
<br>

## Quick guide

### short version

```js
import {JsTableFactory} from "../jsTable/JsTable.js";

const personTable = await (new JsTableFactory())
    .create('#persons')
    .addByJson('persons.json')
```

### updating table
```js
const males = personTable.select
    .where({gender: 'Male'})
    .update({first_name: 'BOIIIII'})
    .fetch()


console.log(males)
```

<br>

## More infos

### customizable long version
```js
import {JsTableFactory} from "../jsTable/JsTable.js";

const fetchJson = async fileName => (await fetch(fileName)).json()
const persons = await fetchJson('persons.json')

const jsTableFactory = new JsTableFactory
const personTable = jsTableFactory.create('#persons')

personTable.addRows(persons)
personTable.render()
```


### long version with full control
```js
import {ModelListFactory, RowFactory, TableFactory, TableRenderer} from "../jsTable/JsTable.js";

const fetchJson = async fileName => (await fetch(fileName)).json()
const persons = await fetchJson('persons.json')

const tableFactory = new TableFactory(new RowFactory, new ModelListFactory)
const personTable = tableFactory.create('#persons')
personTable.addRenderer(new TableRenderer())

personTable.addRows(persons)
personTable.render()
```
