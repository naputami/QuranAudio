import logo from "../../img/home.png";
class WelcomeElement extends HTMLElement{
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
                display: grid;
                grid-template-rows: repeat(2, max-content);
                margin-top: 10rem;
                align-items: center;
                justify-items: center;
                margin-bottom: 1rem;
            }
            
           img {
                width: 20rem;
            }
            
           h2 {
                font-size: 2.5rem;
                padding: 1rem;
                color: var(--smoky-black);
                font-family: "Lato", "serif";
                text-shadow: 1px 0px 8px rgba(255, 255, 255, 1);
            }

            @media(max-width: 900px){  
                :host {
                    margin-top: 12rem;
                }
            }

            @media(max-width: 480px){  
                :host {
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 1.5rem;
                }
            
                img {
                    width: 15rem;
                }
                
                h2 {
                    font-size: 1.8rem;
                    text-align: center;
                    padding: 0.5rem;
                }
            }

            </style>
            <img src="${logo}" alt="qur'an logo"/>
            <h2>Unduh audio Al-Quran pilihan Anda dengan mudah</h2>
        `;
    }
}

customElements.define("welcome-element", WelcomeElement);