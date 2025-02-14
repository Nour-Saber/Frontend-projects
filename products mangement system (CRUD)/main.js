let createBtn = document.getElementById("create");
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let category = document.getElementById("category");
let count = document.getElementById("count");
let total = document.getElementById("total");

let productsArr = JSON.parse(localStorage.getItem("products")) || [];

let mood = "create",
  tmp;

dispalyProductsinPage();
function getTotal() {
  if (price.value != "") {
    let totalPrice = +price.value + +ads.value + +taxes.value - +discount.value;
    total.innerHTML = totalPrice;
    total.style.background = "#1b418a";
  } else {
    total.innerHTML = "";
    total.style.background = "#2775da";
  }
}
createBtn.onclick = function addProduct() {
  let newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    category: category.value,
    count: count.value,
    total: total.innerHTML,
  };
  if (
    title.value != "" &&
    price.value != "" &&
    category.value != "" &&
    count.value < 101
  ) {
    if (mood === "create") {
      if (count.value > 1) {
        for (let i = 0; i < count.value; i++) productsArr.push(newProduct);
      } else {
        productsArr.push(newProduct);
      }
    } else {
      productsArr[tmp] = newProduct;
      mood = "create";
      createBtn.textContent = "Create";
      count.style.cssText = "display:block";
    }
    clearData();
  }
  localStorage.setItem("products", JSON.stringify(productsArr));

  dispalyProductsinPage();
};
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  category.value = "";
  count.value = "";
  total.innerHTML = "";
}
function dispalyProductsinPage() {
  getTotal();
  let table = "";
  for (let i = 0; i < productsArr.length; i++) {
    table += `<table>
    <tr>
    <td>${i + 1}</td>
    <td>${productsArr[i].title}</td>
    <td>${productsArr[i].price}</td>
     <td>${productsArr[i].taxes}</td>
     <td>${productsArr[i].ads}</td>
     <td>${productsArr[i].discount}</td>
     <td>${productsArr[i].total}</td>
     <td>${productsArr[i].category}</td>
     <td><button onclick="updateProduct(${i})">UPDATE</button></td>
     <td><button onclick="deleteProduct(${i})">DELETE</button></td>
     </table>
    `;
  }
  document.getElementById("inputData").innerHTML = table;
  let deleteAllBtn = document.getElementById("deleteAll");
  if (productsArr.length > 0) {
    deleteAllBtn.innerHTML = `<button onclick="deleteAll()">Delete All(${productsArr.length})</button>`;
    deleteAllBtn.style.cssText = "margin:10px 0;";
  } else {
    deleteAllBtn.innerHTML = "";
  }
}
function deleteProduct(indx) {
  productsArr.splice(indx, 1);
  localStorage.setItem("products", JSON.stringify(productsArr));
  dispalyProductsinPage();
}
function deleteAll() {
  productsArr.splice(0);
  localStorage.clear();
  dispalyProductsinPage();
}
function updateProduct(index) {
  title.value = productsArr[index].title;
  price.value = productsArr[index].price;
  taxes.value = productsArr[index].taxes;
  ads.value = productsArr[index].ads;
  discount.value = productsArr[index].discount;
  getTotal();
  count.style.cssText = "display:none";
  category.value = productsArr[index].category;
  createBtn.textContent = "UPDATE";
  mood = "update";
  tmp = index;
  scroll({
    behavior: "smooth",
    top: 0,
  });
}
