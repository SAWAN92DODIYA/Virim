console.log(document.cookie)
document.cookie = "name1=sawan0808705"
document.cookie = "name2=ekta08080909"
document.cookie = "name3=rishabh45677"
let key = prompt("enter the key")
let value = prompt("enter the value")
document.cookie = `${key}=${value}`
console.log(document.cookie)