const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('name'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('code'));
console.log(myInfo.get('number-of-products'));
console.log(myInfo.get('specifications'));

const timestamp = myInfo.get('timestamp'); 

const [date, time] = timestamp.split("T");

document.querySelector("#information").innerHTML = `
<p>Name and Last Name: ${myInfo.get('name')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Postal Code: ${myInfo.get('code')}</p>
<p>Number of Products: ${myInfo.get('number-of-products')}</p>
<p>Date: ${date}</p>
<p>Time: ${time}</p>`;