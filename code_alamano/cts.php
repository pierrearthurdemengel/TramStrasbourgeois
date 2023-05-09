<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Carte CTS</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- <script> src="https:code.jquery.com/jquery.3.2.1.min.js" type="text/javascript"</script> -->
    <script type="text/javascript" src="app.js"></script>
</head>

<body>

    <div class="mapAndInfos">
        <div class="map">

            <?php include('arrets.svg'); ?>

        </div>

        <div class="info">
    <h1>Carte CTS</h1>
    <?php
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        echo "<h1>$id</h1>";
    }
    
    ?>
    <span id="idCliqué"></span>


            <!-- <span id="infosA"></span>
                <span id="infosB"></span> 
                <span id="infosB"></span>
                <span id="infosD"></span> 
                <span id="infosE"></span>
                <span id="infosF"></span> 
                <span id="infosG"></span> -->

        </div>

</body>

</html>