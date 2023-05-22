////4 - Agregar elementos usando spread

stock = [...stock, new Producto('Papas fritas', 240)]; ///analogo al push
console.log(stock);

stock = [new Producto('Batatas' , 420), ...stock]; ///analogo al unshift
console.log(stock);
