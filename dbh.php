<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "infographic";

$conn = mysqli_connect($servername, $username, $password, $dbname);


// $_GET checks the URL for a "Superglobal" variable. This is a fancy way of passing information from our JS to our PHP, using the URL. In this example, our JS sets the "targetURL" to include "?year=${this.id}", where this.id corresponds with a row name in our database. it's just a clever way of linking these three technologies
$ref = $_GET["addicts"];

// THIS LINE OF CODE



$myQuery = "SELECT * FROM tbl_addicts WHERE linking ='$ref'";

$result = mysqli_query($conn, $myQuery);
$rows = array();

//Fill the array with the result set and send it to the browser
while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

echo json_encode($rows);
// this is the point

?>