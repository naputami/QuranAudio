import "../elements/search-bar.js";
import "../elements/result.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const resultElement = document.querySelector("result-surah");

    const onButtonSearchClicked =  (event) => {
        event.preventDefault();
        if(!isNaN(parseInt(searchElement.value))){
            const response = DataSource.searchSurah(searchElement.value);
            response
            .then(result => renderResult(result))
            .catch(error => fallbackResult(error.message));
        } else {
            alert("Hanya dapat menerima keyword berupa angka!");
        }
       
    }

    const renderResult = result => {
        resultElement.success = result;
    }

    const fallbackResult = message => {
        resultElement.renderError(message);
    }

    searchElement.clickEvent = onButtonSearchClicked ;
};

export default main ;
