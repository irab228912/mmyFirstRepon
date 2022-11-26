let orderForm = document.getElementById('id-order');
let orderTable = document.getElementById('order-table');
let orders = [];

orderForm.addEventListener('submit', function(event) {
	event.preventDefault()

	let order = {
		"dish": event.target['dish'].value,
		"time": event.target['time'].value,
		"adrr": event.target['adrr'].value,
		"tel": event.target['tel'].value
	}
	console.log(JSON.stringify(order));

	event.target.reset();
	orders.push(order);
	console.log(order);
	drawOrder(order);
});

function drawOrder(order){
	let tr = document.createElement('tr');
	tr.innerHTML = `
	   <td>${order.dish}</td>
	   <td>${order.time}</td>
	   <td>${order.adrr}</td>
	   <td>${order.tel}</td>
	   <td>${createDownloadLink(order).outerHTML}</td>
	`;
	orderTable.appendChild(tr);
}

function createDownloadLink(order){
	let text = JSON.stringify(order);
	let a = document.createElement('a');
	a.setAttribute('href','data:text/plaine;charset=utf-8,'+encodeURIComponent(text));
	a.setAttribute('download','order.json');
	a.innerHTML = 'link';
	return a;
}

let myOrder = {
	"dish": "Fish",
	"time": "12:00",
	"adrr": "Lutsk, Vinichenka str. 67",
	"tel": "0934912018"
};
drawOrder(myOrder);