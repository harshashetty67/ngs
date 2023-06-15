console.dir(global, { depth: 0 }); // 'global' object in NodeJS is like the window object in browser, its available throughout the node scope.

/* global obj has some functions associated with it that we can use globally.
 - Like setTimeout(), setInterval() => these are actually global.setTimeout() and global.setInterval(), but we use shorthand. 
 */
