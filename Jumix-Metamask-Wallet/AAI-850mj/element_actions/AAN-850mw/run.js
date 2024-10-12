function(instance, properties, context){
	function _0x211a() {
    var _0x4bfe31 = [
        'wallet_requestSnaps',
        '2772075KITMZB',
        '4624236sDanAc',
        'version',
        'package_name',
        '686428GsxwMn',
        'Please\x20connect\x20to\x20MetaMask.',
        'code',
        'catch',
        '497459ZKWbWW',
        'request',
        'version_snap_install',
        '6127625ORdHHs',
        '112rEDCed',
        '755222hskfYf',
        '20JwOWGz',
        'Metamask\x20is\x20not\x20installed',
        'triggerEvent',
        'publishState',
        '1854459wcGTJa',
        'log',
        'error'
    ];
    _0x211a = function () {
        return _0x4bfe31;
    };
    return _0x211a();
}
(function (_0x219827, _0x2a5ad0) {
    var _0x263055 = _0x54e3, _0x50555c = _0x219827();
    while (!![]) {
        try {
            var _0x38cbfb = parseInt(_0x263055(0x17a)) / 0x1 + -parseInt(_0x263055(0x17f)) / 0x2 + parseInt(_0x263055(0x172)) / 0x3 + -parseInt(_0x263055(0x176)) / 0x4 * (-parseInt(_0x263055(0x180)) / 0x5) + parseInt(_0x263055(0x173)) / 0x6 + parseInt(_0x263055(0x17d)) / 0x7 + -parseInt(_0x263055(0x17e)) / 0x8 * (parseInt(_0x263055(0x16e)) / 0x9);
            if (_0x38cbfb === _0x2a5ad0)
                break;
            else
                _0x50555c['push'](_0x50555c['shift']());
        } catch (_0x54e637) {
            _0x50555c['push'](_0x50555c['shift']());
        }
    }
}(_0x211a, 0x78094));
function _0x54e3(_0xa45f4f, _0xd10a8c) {
    var _0x211ad7 = _0x211a();
    return _0x54e3 = function (_0x54e348, _0x4971c4) {
        _0x54e348 = _0x54e348 - 0x16d;
        var _0x137c87 = _0x211ad7[_0x54e348];
        return _0x137c87;
    }, _0x54e3(_0xa45f4f, _0xd10a8c);
}
function run(_0xe25645, _0x3f2fcb, _0x4d10a9) {
    var _0x150c69 = _0x54e3;
    window['ethereum'] ? window['ethereum'][_0x150c69(0x17b)]({
        'method': _0x150c69(0x171),
        'params': { [_0x3f2fcb['package_name']]: { 'version': _0x3f2fcb[_0x150c69(0x174)] } }
    })['then'](_0x28ca85 => {
        var _0x438d5f = _0x150c69;
        _0xe25645[_0x438d5f(0x16d)](_0x438d5f(0x17c), _0x28ca85[_0x3f2fcb[_0x438d5f(0x175)]][_0x438d5f(0x174)]), _0xe25645[_0x438d5f(0x182)]('snap_connected');
    })[_0x150c69(0x179)](_0x27dd70 => {
        var _0x44ad11 = _0x150c69;
        _0x27dd70[_0x44ad11(0x178)] === 0xfa1 ? console[_0x44ad11(0x16f)](_0x44ad11(0x177)) : console['error'](_0x27dd70);
    }) : console[_0x150c69(0x170)](_0x150c69(0x181));
}
	run(instance, properties, context);
}