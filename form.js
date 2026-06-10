const form = document.querySelector("form");
console.log(form.elements);
// اینطوری از طریق name به اینپوت دسترسی پیدا کردیم
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form.elements.fullname.value);
  console.log(form.elements.email.value);
  console.log(form.elements.password.value);
  console.log(event.target);
  console.log(event.type);
});
// راه دوم
// const { email } = form.elements;
// console.log(email);
// ما به مقدار فرم هم میتونیم دسترسی پیدا کنیم
// غیرفعال کردن یک بخش فرم مثلا قبل اینکه بخش دیگه انجام بشه
form.elements.password.disable = true;
// برای جلب توجه کاربر به یک بخش فرم
setTimeout(() => {
  form.elements.email.focus();
}, 3000);
// برای دراوردن از فوکس
setTimeout(() => {
  form.elements.email.blur();
}, 6000);
// این ها خودشون میتونن ایونت باشن
// form.elements.password.addEventListener("focus", () => {
//   password.style.border = "2px solid red";
// });
// در این حالت برای همشون اعمال میشه
for (let input of form.elements) {
  input.addEventListener("focus", () => {
    input.style.border = "2px solid red";
  });
}

for (let part of form.elements) {
  part.addEventListener("change", () => {
    part.style.backgroundColor = "lightgreen";
  });
}

// trim() فاصله‌های اول و آخر را حذف می‌کند. در این صورت اگه اسپیس بزنه خارج بشه باز الارم و میبینه

form.elements.email.addEventListener("blur", () => {
  if ((email.value.trim = " ")) {
    alert("ایمیل خود را وارد کنید");
  }
});

 