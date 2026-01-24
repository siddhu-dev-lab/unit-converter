
// Input Box
const input1 = document.getElementById('inp1');
const input2 = document.getElementById('inp2');

// Units selecters
const unitSelecter1 = document.getElementById('unit-selecter1');
const unitSelecter2 = document.getElementById('unit-selecter2');

// Values
let unit1;
let unit2;

// Unit Values
let unit1Value;
let unit2Value;

unit1Value = unitSelecter1.value;
unit2Value = unitSelecter2.value;

unitSelecter1.addEventListener('change', () => unit1Value = unitSelecter1.value )
unitSelecter2.addEventListener('change', () => unit2Value = unitSelecter2.value )

input1.addEventListener('input', () => {
    switch (true) {
        // Millimeter
        case unit1Value == 'millimeter' && unit2Value == 'millimeter':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'millimeter' && unit2Value == 'centimeter':
            unit1 = input1.value
            unit2 = unit1/10
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'decimeter':
            unit1 = input1.value
            unit2 = unit1/100
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'meter':
            unit1 = input1.value
            unit2 = unit1/1000
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'kilometer':
            unit1 = input1.value
            unit2 = unit1/1000000 // 10 lakh millimeter == 1 km
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'foot':
            unit1 = input1.value
            unit2 = unit1/304.8
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'inch':
            unit1 = input1.value
            unit2 = unit1/25.4
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'mile':
            unit1 = input1.value
            unit2 = unit1/1609344 // 1 mile == 1609344 millimeter
            input2.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'yard':
            unit1 = input1.value
            unit2 = unit1/914.4
            input2.value = unit2
        break;

        // Centimeter
        case unit1Value == 'centimeter' && unit2Value == 'millimeter':
            unit1 = input1.value
            unit2 = unit1*10
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'centimeter':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'centimeter' && unit2Value == 'decimeter':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'centimeter' && unit2Value == 'meter':
            unit1 = input1.value
            unit2 = unit1/100
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'kilometer':
            unit1 = input1.value
            unit2 = unit1/100000 // 1 lakh centimeter == 1 km
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'foot':
            unit1 = input1.value
            unit2 = unit1/30.48
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'inch':
            unit1 = input1.value
            unit2 = unit1/2.54
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'mile':
            unit1 = input1.value
            unit2 = unit1/160934.4 // 1 mile == 160934.4 centimeter
            input2.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'yard':
            unit1 = input1.value
            unit2 = unit1/91.44
            input2.value = unit2
        break;
        
        // Decimeter
        case unit1Value == 'decimeter' && unit2Value == 'millimeter':
            unit1 = input1.value
            unit2 = unit1*100
            input2.value = unit2
        break;
        case unit1Value == 'decimeter' && unit2Value == 'centimeter':
            unit1 = input1.value
            unit2 = unit1*10
            input2.value = unit2
        break;
        case unit1Value == 'decimeter' && unit2Value == 'decimeter':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'meter':
            unit1 = input1.value / 10
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'kilometer':
            unit1 = input1.value / 10000
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'foot':
            unit1 = input1.value / 3.048
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'inch':
            unit1 = input1.value * 3.9370078740157486
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'mile':
            unit1 = input1.value /16093.44
            input2.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'yard':
            unit1 = input1.value / 9.144
            input2.value = unit1
        break;
        
        // Meters
        case unit1Value == 'meter' && unit2Value == 'millimeter':
            unit1 = input1.value
            unit2 = unit1*1000
            input2.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'centimeter':
            unit1 = input1.value
            unit2 = unit1*100
            input2.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'decimeter':
            unit1 = input1.value * 10
            input2.value = unit1
        break;
        case unit1Value == 'meter' && unit2Value == 'meter':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'meter' && unit2Value == 'kilometer':
            unit1 = input1.value
            unit2 = unit1/1000 // 1000 meter == 1 km
            input2.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'foot':
            unit1 = input1.value
            unit2 = unit1/.3048
            input2.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'inch':
            unit1 = input1.value
            unit2 = unit1/.0254
            input2.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'mile':
            unit1 = input1.value;
            unit2 = unit1/1609.344;
            input2.value = unit2;
        break;
        case unit1Value == 'meter' && unit2Value == 'yard':
            unit1 = input1.value
            unit2 = unit1/.9144
            input2.value = unit2
        break;
        
        // Kolimeter
        case unit1Value == 'kilometer' && unit2Value == 'millimeter':
            unit1 = input1.value
            unit2 = unit1*1000000
            input2.value = unit2
        break;
        case unit1Value == 'kilometer' && unit2Value == 'centimeter':
            unit1 = input1.value * 100000
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'decimeter':
            unit1 = input1.value * 10000
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'meter':
            unit1 = input1.value * 1000
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'kilometer':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'foot':
            unit1 = input1.value * 3280.84
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'inch':
            unit1 = input1.value * 39370.08
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'mile':
            unit1 = input1.value / 1.609344
            input2.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'yard':
            unit1 = input1.value * 1093.613
            input2.value = unit1
        break;
        
        // foot
        case unit1Value == 'foot' && unit2Value == 'millimeter':
            unit1 = input1.value * 304.8
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'centimeter':
            unit1 = input1.value * 30.48
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'decimeter':
            unit1 = input1.value * 3.048
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'meter':
            unit1 = input1.value * .3048
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'kilometer':
            unit1 = input1.value / 3280.84
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'foot':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'inch':
            unit1 = input1.value * 12.000000000000002
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'mile':
            unit1 = input1.value / 5280
            input2.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'yard':
            unit1 = input1.value / 3
            input2.value = unit1
        break;

        // Inch
        case unit1Value == 'inch' && unit2Value == 'millimeter':
            unit1 = input1.value * 25.4
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'centimeter':
            unit1 = input1.value * 2.54
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'decimeter':
            unit1 = input1.value / 3.9370078740157486
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'meter':
            unit1 = input1.value * .0254
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'kilometer':
            unit1 = input1.value / 39370.08
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'foot':
            unit1 = input1.value / 12
            input2.value = unit1;
        break;
        case unit1Value == 'inch' && unit2Value == 'inch':
            unit1 = input1.value;
            input2.value = unit1;
        break;
        case unit1Value == 'inch' && unit2Value == 'mile':
            unit1 = input1.value / 63360
            input2.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'yard':
            unit1 = input1.value / 36
            input2.value = unit1
        break;
        
        // Mile
        case unit1Value == 'mile' && unit2Value == 'millimeter':
            unit1 = input1.value * 1609344
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'centimeter':
            unit1 = input1.value * 160934.4
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'decimeter':
            unit1 = input1.value * 16093.44
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'meter':
            unit1 = input1.value * 1609.344
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'kilometer':
            unit1 = input1.value / .621371
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'foot':
            unit1 = input1.value * 5280
            input2.value = unit1;
        break;
        case unit1Value == 'mile' && unit2Value == 'inch':
            unit1 = input1.value * 63360;
            input2.value = unit1;
        break;
        case unit1Value == 'mile' && unit2Value == 'mile':
            unit1 = input1.value
            input2.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'yard':
            unit1 = input1.value * 1760
            input2.value = unit1
        break;
        
        // Yard
        case unit1Value == 'yard' && unit2Value == 'millimeter':
            unit1 = input1.value * 914.4
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'centimeter':
            unit1 = input1.value * 91.44
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'decimeter':
            unit1 = input1.value * 9.144
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'meter':
            unit1 = input1.value * .9144
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'kilometer':
            unit1 = input1.value / 1093.613
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'foot':
            unit1 = input1.value * 3
            input2.value = unit1;
        break;
        case unit1Value == 'yard' && unit2Value == 'inch':
            unit1 = input1.value * 36;
            input2.value = unit1;
        break;
        case unit1Value == 'yard' && unit2Value == 'mile':
            unit1 = input1.value / 1760
            input2.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'yard':
            unit1 = input1.value
            input2.value = unit1
        break;
        
    }
});

    

input2.addEventListener('input', ()=> {
    switch (true) {
        // Millimeter
        case unit1Value == 'millimeter' && unit2Value == 'millimeter':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'millimeter' && unit2Value == 'centimeter':
            unit1 = input2.value
            unit2 = unit1/10
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'decimeter':
            unit1 = input2.value
            unit2 = unit1/100
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'meter':
            unit1 = input2.value
            unit2 = unit1/1000
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'kilometer':
            unit1 = input2.value
            unit2 = unit1/1000000 // 10 lakh millimeter == 1 km
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'foot':
            unit1 = input2.value
            unit2 = unit1/304.8
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'inch':
            unit1 = input2.value
            unit2 = unit1/25.4
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'mile':
            unit1 = input2.value
            unit2 = unit1/1609344 // 1 mile == 1609344 millimeter
            input1.value = unit2
        break;
        case unit1Value == 'millimeter' && unit2Value == 'yard':
            unit1 = input2.value
            unit2 = unit1/914.4
            input1.value = unit2
        break;

        // Centimeter
        case unit1Value == 'centimeter' && unit2Value == 'millimeter':
            unit1 = input2.value
            unit2 = unit1*10
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'centimeter':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'centimeter' && unit2Value == 'decimeter':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'centimeter' && unit2Value == 'meter':
            unit1 = input2.value
            unit2 = unit1/100
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'kilometer':
            unit1 = input2.value
            unit2 = unit1/100000 // 1 lakh centimeter == 1 km
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'foot':
            unit1 = input2.value
            unit2 = unit1/30.48
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'inch':
            unit1 = input2.value
            unit2 = unit1/2.54
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'mile':
            unit1 = input2.value
            unit2 = unit1/160934.4 // 1 mile == 160934.4 centimeter
            input1.value = unit2
        break;
        case unit1Value == 'centimeter' && unit2Value == 'yard':
            unit1 = input2.value
            unit2 = unit1/91.44
            input1.value = unit2
        break;
        
        // Decimeter
        case unit1Value == 'decimeter' && unit2Value == 'millimeter':
            unit1 = input2.value
            unit2 = unit1*100
            input1.value = unit2
        break;
        case unit1Value == 'decimeter' && unit2Value == 'centimeter':
            unit1 = input2.value
            unit2 = unit1*10
            input1.value = unit2
        break;
        case unit1Value == 'decimeter' && unit2Value == 'decimeter':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'meter':
            unit1 = input2.value / 10
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'kilometer':
            unit1 = input2.value / 10000
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'foot':
            unit1 = input2.value / 3.048
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'inch':
            unit1 = input2.value * 3.9370078740157486
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'mile':
            unit1 = input2.value /16093.44
            input1.value = unit1
        break;
        case unit1Value == 'decimeter' && unit2Value == 'yard':
            unit1 = input2.value / 9.144
            input1.value = unit1
        break;
        
        // Meters
        case unit1Value == 'meter' && unit2Value == 'millimeter':
            unit1 = input2.value
            unit2 = unit1*1000
            input1.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'centimeter':
            unit1 = input2.value
            unit2 = unit1*100
            input1.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'decimeter':
            unit1 = input2.value * 10
            input1.value = unit1
        break;
        case unit1Value == 'meter' && unit2Value == 'meter':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'meter' && unit2Value == 'kilometer':
            unit1 = input2.value
            unit2 = unit1/1000 // 1000 meter == 1 km
            input1.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'foot':
            unit1 = input2.value
            unit2 = unit1/.3048
            input1.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'inch':
            unit1 = input2.value
            unit2 = unit1/.0254
            input1.value = unit2
        break;
        case unit1Value == 'meter' && unit2Value == 'mile':
            unit1 = input2.value;
            unit2 = unit1/1609.344;
            input1.value = unit2;
        break;
        case unit1Value == 'meter' && unit2Value == 'yard':
            unit1 = input2.value
            unit2 = unit1/.9144
            input1.value = unit2
        break;
        
        // Kolimeter
        case unit1Value == 'kilometer' && unit2Value == 'millimeter':
            unit1 = input2.value
            unit2 = unit1*1000000
            input1.value = unit2
        break;
        case unit1Value == 'kilometer' && unit2Value == 'centimeter':
            unit1 = input2.value * 100000
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'decimeter':
            unit1 = input2.value * 10000
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'meter':
            unit1 = input2.value * 1000
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'kilometer':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'foot':
            unit1 = input2.value * 3280.84
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'inch':
            unit1 = input2.value * 39370.08
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'mile':
            unit1 = input2.value / 1.609344
            input1.value = unit1
        break;
        case unit1Value == 'kilometer' && unit2Value == 'yard':
            unit1 = input2.value * 1093.613
            input1.value = unit1
        break;
        
        // foot
        case unit1Value == 'foot' && unit2Value == 'millimeter':
            unit1 = input2.value * 304.8
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'centimeter':
            unit1 = input2.value * 30.48
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'decimeter':
            unit1 = input2.value * 3.048
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'meter':
            unit1 = input2.value * .3048
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'kilometer':
            unit1 = input2.value / 3280.84
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'foot':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'inch':
            unit1 = input2.value * 12.000000000000002
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'mile':
            unit1 = input2.value / 5280
            input1.value = unit1
        break;
        case unit1Value == 'foot' && unit2Value == 'yard':
            unit1 = input2.value / 3
            input1.value = unit1
        break;

        // Inch
        case unit1Value == 'inch' && unit2Value == 'millimeter':
            unit1 = input2.value * 25.4
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'centimeter':
            unit1 = input2.value * 2.54
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'decimeter':
            unit1 = input2.value / 3.9370078740157486
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'meter':
            unit1 = input2.value * .0254
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'kilometer':
            unit1 = input2.value / 39370.08
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'foot':
            unit1 = input2.value / 12
            input1.value = unit1;
        break;
        case unit1Value == 'inch' && unit2Value == 'inch':
            unit1 = input2.value;
            input1.value = unit1;
        break;
        case unit1Value == 'inch' && unit2Value == 'mile':
            unit1 = input2.value / 63360
            input1.value = unit1
        break;
        case unit1Value == 'inch' && unit2Value == 'yard':
            unit1 = input2.value / 36
            input1.value = unit1
        break;
        
        // Mile
        case unit1Value == 'mile' && unit2Value == 'millimeter':
            unit1 = input2.value * 1609344
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'centimeter':
            unit1 = input2.value * 160934.4
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'decimeter':
            unit1 = input2.value * 16093.44
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'meter':
            unit1 = input2.value * 1609.344
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'kilometer':
            unit1 = input2.value / .621371
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'foot':
            unit1 = input2.value * 5280
            input1.value = unit1;
        break;
        case unit1Value == 'mile' && unit2Value == 'inch':
            unit1 = input2.value * 63360;
            input1.value = unit1;
        break;
        case unit1Value == 'mile' && unit2Value == 'mile':
            unit1 = input2.value
            input1.value = unit1
        break;
        case unit1Value == 'mile' && unit2Value == 'yard':
            unit1 = input2.value * 1760
            input1.value = unit1
        break;
        
        // Yard
        case unit1Value == 'yard' && unit2Value == 'millimeter':
            unit1 = input2.value * 914.4
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'centimeter':
            unit1 = input2.value * 91.44
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'decimeter':
            unit1 = input2.value * 9.144
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'meter':
            unit1 = input2.value * .9144
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'kilometer':
            unit1 = input2.value / 1093.613
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'foot':
            unit1 = input2.value * 3
            input1.value = unit1;
        break;
        case unit1Value == 'yard' && unit2Value == 'inch':
            unit1 = input2.value * 36;
            input1.value = unit1;
        break;
        case unit1Value == 'yard' && unit2Value == 'mile':
            unit1 = input2.value / 1760
            input1.value = unit1
        break;
        case unit1Value == 'yard' && unit2Value == 'yard':
            unit1 = input2.value
            input1.value = unit1
        break;
        
    }
});
