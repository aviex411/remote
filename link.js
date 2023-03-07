//<![CDATA[
    var go_current = window.location.href;
    var reff = document.referrer;
    function rChoice(arr) { return arr[Math.floor(arr.length * Math.random())]; }
    var direct_link_ads = rChoice([ "https://deterrentpainscodliver.com/r8mv2dv89p?key=675473ef31a8dc47cbb95b95a6cf9bd1", "https://deterrentpainscodliver.com/cb3yh0vp?key=ff17dd66f144c9303ad63a6cef1e01ed", "https://deterrentpainscodliver.com/n7sqp6kh?key=e6dd02bc5dbf461b97a9da08df84d31c", "https://deterrentpainscodliver.com/yqgre28v37?key=35e142a862ac90e9f5adbbc9508f3252", "https://deterrentpainscodliver.com/razghgae?key=2446a4582c544b26b2b0aa5d06de9853", ]);
    var ars = rChoice(["#YOUR_ARSAE_SERVER_OR_OTHER_DOMAIN_1"]);
    var dir_type = "refresh"; //refresh, domain, path, arsae
    if(dir_type == 'refresh')
        { console.log('refresh..'); }
    else if(dir_type == 'domain')
        { go_current = ars; }
    else if(dir_type == 'path')
        { var pre_current   = ars + window.location.pathname; go_current = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1"; }
    else if(dir_type == 'arsae')
        { go_current = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff); }
//]]>
