connect()
    .use('/admin', auth)
    .use('/admin', function (req, res) { res.end('Authorized!'); })
    .use(function (req, res) { res.end('Public')})
    .listen(3000);