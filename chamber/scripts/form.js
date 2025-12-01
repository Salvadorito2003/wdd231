const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('timestamp'));

const timestamp = myInfo.get('timestamp'); 

const [date, time] = timestamp.split("T");

document.querySelector("#information").innerHTML = `
<p>Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Business Title: ${myInfo.get('business')}</p>
<p>Date: ${date}</p>
<p>Time: ${time}</p>`;
