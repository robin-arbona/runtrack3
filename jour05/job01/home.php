<?php if (session_status() !== PHP_SESSION_ACTIVE) session_start(); ?>
<?php if (isset($_SESSION['user'])) : ?>
    <p>Bonjour <?= $_SESSION['user']['nom'] ?></p>
    <input type="button" value="Deconnexion" id="disconnect">
<?php else : ?>
    <div id="menuHolder">
        <input type="button" value="Connexion" id="connexionPage">
        <input type="button" value="Inscription" id="inscriptionPage">
    </div>
    <div id="pageHolder">
    </div>
<?php endif; ?>