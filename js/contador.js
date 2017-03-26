var target_date = new Date("april 1, 2017").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
  

}, 1000);