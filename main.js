'use strict';

// 1. feladat ---------------------------
const setCookie = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const expTime = new Date();
    expTime.setTime(expTime.getTime() + 15 * 60 * 1000);
    document.cookie = `token = ${token}; expires = ${expTime}; path = /`;
}

//2. feladat -----------------------------
document.cookie = 'viewed = 5; expires = Fri, 01 Jan 2021 12:00:00 UTC; path = /';
document.cookie = 'uid = 354774631237; expires = Fri, 01 Jan 2021 12:00:00 UTC; path = /';
document.cookie = 'ssid = Bx55OWbHJ0Vt_IGIFÍ; expires = Fri, 01 Jan 2021 12:00:00 UTC; path = /';
const cookieManipulator = {
    readCookies() {
        const cookieArray = document.cookie
            .split('; ')
            .map(item => item.split('='))
            .map(item => ({ [item[0]]: item[1] }));
        return cookieArray;
        // array of object
    },
    cookiesToSessionStorage() {
        const cookieArray = this.readCookies();
        cookieArray.forEach(element =>
            sessionStorage.setItem(Object.keys(element), JSON.stringify(element)));
    },
    deleteCookies() {
        const cookieArray = this.readCookies();
        cookieArray.forEach(element =>
            document.cookie = `${Object.keys(element)} = ''; expires = Thu, 01 Jan 1970 00:00:00 UTC; path = /;`);
    }
}
/* console.log(cookieManipulator.readCookies());
sessionStorage.clear;
cookieManipulator.cookiesToSessionStorage();
cookieManipulator.deleteCookies(); */

//3. feladat --------------------------------







export { setCookie };
export default cookieManipulator;