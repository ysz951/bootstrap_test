import axios from 'axios';
import config from '../config';
const  { LUMS_API_URL } = config;

class MemberRESTService {
    
    listAllMembers() {
        return axios.get(LUMS_API_URL + '/members');
    }

    lookupMemberById(id) {
        return axios.get(LUMS_API_URL + `/members/${id}`);
    }

    modifyUserRole(id, adminId, newRole) {
        const params = new URLSearchParams({
            adminId: adminId,
            newRole: newRole
        });
        return axios.post(LUMS_API_URL + `/members/${id}/modify_role` + '?' + params);
    }

    createMember(member) {
        return axios.post(LUMS_API_URL + '/members', member)
    }
    
}


export default new MemberRESTService();