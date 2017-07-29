window.onload = function () {
	var symbol_arr = [
		"gamepad",
		"flask",
		"gavel",
		"hourglass",
		"id-card-o",
		"futbol-o",
		"male",
		"fighter-jet"
	];

	var randomizedSymbolArr = function () {
		this.selectedArr = symbol_arr;

		var answer = Math.floor(Math.random () * 8);
		console.log(answer);

		var h_1 = this.selectedArr.slice(0, answer);
		var h_2 = this.selectedArr.slice(answer + 1);

		this.selectedArr = h_1.concat(h_2);
		this.answer = symbol_arr[answer];
	}

	var setBoard = function () {
		var s_a = new randomizedSymbolArr();

		document.getElementById('mind_read_result').style.display = "none";

		for(var i = 1; i < 101; i++) {
			var randomSymbol = s_a.selectedArr[Math.floor(Math.random() * 7)];

			if(i > 0 && i%9 == 0)
				randomSymbol = s_a.answer;
			
			var d = document.createElement('div');
			var num_text = document.createTextNode(i);
			d.appendChild(num_text);

			var symbol = document.createElement('i');
			symbol.className = "fa fa-" + randomSymbol;


			d.appendChild(symbol);
			document.getElementById('numbers_container').appendChild(d);

			if(i%5 == 0)
				document.getElementById('numbers_container').appendChild(document.createElement("br"));
		}

		document.getElementById('reveal_mind_read').addEventListener('click', function () {
			document.getElementById('mind_read_result').style.display = "block";
			document.getElementById('mind_read_result_icon').className = "fa fa-" + s_a.answer;
		});

		document.getElementById('mind_read_result').addEventListener('click', function () {
			this.style.display = "none";
		});
	}

	setBoard();

	document.getElementById('reset_board').addEventListener('click', function () {
		document.getElementById('numbers_container').innerHTML = "";
		setBoard();
		document.getElementById('mind_read_result').className = "";
	});
}