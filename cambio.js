<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<script>
    
    let taxaCambio = 5.50;
    let valorReais = parseFloat(prompt("Digite a quantidade de Reais que deseja converter para Dólares: "));
    let valorDolares = valorReais / taxaCambio;
    alert("Valor em Dólares: US$ " + valorDolares.toFixed(2));
</script>
</body>
</html>
