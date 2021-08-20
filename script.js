function locate() {
  var loc = document.getElementById("perfil").value
  try {
    window.location.href = `https://${loc}`;
  } catch {
    document.getElementById("err").innerHTML = "Hey, sorry, but there was an error launching a link. :/"
  }
}