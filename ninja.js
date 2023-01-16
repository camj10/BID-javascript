class Ninja{
    constructor(nombre,salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud= salud;
        this.velocidad = velocidad;
        this.fuerza= fuerza;
        this.velocidad= 3;
        this.fuerza= 3;
    }
    //sayName () - Esto debería registrar el nombre de Ninja en la consola
    sayName(nombre){
        this.nombre = nombre;
        console.log("Nombre: "+nombre);
    }
    //showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
    showStats(nombre,fuerza,velocidad,salud){
        this.nombre= nombre;
        this.fuerza= fuerza;
        this.velocidad= velocidad;
        this.salud= salud;
        console.log("Nombre: "+nombre);
        console.log("Fuerza: "+fuerza);
        console.log("Velocidad: "+velocidad);
        console.log("Salud: "+salud);
    }
    //drinkSake () - Esto debería agregar +10 de salud al Ninja
    drinkSake(salud){
        this.salud= salud;
        salud+=10;
        console.log("Salud con (+10) agregado: "+salud);
    }
}
const ninja1= new Ninja ();
ninja1.sayName("Cam");
ninja1.showStats("Cam", 10, 3,3);
ninja1.drinkSake(20);