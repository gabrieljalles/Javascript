var value;
var selectvar;

//hide elements
document.getElementById("formInput").style.visibility = "hidden" ;
document.getElementById("card-kg").style.visibility = "hidden" ;
document.getElementById("card-gram").style.visibility = "hidden" ;
document.getElementById("card-pound").style.visibility = "hidden" ;
document.getElementById("card-oz").style.visibility = "hidden" ;

//add event listener for selector
document.getElementById("selectInput").addEventListener("change", function(selectvar){
    document.getElementById("formInput").style.visibility = "visible";
    var selectvar = selectvar.target.value;


    //change placeholder
    document.getElementsByName('formulario')[0].placeholder=`Enter ${selectvar}`;

    document.getElementById("formInput").addEventListener("input", function(x){
        value = x.target.value;
        document.getElementById("card-kg").style.visibility = "visible" ;
        document.getElementById("card-gram").style.visibility = "visible" ;
        document.getElementById("card-pound").style.visibility = "visible" ;
        document.getElementById("card-oz").style.visibility = "visible" ;

        switch(selectvar){
            case "Gram":
                document.getElementById("card-gram").classList.remove('bg-warning');
                document.getElementById("card-pound").classList.add('bg-primary');
                document.getElementById("card-oz").classList.add('bg-danger');

                document.getElementById('poundOutput').innerHTML = value*0.00220462;
                document.getElementById('kgOutput').innerHTML = value/1000;
                document.getElementById('ozOutput').innerHTML = value*0.035274;
                document.getElementById('gramOutput').innerHTML = value;
            break;
    
            case "Ounce":
                document.getElementById("card-oz").classList.remove('bg-danger');
                document.getElementById("card-gram").classList.add('bg-warning');
                document.getElementById("card-pound").classList.add('bg-primary');
        
                document.getElementById('poundOutput').innerHTML = value*0.0625;
                document.getElementById('kgOutput').innerHTML = value*0.0283495;
                document.getElementById('gramOutput').innerHTML = value*28.3495;
                document.getElementById('ozOutput').innerHTML = value;
            break;
    
            case "Pound":
                document.getElementById("card-pound").classList.remove('bg-primary');
                document.getElementById("card-gram").classList.add('bg-warning');
                document.getElementById("card-oz").classList.add('bg-danger');
                
                document.getElementById('gramOutput').innerHTML = value*453.592;
                document.getElementById('kgOutput').innerHTML =  value*0.453592;
                document.getElementById('ozOutput').innerHTML =  value*16;
                document.getElementById('poundOutput').innerHTML = value;
            break;
        }
    }); 
});