import axios from 'axios';
import config from '../config';
const  { LUMS_API_URL } = config;

class LicenseRESTService {
    createLicense(license) {
        return axios.post(LUMS_API_URL + '/license', license);
    }

    purChaseLicense(id, userId) {
        const params = new URLSearchParams({
            userId: userId
        });
        return axios.post(LUMS_API_URL + `/license/${id}/purchase` + "?" + params);
    }

    setLicensePrice(id, price) {
        return axios.post(LUMS_API_URL + `/license/price/${id}/${price}`);
    }
    listAllLicense() {
        return axios.get(LUMS_API_URL + '/license');
    }
}


export default new LicenseRESTService();