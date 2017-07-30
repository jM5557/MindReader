/* 
*
* WARNING: READ AT YOUR OWN DISCRETION. THE CODE
* BELOW SPOILS THE MATHEMATICAL ILLUSION OF THIS TRICK
*
*/

window.onload = function () {
	//font-awesome icon symbol names to be used
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

	//generates a random array of icons to be used for the number grid
	var randomizedSymbolArr = function () {
		//initilized as the default array of icon names
		this.selectedArr = symbol_arr;

		//randomly chooses a number between 0 to 8
		//this will be used to set the computed guess'
		//icon symbol
		var answer = Math.floor(Math.random () * 8);

		/*
		*
		* COMMENTED OUT TO MAKE THE TRICK HARDER TO FIGURE OUT.
		* NOW SOME ICONS MAY BE THE SAME AS THE ONE USED FOR
		* MULTIPLES OF 9
		*
		* //splits the array of icon names into two parts excluding the name
		* //in the `answer` position. These names will be used for all other
		* //numbers in the grid. This means only multiples of 9 will have a specific 
		* //icon
		*
		* var h_1 = this.selectedArr.slice(0, answer);
		* var h_2 = this.selectedArr.slice(answer + 1);
		*
		* this.selectedArr = h_1.concat(h_2);
		*
		*/

		this.answer = this.selectedArr[answer];
	}

	var setBoard = function () {
		var s_a = new randomizedSymbolArr();

		document.getElementById('mind_read_result').style.display = "none";

		for(var i = 1; i < 101; i++) {
			//set an icon randomly
			var randomSymbol = s_a.selectedArr[Math.floor(Math.random() * 7)];

			//if the number is a multiple of 9 
			//set a specific symbol for it
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

		/* EVENT LISTENERS FOR BUTTON CLICKS */
			//reveal the computer's guess modal
			document.getElementById('reveal_mind_read').addEventListener('click', function () {
				document.getElementById('mind_read_result').style.display = "block";
				document.getElementById('mind_read_result_icon').className = "fa fa-" + s_a.answer;
			});

			//close the computer's guess modal
			document.getElementById('mind_read_result').addEventListener('click', function () {
				this.style.display = "none";
			});
	}

	/* RESETS THE STATE OF THE NUMBER BOARD SCRAMBLING THE ICONS */
	document.getElementById('reset_board').addEventListener('click', function () {
		document.getElementById('numbers_container').innerHTML = "";
		setBoard();
		document.getElementById('mind_read_result').className = "";
	});

	setBoard(); //initial number board set
}