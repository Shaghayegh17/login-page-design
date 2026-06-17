const form = document.querySelector("form");
console.log(form.elements);
// اینطوری از طریق name به اینپوت دسترسی پیدا کردیم
// این رویداد به جای دکمه، به خودِ تگ `<form>` وصل می‌شود.
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // console.log(form.elements.fullname.value);
  // console.log(form.elements.email.value);
  // console.log(form.elements.password.value);
  // console.log(form.elements.rule.value);
  // console.log(form.elements.gender.value);
  // console.log(form.elements.gender);
  console.log(event.target);
  // console.log(event.type);
  const formdata = new FormData(event.target);
  // در صورتی که با فایل ارسال کنیم به سرور همین فرم دیتا رو به بادی میدیم و در هدر هم میزنیم مولتیپارت دش فرم دیتا
  const image = formdata.getAll("file");
  console.log(image);
  // برای دریافت فایل های بارگزاری شده میشه اینکارو کرد و در گت آل نام اینپوت فایل و میزاریم
  //  به جای اینکه تک‌تک اینپوت‌ها را با آیدی بگیری، این خط کل اطلاعات فرم را یک‌جا بسته‌بندی می‌کند و در متغیر `formData` می‌گذارد.
  // const querystring = new URLSearchParams(formdata).toString();
  // با فرض اینکه فایل نداریم اطلاعات رو با فرمت متن به سرور میفرستیم
  // const json = json.stringify(Object.fromEntries(formdata));
  await fetch("example.com", {
    method: "POST",
    // body: querystring,
    // body: json,
    body: formdata,
    // headers: { "content-type": "application/x-www-form-urlencoded" },
    // headers: { "content-type": "application/json" },
    headers: { "content-type": "multipart/form-data" },
  });
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
// for (let all of form.elements) {
//   if (all.type === "email" || "text" || "password")
//     all.addEventListener("blur", () => {
//       if (all.value.trim() === "") {
//         alert("فیلد انتخاب شده را حتما پر کنید");
//       }
//     });
// }
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
// select events
const { howgetknow } = form.elements;
console.log(howgetknow);
howgetknow.addEventListener("change", (event) => {
  console.log("Selected Text:", event.target.value);
});

if (howgetknow.value === "getknow") {
  howgetknow.addEventListener("blur", () => {
    alert("نحوه آشنایی با سایت را انتخاب کنید");
  });
}
howgetknow.value = "سایت";
const namefriend = document.querySelector("#friendname");
howgetknow.addEventListener("change", () => {
  if (howgetknow.value === "friend") {
    namefriend.style.display = "inline";
  } else {
    namefriend.style.display = "none";
  }
});

// file events
const { file } = form.elements;
file.addEventListener("change", (event) => {
  console.log(event.target.files);
});
// file.addEventListener("change", () => {
//   if (file.size > 2) {
//     file.value = "";
//   }
// });

// click
// این رویداد فقط و فقط وقتی اجرا می‌شود که کاربر دقیقاً روی آن المان (مثلاً دکمه Sign Up) *کلیک کند.

const sign = document.querySelector("#signin");
sign.addEventListener("click", (event) => {
  console.log(event.target.value);
});
sign.addEventListener("click", () => {
  sign.style.cssText =
    "border:2px solid rgb(18, 233, 18); transform: scale(1.1);";
});
