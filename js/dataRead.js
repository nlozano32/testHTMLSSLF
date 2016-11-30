
				function readJsonToit(xhttp){

					
					var arr = xhttp;
								
					var toit = "";					
					var i;

					for(i = 0; i<arr.length; i++){
					
						
				  		toit += '<input type="hidden" id="'+arr[i].toit_01+'">';
						
					    document.getElementById("idToit01").innerHTML = toit;
						
						}

				}


