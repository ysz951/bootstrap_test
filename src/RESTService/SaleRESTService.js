import axios from 'axios';
import config from '../config';
const  { LUMS_API_URL } = config;

class SaleRESTService {
    
    listAllSales() {
        return axios.get(LUMS_API_URL + '/sale');
    }

    createNewSale(sale) {
        return axios.post(LUMS_API_URL + '/sale', sale);
    }

    changeSaleActive(id, newActive) {
        return axios.put(LUMS_API_URL + `/sale/active/${id}/${newActive}`);
    }

    changeSaleExpiration(id, year, month, day) {
        const params = new URLSearchParams({
            year: year,
            month: month,
            day: day
        });
        return axios.put(LUMS_API_URL + `/sale/set/${id}/expirationdate` + '?' + params);
    }

    checkSaleExpiration() {
        return axios.put(LUMS_API_URL + `/sale/expiration`);
    }
    
}


export default new SaleRESTService();