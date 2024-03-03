<?php
include "koneksi.php";

$full_name = $_POST["full_name"];
$email = $_POST["email"];
$mobile_number = $_POST["mobile_number"];
$email_subject = $_POST["email_subject"];
$message = $_POST["message"];

$koneksi->query("INSERT INTO panggilan VALUES ('$full_name','$email','$mobile_number','$email_subject','$message');");

echo 'laporan terkirim';

header("location:index.html");
?>
