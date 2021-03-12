<?php

//header('Content-Type: application/json');

$db = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
$sth = $db->query('SELECT * FROM utilisateurs');
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
