// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.zoho.eu/zm/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var dom = document.createElement('style'),
    dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = '.zmNightMode { --zcsettings-crm-cal-color: #e6e6e6; --zcsettings-progress-text-color: #bbbbbb; --zcsettings-preprogress-text-color: rgb(123, 123, 123); --zcsettings-progress-status-alert: #7c60a3; --zcsettings-crm-hr-color: #292929; } .zmThmRed { --themeColor: #7c60a3; --themeColorRGB: 124, 96, 163; --newButtonBG: #7c60a3; --themeButtonBG: #7c60a3; --actionColor: #7c60a3; --unreadIconColor: #7c60a3; --treeTitleColor: #634c82; --newButtonColor: #FFF; --themeButtonColor: #FFF; --themeButtonHoverBG: #7c60a3; --themeBorderButtonHoverBG: #fff4f4; --themeLightBG: #fff4f4; --selectedListBG: #ffe8e8; --themeColorLight: #ffe8e8; --ddHoverBG: #ffe8e8; --themeColorLightRGB: 255, 232, 232; --mailAssocitaedIndication: #7c60a3; --app-theme-color: #7c60a3; --app-theme-color-rgb: 255, 89, 92; --app-theme-color-dark: #7c60a3; --app-theme-color-light: #fff4f4; --app-list-selected-bg: #ffe8e8; --app-theme-button-text-color: #FFF; } \
    #wms_menubar { background-color: #16171e !important; } .zmNightMode .SC_pv, .zmNightMode .zmWorkSpace { background-color: #1e1f29; border: none !important; } .zmNightMode .zmRhsBar { background-color: #1e1f29; } .zmNightMode .wms-menu, .zmNightMode .wms-chatwindowcontainer, .zmNightMode .wms_cw, .zmNightMode .wms_menubar { box-shadow: 0 0 7px #1e1f29; } .zmNightMode .wms-mainui { background-color: #1e1f29; border: none; } body.zmNightMode { background-color: #1e1f29 !important; } .zmNightMode .wms_menubar::after { background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); } \
    .zmNightMode:not(.zmThmNight) .zmSearch:not(.zmSActive) { border: none !important; background-color: #0004 !important; } .zmNightMode .zmSearch.zmSActive { background-color: #1e1f29; } .zmNightMode .zmSearch.zmSFocus { border-color: #0004; box-shadow: 0 4px 6px rgba(0, 0, 0, .5); } \
    .zmNightMode:not(.zmThmNight) .SC_Phr li:not(.nohr):hover, .zmNightMode:not(.zmThmNight) .SC_Psli:hover, .zmNightMode:not(.zmThmNight) .SC_ctdtl li:hover, .zmNightMode:not(.zmThmNight) .SC_dd li.sel, .zmNightMode:not(.zmThmNight) .zmScAtt:hover, .zmNightMode:not(.zmThmNight) .zmScSwitch li:hover { background-color: #0004 !important; color: #fff !important; } \
    .zmNightMode .zmTtab li.activeTab, .zmNightMode .zmTtab li.activeTab::before { background-color: #16171e; } .zmNightMode .zmTtab li.activeTab > span::before { background: -moz-linear-gradient(right, #16171e 0, #16171e 20%, rgba(46, 45, 41, 0) 100%) !important; background: -webkit-linear-gradient(right, #16171e 0, #16171e 20%, rgba(46, 45, 41, 0) 100%) !important; background: linear-gradient(to left, #16171e 0, #16171e 20%, rgba(46, 45, 41, 0) 100%) !important; } \
    .redBadge.bgBadge { background-color: #7c60a3; color: #fff; } .zmAnnounceUnreadDot { border-radius: 50%; border-width: 1px; border-style: solid; height: .5rem; width: .5rem; background-color: #7c60a3; } .zmNightMode .zmRhsNav li i.msi-meetingApp { background-color: #1e1f29; border-color: #0004; color: #999; } \
    .zmNightMode:not(.zmThmNight) .zmCollapseLhs { background-color: #1e1f29 !important; } .zmLHSNight { --lhsBG: #1e1f29; --lhsTHBG: #1e1f29; --lhsTSBG: #1e1f29; --lhsTClr: #b3b3b3; --lhsTSClr: #e6e6e6; --appCenterBdr: #1a1917; --notiBadgeIconShadowClr: #151411; --appBarClr: #f2eee6; --topBarIconClr: #999; --popAccBdr: rgba(#FFF, 0.15); --tabBG: #1e1f29; --tabHBG: #1e1f29; --tabClr: #bb33bb; --searchBG: 179, 179, 179; --accSwitchBg: #324154; --accSwitchBdr: #2a3647; --accSwitchOpenBdr: #2a3647; --accImgClr: #ddd; --accImgBg: #666666; --onBoardImgUrl: \'../images/streamsBoarding/ballon-d.c91d617436df8cd37e9ac2daacc72fc2.png\'; } .zmNightMode { --app-bg: #1e1f29; --app-border-color: #1e1f29; --app-list-border-color: #272727; --app-list-hover-bg: #383835; --app-dd-border-color: rgba(242, 242, 242, 0.3); --app-grey-color: #787878; --app-disabled-color: rgba(242, 242, 242, 0.38); --app-disabled-bg: #292825; } .zmNightMode { color: #bbb; }\
    .zmNightMode:not(.zmThmNight) .zmCurTree { background-color: #0004 !important; } .zmNightMode:not(.zmThmNight) .zmTreeNode:hover { background-color: #0003 !important; } .zmNightMode .zmList.zmLHvr, .zmNightMode .zmList:hover { background-color: #0004; } .zmNightMode:not(.zmThmNight) .notiSel .zmNotiListData, .zmNightMode:not(.zmThmNight) .zmLSlct, .zmNightMode:not(.zmThmNight) .zmList.zmLSlct:hover, .zmNightMode:not(.zmThmNight) .zmNotiList.notiSel .zmNotiListData { background-color: #0004 !important; } .zmNightMode .zmCAt .zmL.SC_Pbar, .zmNightMode .zmPAtt .zmL.zmAch { background-color: #0004; } .zmNightMode .zmCommentBox { background-color: #0004; border-color: #0005; } .zmNightMode .SC_arm { background-color: #1e1f29; border-color: #0004; } .zmNightMode .SC_arm.bt::before, .zmNightMode .SC_arm.btl::before, .zmNightMode .SC_arm.btr::before { border-top-color: #1e1f29; }\
    .zmNightMode .zmLTct span { background-color: #0004; border-color: #0004; } .zmNightMode .zmLblGrp.zmViewLblName .zmLbl { background-color: #0004; border-color: #0004; }\
    .zmNightMode .SCmc>.zmListInfoBox {background-color: #1e1f29;border-bottom-color: #0004;}\
    \
    \
    \
    '
    dom_body.appendChild(dom);

})();
