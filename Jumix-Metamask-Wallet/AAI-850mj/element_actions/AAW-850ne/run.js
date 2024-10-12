function(instance, properties, context){
	function _0x3378() {
    const _0x5b300e = [
        'ethereum',
        'params_value_1',
        'log',
        'package_name',
        'params_name_1',
        '792101lGiegc',
        'triggerEvent',
        'Metamask\x20is\x20not\x20installed',
        '6908967JhvcVj',
        'params_value_2',
        '3335890hzirrv',
        'request',
        '9YKRwOc',
        'params_name_3',
        'Please\x20connect\x20to\x20MetaMask.',
        '15HPieGw',
        'wallet_invokeSnap',
        '183708ZPXOUP',
        '1033212Jxoeua',
        'error',
        'code',
        'then',
        '8UqENcg',
        '33EanOPm',
        'catch',
        'params_value_3',
        '273754ASphbg',
        'params_name_2',
        'method',
        '4011413yaYkMd'
    ];
    _0x3378 = function () {
        return _0x5b300e;
    };
    return _0x3378();
}
(function (_0x51f467, _0x3a957e) {
    const _0x44d63b = _0x5f30, _0x239916 = _0x51f467();
    while (!![]) {
        try {
            const _0x407d30 = parseInt(_0x44d63b(0xcc)) / 0x1 + parseInt(_0x44d63b(0xc3)) / 0x2 * (parseInt(_0x44d63b(0xb5)) / 0x3) + parseInt(_0x44d63b(0xba)) / 0x4 * (-parseInt(_0x44d63b(0xb8)) / 0x5) + parseInt(_0x44d63b(0xbb)) / 0x6 + -parseInt(_0x44d63b(0xc6)) / 0x7 + -parseInt(_0x44d63b(0xbf)) / 0x8 * (-parseInt(_0x44d63b(0xcf)) / 0x9) + parseInt(_0x44d63b(0xd1)) / 0xa * (-parseInt(_0x44d63b(0xc0)) / 0xb);
            if (_0x407d30 === _0x3a957e)
                break;
            else
                _0x239916['push'](_0x239916['shift']());
        } catch (_0xacd038) {
            _0x239916['push'](_0x239916['shift']());
        }
    }
}(_0x3378, 0x6938e));
function _0x5f30(_0x2e5745, _0x81e0e8) {
    const _0x3378fe = _0x3378();
    return _0x5f30 = function (_0x5f3042, _0x1e5f1d) {
        _0x5f3042 = _0x5f3042 - 0xb5;
        let _0x6ce96b = _0x3378fe[_0x5f3042];
        return _0x6ce96b;
    }, _0x5f30(_0x2e5745, _0x81e0e8);
}
function run(_0x4d16ea, _0x32ae18, _0x5a17d6) {
    const _0x4ef7c9 = _0x5f30;
    if (window[_0x4ef7c9(0xc7)]) {
        let _0x4aaf59 = {};
        _0x32ae18[_0x4ef7c9(0xcb)] && (_0x4aaf59[_0x32ae18[_0x4ef7c9(0xcb)]] = _0x32ae18[_0x4ef7c9(0xc8)]), _0x32ae18['params_name_2'] && (_0x4aaf59[_0x32ae18[_0x4ef7c9(0xc4)]] = _0x32ae18[_0x4ef7c9(0xd0)]), _0x32ae18[_0x4ef7c9(0xb6)] && (_0x4aaf59[_0x32ae18[_0x4ef7c9(0xb6)]] = _0x32ae18[_0x4ef7c9(0xc2)]), window['ethereum'][_0x4ef7c9(0xd2)]({
            'method': _0x4ef7c9(0xb9),
            'params': {
                'snapId': _0x32ae18[_0x4ef7c9(0xca)],
                'request': {
                    'method': _0x32ae18[_0x4ef7c9(0xc5)],
                    'params': _0x4aaf59
                }
            }
        })[_0x4ef7c9(0xbe)](_0x32ffc3 => {
            const _0x38cb0e = _0x4ef7c9;
            _0x4d16ea[_0x38cb0e(0xcd)]('wallet_invokesnap_success');
        })[_0x4ef7c9(0xc1)](_0xa09704 => {
            const _0x14c73d = _0x4ef7c9;
            _0xa09704[_0x14c73d(0xbd)] === 0xfa1 ? console[_0x14c73d(0xc9)](_0x14c73d(0xb7)) : console[_0x14c73d(0xbc)](_0xa09704);
        });
    } else
        console['error'](_0x4ef7c9(0xce));
}
	run(instance, properties, context);
}