<?php
$to = "duzer17@student.sdu.dk";
$subject = $_POST("firstname");
$txt = $_POST("products");
$headers = "From: " . $_POST("email") . "\r\n" .
"CC: jaabd17@student.sdu.dk";

mail($to,$subject,$txt,$headers);
?>