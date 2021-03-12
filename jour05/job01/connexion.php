<?php if (!isset($_POST['nom']) || !isset($_POST['password'])) : ?>
    <input type="text" name="nom" id="nom" placeholder="nom">
    <input type="password" name="password" id="password" placeholder="password">
    <input type="button" value="Connexion" id="connexionValidation">
<?php else :
    $db = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
    $nom = $_POST['nom'];
    $password = $_POST['password'];
    $response = [
        'connected' => false,
        'message' => 'Wrong username'
    ];

    $sth = $db->prepare('SELECT * FROM utilisateurs WHERE nom = :nom');
    $sth->bindParam(':nom', $nom);
    $sth->execute();
    $result = $sth->fetch(PDO::FETCH_ASSOC);
    if (!(empty($result))) {
        if (password_verify($password, $result['password'])) {
            $response['connected'] = true;
            $response['message'] = 'Connexion is a pure succes';
            unset($result['password']);
            session_start();
            $_SESSION['user'] = $result;
        } else {
            $response['message'] = 'Wrong password';
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
endif;
