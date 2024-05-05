function generateCaptcha() {
  var alphaNumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var captcha = "";
  for (var i = 0; i < 6; i++) {
    captcha += alphaNumeric.charAt(
      Math.floor(Math.random() * alphaNumeric.length)
    );
  }
  return captcha;
}

$(document).ready(function () {
  var captchaText = generateCaptcha();
  $("#captchaContainer").html(
    '<input type="text" id="captchaInput" placeholder="Enter CAPTCHA" required>' +
      '<canvas id="captchaCanvas" width="300" height="80"></canvas>' +
      '<button type="button" id="refreshCaptcha">Refresh</button>'
  );

  var canvas = document.getElementById("captchaCanvas");
  var ctx = canvas.getContext("2d");

  $("#refreshCaptcha").click(function () {
    captchaText = generateCaptcha();
    drawCaptcha(ctx, captchaText);
  });

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    var Email = $("#Email").val();
    var password = $("#password").val();
    var enteredCaptcha = $("#captchaInput").val();
    if (enteredCaptcha.toUpperCase() === captchaText.toUpperCase()) {
      if (Email === "Admin@gmail.com" && password === "Admin") {
        $("#message").html('<div class="success">Login success!</div>');
        window.location.href = "CV_B4.html";
      } else {
        $("#message").html(
          '<div class="error">username atau password salah!</div>'
        );
      }
    } else {
      $("#message").html('<div class="error">CAPTCHA Salah!</div>');
    }
  });

  drawCaptcha(ctx, captchaText);
});

function drawCaptcha(ctx, captchaText) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText(captchaText, 10, 50);
}
