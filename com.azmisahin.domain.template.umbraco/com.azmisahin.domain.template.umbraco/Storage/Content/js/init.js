﻿/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Web Application
    * 
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Copyright bilgi@azmisahin.com
    * Licence (https://github.com/azmisahin)
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
var base = {
    Host: document.location.hostname
    , Origin: document.location.origin
    , Protocol: 'https'
    , Base: ''
    , Area: 'Storage'
    , Version: new Date().getTime()
};

head.load
    (
    'https://code.jquery.com/jquery-2.1.4.min.js'
    , 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'
    , 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
    , 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'

    , base.Origin + '/' + base.Area + '/content/css/application.css' + '?v=' + base.Version
    , base.Origin + '/' + base.Area + '/content/js/application.js' + '?v=' + base.Version
    );

if (head.browser.ie && head.browser.version < 9) {
    head.load(
        'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js',
        'https://oss.maxcdn.com/respond/1.4.2/respond.min.js',
        'http://html5shiv.googlecode.com/svn/trunk/html5.js'
        );
    if (head.screen.innerWidth > 800) {
        head.load
            (
            'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'
            , 'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js'

            , base.Origin + '/' + base.Area + '/content/js/application.mobile.js' + '?v=' + base.Version
            );
    }
}
