// Top-level API is a simple object no need to use module.exports, we can use alias i.e exports

exports.language = 'English';

exports.direction = 'RTL';

exports.encoding = 'UTF-8';

// But when we need to use fucntion as top level API then use module.exports as using alias (exports) would not work.