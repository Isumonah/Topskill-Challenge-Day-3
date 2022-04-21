let input = document.getElementById('unit');
let meter = document.getElementById('meter')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')
let button = document.getElementById('button')

function conversionOfLength(){
    meterToFeet = input.value * 3.281
    feetToMeter=  input.value * 0.305
    meter.textContent = input.value + ' meters ' + '= ' + meterToFeet.toFixed(3) + ' feet' + ' | ' +  input.value + ' feet' + ' = ' + feetToMeter.toFixed(3) + ' meters'
     
}

function volumeConversion(){
    litersToGallons =  input.value * 0.264
    gallonsToLiters =  input.value * 3.785
    volume.textContent =  input.value + ' liters ' + '= ' + litersToGallons.toFixed(3) + ' gallons' + ' | ' +  input.value + ' gallons' + ' = ' + gallonsToLiters.toFixed(3) + ' liters'
}

function massConversion(){
    kilosToPounds =  input.value *  2.205
    poundsToKilos =  input.value * 0.454 
    mass.textContent = input.value + ' kilos ' + '= ' + kilosToPounds.toFixed(3) + ' pounds' + ' | ' +  input.value + ' pounds' + ' = ' + poundsToKilos.toFixed(3) + ' kilos'
    
}


button.addEventListener("click", function(){
             volumeConversion()
conversionOfLength()
massConversion()           
  
  })




