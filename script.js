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

$(function () {
  if (iOS()) {
      window.location = "https://staging.app.hoshu.co.jp/.well-known/apple-app-site-association";
  }
  if (android()) {
    window.location = "https://staging.app.hoshu.co.jp/.well-known/assetlinks.json";
}
})