function insert(a) {
  var b = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = b + a;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var a = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = a.substring(0, a.length - 1);
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado
    ? eval(resultado)
    : "Nada...";
}
