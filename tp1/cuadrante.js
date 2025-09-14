function cuadrante1( cantidad,  tam,  posicionX1,  posicionX2,  posicionY1,  posicionY2) {
  for (let j = 0; j < cantidad; j++) {
    for ( let k = 0; k < cantidad; k++) {
      if ((j + k) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

      ellipse(j * tam + posicionX1, k * tam + posicionY1,10, 10);
      ellipse(j * tam + posicionX2, k * tam + posicionY2, 10, 10);
    }
  }
}
function cuadrante2( cantidad,  tam,  posicionX1,  posicionX2,  posicionY1,  posicionY2) {
  for ( let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
       
      if ((x + y) % 2 == 1) {
        fill(255); 
      } else {
        fill(0);   
      }
      ellipse(x * tam + posicionX1, y * tam + posicionY1, 10, 10);
      ellipse(x * tam + posicionX2, y * tam + posicionY2, 10, 10);
    }
  }
}
function cuadrante3( cantidad,  tam,  posicionX1,  posicionX2,  posicionY1,  posicionY2) {
  for (let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if ((x + y) % 2 == 0) {
        fill(0);    
      } else {
        fill(255);  
      }
      ellipse(x * tam + posicionX1, y * tam + posicionY1, 10, 10);
      ellipse(x * tam + posicionX2, y * tam + posicionY2, 10, 10);
    }
  }
}
function cuadrante4(cantidad,  tam,  posicionX1,  posicionX2,  posicionY1, posicionY2) {
  for (let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if ((x + y) % 2 == 0) {
        fill(255);    
      } else {
        fill(0);  
      }
      ellipse(x * tam + posicionX1, y * tam + posicionY1, 10, 10);
      ellipse(x * tam + posicionX2, y * tam + posicionY2, 10, 10);
    }
  }
}
