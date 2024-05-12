$(document).ready(function () {
  var n1 = Math.round(Math.random() * 111);
  var n2 = Math.round(Math.random() * -22);
  var captcha = n1 + " + " + n2;
  $("#captcha").text(captcha);

  $("#btnLogin")
    .button()
    .click(function (e) {
      e.preventDefault();
      var userCaptcha = $("#inputCaptcha").val();
      if (eval(captcha) == userCaptcha) {
        var dbemail = "admin@gmail.com";
        var dbpassword = "admin";
        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();

        if (dbemail === email && dbpassword === password) {
          alert("Login Success");
          // Redirect to another page after 3 seconds
          setTimeout(function () {
            window.location.href = "CV_B4 copy.html";
          }, 100); // 3000 milliseconds = 3 seconds
        } else {
          alert("Email atau password salah");
        }
      } else {
        alert("Captcha salah");
      }
    });
});
