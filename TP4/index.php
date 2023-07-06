<?php
/*//1) Suma de elementos: 
//ESCRIBIR UNA FUNCIÓN QUE RECIBA UN ARRAY NUMERICO Y CALCULE LA SUMA DE TODOS LOS ELEMENTOS.
//Ejemplo: [1,2,3,4,5] -> 15

function SumaArray($array) {
  $suma = 0;
  foreach ($array as $elemento) {
    $suma += $elemento; // $suma = $suma + $elemento;
  }
  return $suma;
}
// Ejemplo de uso
$array = [1, 2, 3, 4, 5];
$resultado = SumaArray($array);
echo "La suma de los elementos del array es: " . $resultado;
*/

/*//2) CREAR UNA FUNCION QUE ORDENE UN ARRAY NUMERICO EN ORDEN ASCENDENTE.
//Utilizamos sort()

function ordenarArrayAscendente($array) {
  sort($array);
  return $array;
}
$array = [4, 2, 7, 1, 3];
$arrayOrdenado = ordenarArrayAscendente($array);
print_r($arrayOrdenado);
*/

/*//3) ESCRIBE UNA FUNCION QUE ELIMINE LOS ELEMENTOS DUPLICADOS DE UN ARRAY.
//Utilizamos array_unique()

function eliminarDuplicados($array) {
  $arraySinDuplicados = array_unique($array);
  return $arraySinDuplicados;
}
$array = [1, 2, 3, 2, 4, 1, 5, 3];
$arraySinDuplicados = eliminarDuplicados($array);
print_r($arraySinDuplicados);
*/

/*//4) Crear una función que reciba un array y una función a buscar y devuelva un nuevo array con los índices de todas las ocurrencias del valor en el array original.
//Utilizamos array_keys()
function buscarOcurrencias($array, $valor) {
  $indices = array_keys($array, $valor);
  return $indices;
}
$array = [2, 4, 6, 4, 8, 4, 10];
$valorBuscado = 4;
$ocurrencias = buscarOcurrencias($array, $valorBuscado);
print_r($ocurrencias);
*/


//5 escribe una funcion que mezcle 2 arrays y el array resultante debe mostrar los numeros impares)
// utilizamos array_merge
/*function impares($arreglo){    
  $aux2 = [];
  $aux = 0;
  $i = 0;
  foreach($arreglo as $elemento){
      $aux = ($elemento % 2);
      if($aux != 0){   
          $aux2[$i] = $elemento;   
          $i++;
      }     
  }
  return $aux2;
}

$arreglo1 = [1,4,6,7,8];
$arreglo2 = [2,3,5,9];
$resultado = array_merge($arreglo1,$arreglo2);
sort($resultado);
$result=[];
$result = impares($resultado);

print_r($result);
*/



//Array asociativos:
$clubes = array(
  'San Lorenzo' => array(
      'Jugadores' => array(
          'Nahuel Barrios', 'Adam Bareiro', 'Augusto Batalla'
      )
  ),
  'Independiente' => array(
      'Jugadores' => array(
          'Rey', 'Marcone', 'Caute'
      )
  )
);

// ¿Fernando Galetto es jugador de San Lorenzo?
/*function existejugador ($arreglo,$nombreclub,$nombrejugador){
  $aux = 0;
  foreach($arreglo[$nombreclub]["Jugadores"] as $elemento){
      
      if ($nombrejugador == $elemento){

          return "EL JUGADOR: $nombrejugador. EXISTE. ";
          $aux = 1;
      }
     
  }
  
  if ($aux == 0){
      
      return "EL JUGADOR NO EXISTE. ";
  }

};


$nombrejugador = "Fernando Galetto";
$nombreclub = "San Lorenzo";

$resultado = existejugador($clubes,$nombreclub,$nombrejugador);

echo($resultado);
*/

// ¿En qué club juega Marcone?

function queclubjuega($clubes, $nombrejugador) {
  foreach ($clubes as $club => $datos) {
      $jugadores = $datos['Jugadores'];
      foreach ($jugadores as $jugador) {
          if ($jugador === $nombrejugador) {
              return $nombrejugador.' juega en el club ' . $club . '.';
            
          }
         
      }
  }
  return 'No se encontró información sobre el club de Marcone.';
}

$nombrejugador = "Caute";
$resultado = queclubjuega($clubes,$nombrejugador);
echo $resultado;
/*foreach ($clubes as $club => $datos) {
  $jugadores = $datos['Jugadores'];
  if (in_array('Marcone', $jugadores)) {
      echo 'Marcone juega en el club '.$club.'.';
      break;
  }
};*/
?>