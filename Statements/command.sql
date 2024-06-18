/* select */
SELECT * FROM inventario.agroquimicos;
SELECT Ingrediente_activo FROM inventario.agroquimicos;

/* distinct */

SELECT distinct Unidades FROM agroquimicos;

/* WHERE*/
SELECT * FROM agroquimicos WHERE  product_id = 2;