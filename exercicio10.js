<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     let anos = parseInt(prompt("Digite a sua idade:\nAnos: "));
     let meses = parseInt(prompt("Meses: "));
     let dias = parseInt(prompt("Dias: "));
     let totalDias = (anos * 365) + (meses * 30) + dias;
         console.log("A sua idade em dias é: " + totalDias);
    </script>
</body>
</html>
