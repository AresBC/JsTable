import {JsTableFactory} from "../jsTable/JsTable.js";

const personTable = await (new JsTableFactory())
    .create('#persons')
    .addByJson('persons.json')


// updating table
const males = personTable.select
    .where({gender: 'Male'})
    .update({first_name: 'BOIIIII'})
    .fetch()


console.log(males)