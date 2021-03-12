<?php if (!isset($_POST['inscription'])) : ?>
    <input type="text" name="nom" id="nom" placeholder="nom">
    <input type="text" name="prenom" id="prenom" placeholder="prenom">
    <input type="email" name="email" id="email" placeholder="email">
    <input type="password" name="password" id="password" placeholder="password">
    <input type="button" name="inscription" value="Inscription" id="inscriptionValidation">
<?php else :
    header('Content-Type: application/json');

    $db = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $SQL = 'INSERT INTO `utilisateurs`(`nom`, `prenom`, `email`, `password`) 
            VALUES (:nom,:prenom,:email,:password)';

    $response["error"] = '';
    foreach ($_POST as $key => $value) {
        if ($value == '') {
            $response["state"] = false;
            $response["error"] .= "Le champ $key n'est pas renseigné. ";
        }
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $response["state"] = false;
        $response["error"] .= "Le format de l'email est incorrect. ";
    }

    if ($response["error"] != '') {
        exit(json_encode($response));
    }

    try {
        $response["state"] = $db->prepare($SQL)->execute([
            "nom" => $_POST['nom'],
            "prenom" => $_POST['prenom'],
            "email" => $_POST['email'],
            "password" => password_hash($_POST['password'], PASSWORD_DEFAULT)
        ]);
    } catch (Exception $e) {
        $response["state"] = false;
        $response["error"] = $e->getMessage();
    }



    echo json_encode($response);

endif;
