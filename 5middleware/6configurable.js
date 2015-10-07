//configurable middleware creator
function greeter(message) {
    return function (req, res, next) {
        res.end(message);
    };
}

var helloWorldGreeter = greeter('Hello world!');
var heyThereGreeter = greeter('Hey there!');

var connect = require('connect');
conect()
    .use('/hello', helloWorldGreeter)
    .use('/hey', heyThereGreeter)
    .listen(3000);