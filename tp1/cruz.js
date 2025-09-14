  function cruzVerticalArriba( cantidad,  tam,  posicionX1,  posicionx2,  posicionY) {
  for ( j = 0; j < cantidad / 2; j++) {
    if ((j) % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(posicionX1, j * tam + posicionY + tam / 2, 10, 10);
    ellipse(posicionx2, j * tam + posicionY + tam / 2, 10, 10);
  }
}

function cruzVerticalAbajo(cantidad, tam, posicionX1, posicionX2, posicionY) {
  let mitad = (cantidad - 1) / 2;
  for (let j = mitad + 1; j < cantidad; j++) {
    let y = j * tam + posicionY + tam / 2;

    if (j % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }

    ellipse(posicionX1, y, 10, 10);
    ellipse(posicionX2, y, 10, 10);
  }
}
function cruzHorizontalIzquierda( cantidad,  tam,  posicionY1,  posicionY2,  posicionX1) {
  for ( k = 0; k < cantidad / 2; k++) {
    if ((k) % 2 == 0) {
      fill(0); 
    } else {
      fill(255); 
    }

    let x = k * tam + posicionX1 + tam / 2;
    ellipse(x, posicionY1, 10, 10);
    ellipse(x, posicionY2, 10, 10);
  }
}
function cruzHorizontalDerecha(cantidad, tam, posicionY1, posicionY2, posicionX1) {
  let mitad = (cantidad - 1) / 2; // entero
  for (let k = mitad + 1; k < cantidad; k++) {
    let x = k * tam + posicionX1 + tam / 2;

    if (k % 2 == 0) {
      fill(255);
    }else {
      fill(0);
}
    ellipse(x, posicionY1, 10, 10);
    ellipse(x, posicionY2, 10, 10);
  }
}
