const items = [
	{ title: '手機', img: 'mobile', price: 15000 },
	{ title: '筆電', img: 'laptop', price: 25000 },
	{ title: '耳機', img: 'headphones', price: 2000 },
	{ title: '電視', img: 'tv', price: 32000 },
	{ title: '相機', img: 'camera', price: 12000 },
	{ title: '平板', img: 'tablet', price: 17000 },
	{ title: '鍵盤', img: 'keyboard', price: 1350 },
	{ title: '機器人', img: 'robot', price: 99999 }
];

const drawItems = (itemList) => {
	let html = "";
	itemList.forEach((value) => {
		html += `<div class="card">
					<div class="title">${value.title}</div>
					<div class="img"><i class="fas fa-${value.img}"></i></div>
					<div>${value.price}</div>
				</div>`;
	});

	document.querySelector("#shop").innerHTML = html;
};

const doCheap = () => {
	const newItems = items.filter((value) => {
		return value.price < 20000;
	});

	drawItems(newItems);
};

const doNotCheap = () => {
	const newItems = items.filter((value) => {
		return value.price >= 20000;
	});

	drawItems(newItems);
};

const doAll = () => {
	drawItems(items);
};
document.querySelector("#cheap").addEventListener("click", doCheap);
document.querySelector("#notCheap").addEventListener("click", doNotCheap);
document.querySelector("#all").addEventListener("click", doAll);
doAll();