var datosCoches = [
    ['Subaru', 'Impreza', 2018 ],
    ['Audi', 'A1 Sportback', 2019],
    ['Alfa Romeo','Giulietta', 2016],
    ['Fiat','500',2013],
    ['Lexus','CT', 2017],
    ['Ford','Transit Courier', 2014],
    ['Mercedes','Citan',2013],
    ['Nissan','Micra',2017],
    ['Skoda', 'Fabia', 2018],
    ['Smart', 'Forfour', 2016]
]

var coche = function(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

function crearArrayDeCoches(){
    var objetosCoches =[];
    for (var cocheArray of datosCoches){
        var cocheObjeto = new coche(cocheArray[0], cocheArray[1], cocheArray[2]);
        objetosCoches.push(cocheObjeto);
    }
    console.log(objetosCoches);
}

//prueba
crearArrayDeCoches();