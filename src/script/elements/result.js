import downloadIcon from "../../img/download-icon.svg";
class Result extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set success(surah){
        this._surah = surah;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                background-color: white;
                width: 50%;
                padding: 1rem;
                border-left: 2rem solid var(--teal-blue);
                border-radius: 0.5rem;
            }
            
            .surah-title {
                font-size: 3rem;
                font-family: "Lato", "serif";
                color: var(--teal-blue);
                margin-bottom: 0.5rem;
            }
            
            .surah-data {
                font-size: 1.5rem;
                font-family: "Nunito Sans", "sans-serif";
                color: var(--black-coral);
                display: flex;
                justify-content: flex-start;
                margin-bottom: 1rem;
            }
            
            .surah-data p:not(:first-child) {
                margin-left: 0.5rem;
            }
            
            .surah-description {
                font-size: 1.5rem;
                font-family: "Nunito Sans", "sans-serif";
                color: var(--black-bean);
                margin-bottom: 1.5rem;
                line-height: 1.8rem;
                text-align: justify;
            }
            
            #download {
                width: 13rem;
                text-align: center;
                height: 3.4rem;
                background-color: var(--black-coral);
                border: none;
                border-radius: 0.5rem;
                font-family: "Lato", "sans-serif";
                font-size: 1.5rem;
                padding: 0.3rem;
            }
            
            #download a {
                text-decoration: none;
                color: white;
            }
            
            #download-icon {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
            }
            
            #download:hover {
                background-color: var(--teal-blue);
            }
            
            #download a:visited {
                text-decoration: none;
                color: white;
            }

            @media (max-width: 480px){                
                :host {
                    width: 70%;
                    padding: 0.7rem;
                }
                
                .surah-title {
                    font-size: 2rem;
                    margin-bottom: 0.3rem;
                }
                
                .surah-data {
                    font-size: 1.1rem;
                    margin-bottom: 0.8rem;
                }
            
                .surah-description {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    line-height: 1.5rem;
                }
            
                #download {
                    width: 11rem;
                    text-align: center;
                    height: 3rem;
                    background-color: var(--black-coral);
                    border: none;
                    border-radius: 0.5rem;
                    font-family: "Lato", "sans-serif";
                    font-size: 1.25rem;
                    padding: 0.1rem;
                }
            
            }
            </style>
            <h2 class="surah-title">${this._surah.name}</h2>
                <div class="surah-data">
                    <p>${this._surah.translation}</p>
                    <p>|</p>
                    <p>${this._surah.revelation}</p>
                    <p>|</p>
                    <p>${this._surah.numberOfAyahs} ayat</p>
                </div>
                <div class="surah-description">
                    <p>${this._surah.description}</p>
                </div>
                <div class="surah-audio">
                    <button id="download"><a href="${this._surah.audio}" target="_blank"><img src="${downloadIcon}" id="download-icon">Unduh Audio</a></button>
                </div>
        `;

    }

    renderError(message){
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    background-color: white;
                    width: 50%;
                    padding: 1rem;
                    border-left: 2rem solid var(--teal-blue);
                    border-radius: 0.5rem;
                }

                .errornotif {
                    font-size: 2rem;
                    text-align: center;
                    color: var(--teal-blue);
                    font-family: "Nunito Sans", "serif";
                }
                
                @media (max-width: 480px){                
                    :host {
                        width: 70%;
                        padding: 0.7rem;
                    }
                    .errornotif {
                        font-size: 1.5rem;
                    }

            </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="errornotif">${message}</h2>`;
    }


}

customElements.define("result-surah", Result);