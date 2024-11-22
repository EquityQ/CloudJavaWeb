const config = {
    baseUrl: 'http://localhost:8081',
    api: {
        captcha: '/captcha',
        login: '/user/login',
        register: '/user/register',
        logout: '/user/logout',
        getUserInfo: '/user/getinfo',
        authToken:'/user/token-auth',
        ip: '/ip',
        ShopInfo: "/element/info",
        code: '/user/code',
        selectUser:"/user/select-info",
        deleteUser:"/user/delete",
        updateUser:"/user/change",
        deleteShop:"/element/delete",
        uploadImg:"/img/base64",
        updateShop:"/element/change",
        insertShop:"/element/insert",
    },
    apiUrl: '/api'
}
export default config