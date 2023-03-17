import searchIcon from "../../img/search-icon.svg";
class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#search-kw").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            #search-kw {
                width: 25rem;
                height: 2rem;
                padding: 0.5rem;
                margin-right: 0;
                float: left;
                outline: none;
                border-radius: 0.5rem 0 0 0.5rem;
                border: 0.2rem solid var(--teal-blue);
                color: var(--black-bean);
                font-family: "Lato", "serif";
            }
            
            #go-search {
              cursor: pointer;
              background-color: var(--teal-blue);
              height: 3.4rem;
              border: none;
              margin-right: 1rem;
              width: 4.5rem;
              border-radius: 0 0.5rem 0.5rem 0;
            }

            #search-icon{
                width: 2.1rem;
                height: 2.1rem;
            }

            @media (max-width: 480px){
                #search-kw {
                    width: 18rem;
                }
                
                #go-search {
                  width: 3.8rem;
                }
                
            </style>
            <form id="search-bar">
                <input type="text" placeholder="Masukkan nomor surah (1-114)" name="search" id="search-kw" type="search">
                <button type="submit" id="go-search"><img src="${searchIcon}" id="search-icon"></button>
            </form>

        `;
        this.shadowDOM.querySelector("#go-search").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);