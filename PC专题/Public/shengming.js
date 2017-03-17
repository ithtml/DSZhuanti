document.writeln("<div class=\'banquan\' style=\'position: fixed;left: 0;bottom: 0;z-index: 9999;\'><img src=\'/images/banquan.jpg\' alt=\'\'><div class=\'close\'><img class=\'closew\' src=\'//ad.11dn.net/Public/Tpl/img/inviteClose.png\' alt=\'\' style=\'position: absolute;right: 0;top: 0;cursor:pointer;\'></div></div>");

$(document).ready(function(){
  $(".closew").click(function(){
    $(".banquan").hide();
  });
});