document.getElementById('p1').style.left = (parseInt(document.getElementById('bd').clientWidth) * 0.92) + 'px';
	document.getElementById('p1').style.top = (parseInt(document.getElementById('bd').clientHeight) * 0.83) + 'px';
	document.getElementById('p2').style.left = (parseInt(document.getElementById('bd').clientWidth) * 0.45) + 'px';
	document.getElementById('p2').style.top = (parseInt(document.getElementById('bd').clientHeight) * 0.3) + 'px';
	document.getElementById('p3').style.left = (parseInt(document.getElementById('bd').clientWidth) * 0.91) + 'px';
	document.getElementById('p3').style.top = (parseInt(document.getElementById('bd').clientHeight) * 0.85) + 'px';
	var x = 0.91;
	var y = 0.85;
	function mov()
	{
		x -= 0.001;
		y -= (0.001 + 0.010/421);
		document.getElementById('p3').style.left = (parseInt(document.getElementById('bd').clientWidth) * x) + 'px';
		document.getElementById('p3').style.top = (parseInt(document.getElementById('bd').clientHeight) * y) + 'px';
		if(x <= 0.489 && y <= 0.419)
		{
		clearInterval(m);
		m = setInterval(mov2,20);
		}
	}
	function mov2()
	{
		x -= 0.001;
		y += (0.001 + 0.010/421);
		document.getElementById('p3').style.left = (parseInt(document.getElementById('bd').clientWidth) * x) + 'px';
		document.getElementById('p3').style.top = (parseInt(document.getElementById('bd').clientHeight) * y) + 'px';
		if(x <= 0.09 && y >= 0.89)
		{
		clearInterval(m);
		}
	}
	var m = setInterval(mov,20);