class MiNavbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
       <!-- NAVBAR -->
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" style="background-color: #000029;" data-bs-theme="light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html" style="color: white;"> <img src="imagenes/logo.png" alt="Developer"
                    width="50px" height="43px"> Developer</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" style="color: white;" aria-current="page" href="perfil.html">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="color: white;" href="certificaciones.html">Certificaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="color: white;" href="portafolio.html">Portafolio</a>
                    </li>
                </ul>
                <div id="userIconContainer" class="d-flex align-items-center"></div>
            </div>
        </div>
    </nav>
    `;
    }
}
customElements.define('mi-navbar', MiNavbar);
