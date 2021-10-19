import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e67da7e5-9450-4b5e-b59e-639ce44286a4"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    
    },
    follow(userId) {
        return instance.post('follow/' + userId)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

