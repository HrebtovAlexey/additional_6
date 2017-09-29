module.exports = function zeros(expression) {
    var val = expression.split('*');
    var zeros = 0;
    var startNum = 0;
    var inc = 0;
    var DF = true;
  
    for(var i = 0; i < val.length; i++) {
    	if(val[i].match(/!!/)) {
            val[i] = parseInt(val[i].match(/\d{1,}/));
            	if(val[i] % 2 === 0) { startNum = 2;}
            	else {startNum = 1;}
            	inc = 2;
          	}else {
				val[i] = parseInt(val[i].match(/\d{1,}/));
            	startNum = 1;
            	inc = 1;
         	}
         if(startNum === 2 || inc == 1) {
         	DF = false;
         }
         for(startNum; startNum <= val[i]; startNum += inc) {
             if(startNum % 5 === 0 ) zeros++;
             if(startNum % 25 === 0) zeros++;
          }
      }
	if(DF) {
		return 0
	}else {
		return zeros
	}
};
