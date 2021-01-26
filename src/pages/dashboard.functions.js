import {storage} from "@core/utils";

export function toHTML(key) {
    const data = storage(key)

    const id = key.split(':')[1]
    return `
        <li class="db__record">
            <a href="#excel/${id}">${data.title}</a>
            <strong>
                ${new Date(data.openedDate).toLocaleDateString()}
                ${new Date(data.openedDate).toLocaleTimeString()}
                </strong>
        </li>
                                 
    `
}
function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i ++){
        const key = localStorage.key(i)
        if(!key.includes('excel')){
            continue
        }
        keys.push(key)
    }
    return keys
}

export function createRecordsTable() {
    const keys = getAllKeys()
    if(!keys.length) {
        return `<p>No records</p>`
    }

    return `
        <div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
        </div>
        <ul class="db__list">
            ${keys.map(toHTML).join('')}
        </ul>
    `
}