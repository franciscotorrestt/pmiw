//Francisco Torres
// Comisión 1
//https://youtu.be/_h6iPSAj_Jw
let obra;
    
function preload() {
  obra = loadImage("17.png"); 
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  image(obra, 0, 0);
  let cant = 9;
  let tam = (width / 2) / cant;

  let mousesobregrilla = estaEnGrilla(mouseX, width / 2);
  let mx = map(mouseX, 100, width, 0, 255);
  let my = map(mouseY, 0, height, 0, 255);

  dibujarGrilla(width / 2, 0, cant, tam, mousesobregrilla, mx, my);

  cuadrante1(4, tam, 437, 408, 8, 37);
  cuadrante2(4, tam, 437, 408, 256, 230);
  cuadrante3(4, tam, 656, 628, 37, 8);
  cuadrante4(4, tam, 656, 628, 230, 256);
  cruzVerticalArriba(cant, tam, width * 3/4 - 15, width * 3/4 + 15, -30);
  cruzVerticalAbajo(cant, tam, width * 3/4 - 15, width * 3/4 +15, -15);
  cruzHorizontalIzquierda(cant, tam, height / 2 - 15, height / 2 + 15, width / 2-30);
  cruzHorizontalDerecha(cant, tam, height / 2 - 15, height / 2 + 15, width / 2-15);
}
 function dibujarGrilla( x1,  y1,  cant,  tam,  rotar,  mx,  my) {
  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      let angulo = 0;
      if (rotar) {
        angulo = radians(frameCount + (x + y) * 30);
      }

      push();      
      translate(x * tam + x1+ tam / 2, y * tam + y1 + tam / 2);
      rotate(angulo);

      if (rotar) {
        fill(mx, 0, my);
      } else {
        if ((x + y) % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        }
      }

      rect(0, 0, tam, tam);
      pop();
    }
  }
}

function estaEnGrilla( x, grilla) {
  return x > grilla;
}
