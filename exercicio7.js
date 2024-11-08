<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     let idade = parseInt(prompt("Digite a sua idade: "));
     if (idade < 16) {
         console.log("Não eleitor.");
     }else if (idade >= 18 && idade < 65) {
         console.log("Eleitor obrigatório.");
     } else {
         console.log("Eleitor facultativo.");
     }
    </script>
</body>
</html>
