document.getElementById("pay").addEventListener("click", function () {
    const totalPrice = document.getElementById("total-price");
    const totalBillValue = parseFloat(totalPrice.value);
    const totalBill = document.getElementById("total-bill");
    totalBill.innerText = totalBillValue;
});

document.getElementById("discount").addEventListener("click", function () {
  const totalPrice = document.getElementById("total-price");
  const totalBillValue = parseFloat(totalPrice.value);
  const totalBill = document.getElementById("total-bill");
  totalBill.innerText = totalBillValue;
  const discount = totalBillValue - (30 / 100) * totalBillValue;
  const discountBill = document.getElementById("discount-bill");
  discountBill.innerText = discount;
});
