class MiFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
      <footer>
    <center>
        <table>
            <thead>
                <tr>
                    BUSCAME EN
                </tr>
                <tr>
                    <th width="40px">
                        <a href="https://www.linkedin.com/in/daniela-corea-0a3033267/"><img src="imagenes/linkedin.png" width="30px" height="30px"></a>
                    </th>
                    <th width="40px">
                        <a href="https://github.com/DanielaCorea27"><img src="imagenes/github.png" width="30px" height="30px"></a>
                    </th>
                </tr>
            </thead>
        </table>
    </center>
    Derechos reservados © 2025
</footer>
    `;
    }
}
customElements.define('mi-footer', MiFooter);