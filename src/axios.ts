import axios from 'axios'

enum ApiHeader {
    AB_DOMAIN = "adm",
    APP = "10",
}

const axiosNew = axios.create({
    baseURL: 'https://manager-teste.alibin.io',
    headers: { "ab-domain": ApiHeader.AB_DOMAIN, app: ApiHeader.APP },
})

export default axiosNew