
		initToit();
		initFile();


		function initToit(){

			loadDoc(readJsonToit, "assets/toit.json");
		}


		function initFile(){

			setInterval(function(){loadDoc(paintSensorValue, "SONDE.TXT")});
			
			setInterval(function(){init()}, 1000);
		}

