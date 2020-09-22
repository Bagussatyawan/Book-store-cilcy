import axios from 'axios'

export const register = newUser => {
    return axios
        .post('/api/v1/auth/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            level: newUser.level
        })
        .then(res => {
            console.log("Registered")
        })
};

export const login = user => {
    return axios
        .post('/api/v1/auth/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            //console.log(res.data)
            localStorage.setItem('usertoken', res.data.data.access_token)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
};