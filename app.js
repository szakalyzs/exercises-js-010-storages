'use strict';

import cookieManipulator, { setCookie } from './main.js';

setCookie();
console.log(cookieManipulator.readCookies());
document.body.innerHTML = cookieManipulator.readCookies()[0].viewed;