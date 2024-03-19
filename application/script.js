function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function android() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    return isAndroid
}

function window() {
    var ua = navigator.userAgent.toLowerCase();
    var isWindow = ua.indexOf("window") > -1;
    return isWindow
}

$(function () {
  if (iOS()) {
    window.location = "https://apps.apple.com/us/app/hoshu/id1663394441";
  }
  if (android()) {
    window.location = "https://play.google.com/store/apps/details?id=jp.co.hoshu";
  }
  if (window()) {
    window.location = "ms-windows-store://pdp/?productid=XP99DGJH0DLM38";
  }
});