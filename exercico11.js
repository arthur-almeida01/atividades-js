<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     let descontoMaximo = 334.29;
     let desconto = salario * 0.11;
     if (desconto > descontoMaximo) {
          desconto = descontoMaximo;
    }
         console.log("O valor do desconto previdenciário é: R$ " + desconto.toFixed(2));

    </script>
</body>
</html>