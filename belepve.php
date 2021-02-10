<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Belépve</title>
</head>
<body>
    <div class="belepve">
        <div class="cim">
        <h1>Kedves <?php echo($_POST['uname']); ?>!<br>Beléptél az oldalra</h1>
        <p>A szuper titkos jelszavad: "<b><?php echo($_POST['psw']); ?></b>"!</p>
        
        </div>
    </div>
    <a href="index.php"><button class="fixbutton">Kilépés</button></a>
</body>
</html>