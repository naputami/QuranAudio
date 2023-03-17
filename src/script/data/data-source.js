import axios from 'axios';
class DataSource {
    static searchSurah(keyword){
       return axios.get(`https://quran-api-id.vercel.app/surahs/${keyword}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            if(error.response.status == 404){
                throw new Error(`${keyword} tidak ditemukan. Pastikan keyword berupa angka dalam rentang 1-114. Silakan masukkan kembali keyword pencarian yang benar`);
            }
        });
    }
}

export default DataSource;

