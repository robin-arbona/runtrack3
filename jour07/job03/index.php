<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="script.js" type="text/javascript"></script>

    <title>Hello, world!</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LPTF</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Units</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid bg-secondary pb-5">
        <div class="row">
            <h1 class="text-center">LaPlateforme_</h1>
        </div>
        <div class="row justify-items-center">
            <div class="col-12 mb-3">
                <div class="card">
                    <img src="unnamed.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Un papillon</h5>
                        <p class="card-text">Un papillon, c'est un peu comme une chenille, mais avec des ailes. Ne pas ingerer</p>
                        <a id="buttonModal" href="#" class="btn btn-primary">Commander votre propre papillon</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-md-6 pt-4 pb-4 bg-light rounded mb-3">
                <main id="main-content">
                    <?php require('home.php') ?>
                </main>
                <div class="d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li id="page-previous" class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li id="page-1" class="page-item"><a class="page-link" href="#">1</a></li>
                            <li id="page-2" class="page-item"><a class="page-link" href="#">2</a></li>
                            <li id="page-3" class="page-item"><a class="page-link" href="#">3</a></li>
                            <li id="page-next" class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>
            <div class="col-sm-3 col-md mb-3">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        Limbes
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Luxure</a>
                    <a href="#" class="list-group-item list-group-item-action">Gourmandise</a>
                    <a href="#" class="list-group-item list-group-item-action">Avarice</a>
                    <a href="#" class="list-group-item list-group-item-action">Colere</a>
                    <a href="#" class="list-group-item list-group-item-action">Heresie</a>
                    <a href="#" class="list-group-item list-group-item-action">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action">Ruse et Tromperie</a>
                    <a href="#" class="list-group-item list-group-item-action">Trahison</a>
                    <a href="#" class="list-group-item list-group-item-action">Internet Explorer</a>
                </div>
            </div>

        </div>
        <div>
            <div class="row mb-3">
                <div class="offset-3 col-6 ">
                    <p class="lead text-end"><strong>Installation de AI 9000</strong></p>
                    <div class="d-flex ju">
                        <button id="progress-minus" class='btn'>-</button>
                        <div class="col-12 progress">
                            <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
                        </div>
                        <button id="progress-plus" class='btn'>+</button>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-4 offset-1">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input id="input-1" type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                        <input id="input-2" type="text" class="form-control" placeholder="Mot de Passe" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>

                    <label for="basic-url" class="form-label">URL des Internets 2 et 2.1 Beta</label>


                    <div class="input-group mb-3">
                        <span class="input-group-text">DogeCoin</span>
                        <input id="input-3" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text">.00</span>
                    </div>

                    <div class="input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea id="input-4" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="col-2 offset-3">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input id="email" type="email" class="form-control" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input id="password" type="password" class="form-control">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button id="submitForm" type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>

        </div>
    </div>
    <div id="myModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Achat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Voulez vous vraiment acheter un papillon</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">non</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalForm" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Achat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="modalForm-body" class="modal-body">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">non</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    -->
    <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
</body>

</html>