// Inicializando la lista vacia
var lista = [];
var coincidencia =[];

//Funciones donde obtenenemos el evento click dependiendo del boton pulsado

const btnAddStart = document.getElementById("addStart"); //obtenemos el id "addStart" del HTML
btnAddStart.addEventListener("click", function () {
  // iniciamos la funcion para agregar un valor al inicio
  addStart(); //invocamos la funcion
}); //finalizamos

const btnAddEnd = document.getElementById("addEnd");
btnAddEnd.addEventListener("click", function () {
  addEnd();
});

const btnDeleteEnd = document.getElementById("deleteEnd");
btnDeleteEnd.addEventListener("click", function () {
  deleteEnd();
});

const btnDeleteStart = document.getElementById("deleteStart");
btnDeleteStart.addEventListener("click", function () {
  deleteStart();
});

const btnSearch = document.getElementById("search");
btnSearch.addEventListener("click", function () {
  search();
});

///------ Funciones principales ------

function addStart() {
  let valorstart = document.getElementById("input").value;
  let nuevoUltimo = lista.unshift(valorstart);
  mostrarLista();
}

function addEnd() {
  let valorend = document.getElementById("input").value;
  let nuevoUltimo = lista.push(valorend);
  mostrarLista();
}

function deleteStart() {
  if (lista.length != "0") {
    let inicio = lista.shift();
  } else {
    alert("Lista vacia ");
  }
  mostrarLista();
}

function deleteEnd() {
  if (lista.length != "0") {
    let ultimo = lista.pop();
  } else {
    alert("Lista vacia ");
  }
  mostrarLista();
}
// Funcion busqueda

function search() {
  if (lista.length != "0") {
     let search = document.getElementById("input").value;
     if (search === '') {
       alert("escribir valor para buscar");
     } else {
        lista.forEach(function (elemento, indice, array) {
          if (elemento === search) {
            coincidencia.unshift(elemento);
          }
        });
        if(coincidencia.length!="0")
        {
          alert("Se encontraron "+ coincidencia.length + " coincidencias ");
           coincidencia = [];
        }
        else {
          alert("Sin coincidencias");
        }
        
     }
    
  } else {
    alert("No hay elementos para comparar ");
  }
 
}
// funcion mostrarLista regresa el valor de la nueva lista al HTML

function mostrarLista() {
  document.getElementById("lista").innerHTML = lista;
  let listaReverse = lista.slice();
  document.getElementById("listareversed").innerHTML = listaReverse.reverse();
}
