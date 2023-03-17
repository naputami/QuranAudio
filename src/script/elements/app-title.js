class AppTitle extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                background-color: var(--burnt-orange);
                width: 100%;
                position: fixed;
                top: 0;
                height: 9%;
            }
            
            h1 {
                font-size: 4rem;
                color: var(--black-bean);
                font-weight: bold;
                font-family: "Roboto", "serif";
                padding-top: 1rem;
                padding-left: 1rem;
            }

            @media(max-width: 900px){
                :host {
                    height: 7%;
                }
            }

            @media(max-width: 480px){
                :host {
                    height: 5%;
                }
                
                h1 {
                    font-size: 2.5rem;
                    padding-top: 0.3rem;
                    padding-left: 0.3rem;
                }
            }
            </style>
            <h1>Quran Audio</h1>
        `;
    }
}

customElements.define("app-title", AppTitle);