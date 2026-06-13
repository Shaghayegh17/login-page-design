const form = document.querySelector("form");
console.log(form.elements);
// اینطوری از طریق name به اینپوت دسترسی پیدا کردیم
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form.elements.fullname.value);
  console.log(form.elements.email.value);
  console.log(form.elements.password.value);
  console.log(form.elements.rule.value);
  console.log(form.elements.gender.value);
  console.log(form.elements.gender);
  console.log(event.target);
  console.log(event.type);
});
// راه دوم
// const { email } = form.elements;
// console.log(email);
// ما به مقدار فرم هم میتونیم دسترسی پیدا کنیم
// غیرفعال کردن یک بخش فرم مثلا قبل اینکه بخش دیگه انجام بشه
// form.elements.password.disabled = true;
// برای جلب توجه کاربر به یک بخش فرم
// setTimeout(() => {
//   form.elements.email.focus();
// }, 3000);
// برای دراوردن از فوکس
// setTimeout(() => {
//   form.elements.email.blur();
// }, 6000);
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
    part.style.border = "2px solid rgb(58, 238, 58)";
  });
}

// trim() فاصله‌های اول و آخر را حذف می‌کند. در این صورت اگه اسپیس بزنه خارج بشه باز الارم و میبینه

// form.elements.email.addEventListener("blur", () => {
//   if ((email.value.trim() = " ")) {
//     alert("ایمیل خود را وارد کنید");
//   }
// });
// با روش زیر دیگه گیر نمیکنه رو آلرت و میره بخش بعد
// برای هر بلور، باید شرط بزاری قبل آلرت دادن
for (let all of form.elements) {
  if (all.type === "email" || "text" || "password")
    all.addEventListener("blur", () => {
      if (all.value.trim() === "") {
        alert("فیلد انتخاب شده را حتما پر کنید");
      }
    });
}
// radio
// first way
// for (let gend of form.elements.gender) {
//   gend.addEventListener("change", (event) => {
//     console.log(event.target.value);
//   });
// }
// second way
form.addEventListener("change", (event) => {
  if (event.target.name === "gender") {
    console.log(event.target.value);
  }
});
// کل ردیوباتن با کد زیر نمایش داده میشه
// form.elements.gender.value
// برای نمایش مقدارانتخاب شده
// event.target.checked

// checkbox
form.addEventListener("change", (event) => {
  if (event.target.name === "rule") {
    console.log(event.target.checked);
  }
});
// rule.checked = true;
// در حالت بالا، تیک رول خودکار زده میشه
