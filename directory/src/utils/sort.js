function checkSort(a,b) {
    let nameA = a.toUpperCase();
    let nameB = b.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}
export function sortNames(arr) {
    return arr.sort((a,b) => checkSort(a.name.last, b.name.last));
}
export function sortNumbers(arr) {
    return arr.sort();
}
export function sortEmails(arr) {
    return arr.sort((a,b) => checkSort(a.email, b.email))
}
export function filterEmails(item, str) {
    return item.email.indexOf(str) >=0;
}
export function filterNames(item, str) {
    let fullname = `${item.name.first} ${item.name.last}`
    return fullname.indexOf(str) >= 0;
}