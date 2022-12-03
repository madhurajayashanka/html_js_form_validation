function validateForm() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let degree = document.getElementById("degree").value;

  //Name Validation
  if (name == "" || 10 > name.length > 6) {
    alert("Name should be 6 – 10 characters");
    return false;
  }

  //Email Validation
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (email == "" || !regEmail.test(email)) {
    alert("Enter a Valid Email");
    return false;
  }

  //Phone Number Validation
  let regPhone = /^\d{10}$/;
  if (phone == "" || !regPhone.test(phone)) {
    alert("Enter a Valid Phone Number");
    return false;
  }

  if (!degree) {
    //Degree Validation
    alert("Select the Degree");
    return false;
  }

  //Gender Validation
  if (
    !(
      document.getElementById("male").checked ||
      document.getElementById("female").checked
    )
  ) {
    alert("Enter the gender");
    return false;
  } else {
    alert("Form Successfully sent!");
  }
}
