export const headerComponent = 
`<header class="fixed-top">
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid d-flex justify-content-between">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="">
                <a class="navbar-brand mt-2 mt-lg-0" href="#">
                    <img src="img/Logo.png" alt="Trabalho2 Logo" loading="lazy" />
                </a>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex w-100">
                <input class="new-form-control rounded-end-0 " type="pesquisar" placeholder="Pesquisar"
                    aria-label="pesquisar">
                <button class="rounded-end none-border bg-medium-pink w-3r" type="submit"><i data-feather="search"
                        class="text-white"></i></button>
            </form>
        </div>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <div class="d-flex align-items-center ">
                <a class="color-darkpink text-decoration-none">Entrar</a>
                <div class="dropdown">
                    <a class="dropdown-toggle d-flex align-items-center hidden-arrow mx-3" href="#"
                        id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
                        aria-expanded="false">
                        <img src="img/avatar.jpg" class="rounded-circle border" height="50" alt="Avatar"
                            loading="lazy" />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                        <li>
                            <a class="dropdown-item" href="#">My profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="dropdown">
                <a class="text-reset me-3 dropdown-toggle hidden-arrow " href="#" id="navbarDropdownMenuLink"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i data-feather="shopping-bag" class="color-darkpink"></i>
                    <span class="badge rounded-pill badge-notification bg-soft-pink">1</span>
                </a>
            </div>
        </div>
    </div>
</nav>
<div class="bg-medium-pink">
    <ul class="list-unstyled d-flex justify-content-evenly text-white ">
        <li><a href="#" class="category">ACESSÓRIOS</a></li>
        <li><a href="#" class="category">LÁBIOS</a></li>
        <li><a href="#" class="category">ROSTO</a></li>
        <li><a href="#" class="category">OLHOS</a></li>
        <li><a href="#" class="category">SKINCARE</a></li>
        <li><a href="#" class="category">KITS</a></li>
    </ul>
</div>

</header>
`