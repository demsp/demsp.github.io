var ctx; var arr=[];var v1=[]; var error=0;
function rect(color, x, y, width, height,opecity) {
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.draw = function() // Метод рисующий прямоугольник
    {
		ctx.beginPath();
		ctx.globalAlpha = opecity;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
	this.clear = function(){
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}
}
function init(p,h){
	(p===undefined) ? x=60 : x=p;
	(h===undefined) ? y=480 : y=h;
		//дефолтный 1 - вариант.
		if (x < 60 ) x = 60;if (x > 480 ) x = 480;
		if (y < 60 ) y = 60;if (y > 480 ) y = 480;
	//запоминаем значение для ошибок 
	arr.push([x,y]);
	//рисуем, сам канвас
	var chess = document.getElementById("chess");
	var width = chess.width = 600;
	var height = chess.height = 600;
	ctx = chess.getContext('2d');
	ctx.clearRect(0,0,width,height);
	
//определяем потенциальные ходы (создаем массив элементов) всего 8 вариантов
	v1 = [
		[x+60*2, y+60],
		[x+60*2, y-60],
		[x+60, y+60*2],
		[x-60, y+60*2],
		[x+60, y-60*2],
		[x-60, y-60*2],
		[x-60*2, y-60],
		[x-60*2, y+60]
	];
// закрашиваем их 
	
	for(var v=0;v<v1.length;v++){
		if(v1[v][0]>59 && v1[v][0]<481 && v1[v][1]>59 && v1[v][1]<481) 		{
			var f = new rect('#ffe800',v1[v][0],v1[v][1],60,60,0.4);
				f.draw();
		}
	}
//закрашиваем то, куда ходили
for (var i=0;i<arr.length;i++) {
		var f = new rect('#f00',arr[i][0],arr[i][1],60,60,1);
				f.draw();
}
	//рисуем коня
	imkago(x,y);
}
init();
function imkago(x,y) {
	var kon = new Image();
	kon.src = 'images/kon.png';
	kon.onload = function() {
		ctx.beginPath();
		ctx.globalAlpha = 1;
		ctx.drawImage(kon, x+3, y-45);	
	}
}

$('#chess').click(function(event){
 var x = event.pageX - this.offsetLeft-$('.chess').offset().left;
 var y = event.pageY - this.offsetTop;
	  	x = (Math.floor(x/60))*60;
		y = (Math.floor(y/60))*60;
//сравниваем, если нет совпадений. ничего не происходить, смотрим ошибки
		for (var j=0;j<arr.length;j++) {
			if (arr[j][0]==x && arr[j][1]==y){
				error++;
				$(".info").html("<p>Количество шагов: "+arr.length+"<p><p>Количество ошибок: "+error+"<p>");
				return false;
			}	
		}
	for(var v=0;v<v1.length;v++){	
			if(v1[v][0]==x && v1[v][1]==y) {
					init(x,y);
			}
	}
	$(".info").html("<p>Количество шагов: "+arr.length+"<p><p>Количество ошибок: "+error+"<p>");
})
