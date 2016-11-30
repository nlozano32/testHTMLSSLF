

		function paintSensorValue(xhttp){

					//SONDE.TXT

			

					var sensorToitArray = sensorArr(idHi("idToit01"));
					

					var data = xhttp.responseText.split("&");

	
					for(i = 0; i<data.length; i++){

						var datai = data[i].split("=");


								for(t = 0; t<sensorToitArray.length; t++){

										if(datai[0] === sensorToitArray[t]){

											document.getElementById(sensorToitArray[t]).value = datai[1];

										}
										
								}

							}

					}			

				


