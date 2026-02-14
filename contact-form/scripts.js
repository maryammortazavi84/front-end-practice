// گرفتن فرم
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // جلوگیری از ریفرش شدن صفحه

  // گرفتن مقادیر فیلدها
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;

  const selectedQuery = document.querySelector('input[name="queryType"]:checked');
  const queryType = selectedQuery ? selectedQuery.value : "";

  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;

  // نمایش پیام
  alert("Thank you for contacting us!");

  // چاپ اطلاعات در کنسول
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Query Type:", queryType);
  console.log("Message:", message);
  console.log("Consent Given:", consent);
});
