var diasinicio = parseInt(prompt("ingrese una cantidad de dias"));
var anos = parseInt(diasinicio/365);
var semanas = parseInt((diasinicio%365)/7);
var diasfinal = diasinicio%365%7;
document.write(diasinicio+" dias equivale a: "+anos+" años, "+semanas+" semanas, "+diasfinal+" dias.");