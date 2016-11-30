	
				function loadDoc(cfunc, file) {

				  var xhttp = new XMLHttpRequest();
				 
				  xhttp.onreadystatechange = function() {

					    if (xhttp.readyState == 4 && xhttp.status == 200) {

						    	if(file.substring(file.lastIndexOf("."))===".json"){
						    		
						    		this.cfunc = cfunc(JSON.parse(xhttp.responseText));

						    		} else{

						    				this.cfunc = cfunc(xhttp);
						    		
						    		}

									
									//init();

						  		}

							};
							
						  xhttp.open("GET", file, true);
						  xhttp.send();	

						}
	

		var idHi = function(idHidden){

			var elm = [];
    		var elms = document.getElementById(idHidden).getElementsByTagName("*");

    		for(i = 0; i<elms.length; i++){
    				
    				elm += "'"+elms[i].id+"'"+',';
    				
    			}
    		
    		return elm;
		}

		var sensorArr= function(sensorS){

			var sensorArrCount = sensorS.length;
			var sensorConvArray =  "["+sensorS.substr(0,sensorArrCount-1)+"]";

			var sensorArray = sensorConvArray.replace(/'/g, '"');
			sensorArray = JSON.parse(sensorArray);

			return sensorArray;
		}
