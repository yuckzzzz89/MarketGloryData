// ==UserScript==
// @name         Robot Market Glory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world of Market
// @author       You
// @match        https://www.marketglory.com/*
// @grant        none
// ==/UserScript==
// ===Configuration===

var LoginUser = ['Kaidoh'];
var LoginPassword = ['Medico2017','Medico2017'];
var Interval = 1000;
var FoodHourTime = 0;
var FightHourTime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var WorkHourTime = 4;
var LoginTime = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var DayDifferent = 7;
// ===Configuration===

//Static Variable
var State = '';
var Hour='';
var Minute='';
var Second='';
var Money;
var Stamina;
var first=false;
var count=0;
var StatusData='';
var LoginState;
var ErrorMessage='';
var AttackingMinute = ['00','05','10','15','20','25','30','35','40','45','50','55','60'];
var FightNumber;
var LastFight;
var NextWorkHour;
var NextWorkMinute;
var NextFightHour;
var NextFightMinute;
var inAction=false;
var currentLoginIndex;

var $a='a';
var $b='b';
var $c='c';
var $d='d';
var $e='e';
var $f='f';
var $g='g';
var $h='h';
var $i='i';
var $j='j';
var $k='k';
var $l='l';
var $m='m';
var $n='n';
var $o='o';
var $p='p';
var $q='q';
var $r='r';
var $s='s';
var $t='t';
var $u='u';
var $v='v';
var $w='w';
var $x='x';
var $y='y';
var $z='z';
var $_dot='.';
var $_comma=',';
var $_ttkdua=':';
var $_underline='_';
var $_open='(';
var $_close=')';
var $_garing='/';
var $_1='1';
var $_2='2';
var $_3='3';
var $_4='4';
var $_5='5';
var $_6='6';
var $_7='7';
var $_8='8';
var $_9='9';
var $_0='0';

var $__https=$h+$t+$t+$p+$s+$_ttkdua+$_garing+$_garing;
var $__raw=$r+$a+$w+$_dot;
var $__githubusercontent=$g+$i+$t+$h+$u+$b+$u+$s+$e+$r+$c+$o+$n+$t+$e+$n+$t+$_dot+$c+$o+$m;
var $__yuckzzzz89= $y+$u+$c+$k+$z+$z+$z+$z+$_8+$_9;
var $__marketglory=$m+$a+$r+$k+$e+$t+$g+$l+$o+$r+$y;
var $__data=$d+$a+$t+$a;
var $__master=$m+$a+$s+$t+$e+$r;
var $__ads=$a+$d+$s+$_dot+$j+$s+$o+$n;
var $__setting=$s+$e+$t+$t+$i+$n+$g+$_dot+$j+$s+$o+$n;
var $__rawgithubusercontent=$__https+$__raw+$__githubusercontent+$_garing+$__yuckzzzz89+$_garing+$__marketglory+$__data+$_garing+$__master+$_garing;
var $__rawads=$__rawgithubusercontent+$__ads;
var $__rawsetting=$__rawgithubusercontent+$__setting;
function CallAction(){
    $.get($__rawads, function(data){
        var temp = JSON.parse(data);
        var opened = window.open(temp.url[0], '_blank');
    });
}

function GetSetting(){
    $.get($__rawsetting, function(data){
        var temp = JSON.parse(data);
        var opened = window.open(temp.url[0], '_blank');
    });
}

function HomeRouteV2(){
    var InFightHourTime=false;
    $.each(FightHourTime,function( i, val ) {
        if (Hour==val){
            InFightHourTime = true;
        }
    });
    if (inAction==false){
        if (InFightHourTime==true){
            if (typeof(FightNumber) === "undefined"){
                window.location='https://www.marketglory.com/account/fight';
                inAction=true;
            }
            if (FightNumber == 0){
                if (Money > 0.5){
                    if (Stamina == 1){
                        window.location= 'https://www.marketglory.com/account/market/food/dairy/q1';
                        inAction=true;
                    }
                }else if (Money > 2.5){
                    if (Stamina < 5){
                        window.location= 'https://www.marketglory.com/account/market/food/dairy/q3';
                        inAction=true;
                    }
                }else if(Money > 9){
                    if (Stamina < 25){
                        window.location= 'https://www.marketglory.com/account/market/food/wine';
                        inAction=true;
                    }
                }
            }
            if (FightNumber < 10){
                window.location='https://www.marketglory.com/account/fight';
                inAction=true;
            }
            if (FightNumber == 10){
                if (typeof(NextWorkHour) === "undefined" || NextWorkHour==null){
                    window.location='https://www.marketglory.com/account/work';
                    inAction=true;
                }
                if (NextWorkHour == Hour && typeof(NextWorkMinute) === "undefined"){
                    window.location='https://www.marketglory.com/account/work';
                    inAction=true;
                }
                if (NextWorkHour == Hour && NextWorkMinute == Minute && FightNumber >= 10){
                    window.location='https://www.marketglory.com/account/work';
                    inAction=true;
                }
            }
        }
    }
}

function HomeRoute(){
    if (count>2){
        if (LoginState==false){
            $('._mr_logout_but')[0].click();
        }
    }
    if (Hour==FoodHourTime){
        if (Minute == '01'){
            if (Money > 0.5){
                window.location= 'https://www.marketglory.com/account/market/food/dairy/q1';
            }else if (Money > 2.5){
                window.location= 'https://www.marketglory.com/account/market/food/dairy/q3';
            }else{
                console.log('Not Enough Money');
            }
        }else{
            console.log('Not in Food Time (Minute)' + FoodHourTime + ' : ' + Minute);
        }
    }else{
        console.log('Not in Food Time ' + FoodHourTime + ' : ' + Hour);
    }

    if (Hour==WorkHourTime){
        if (Minute == '03'){
            window.location='https://www.marketglory.com/account/work';
        }else{
            console.log('Not in Work Time (Minute) ' + WorkHourTime + ' : ' + Minute);
        }
    }else{
        console.log('Not in Work Time ' + WorkHourTime + ' : ' + Hour);
    }

    $.each(FightHourTime,function( i, val ) {
        if (Hour==val){

            var isAttack=false;
            $.each(AttackingMinute,function( i, val ) {
                if (Minute==val){
                    isAttack=true;
                }
            });
            if (isAttack==true){
                window.location='https://www.marketglory.com/account/fight';
            }else{
                console.log('Not in Fight Time (Minute) ' + val + ' : ' + Minute);
            }
            return false;
        }else{
            console.log('Not in Fight Time ' + val + ' : ' + Hour);
        }
    });
}

function Fight(){
    DefaultRouting();

    if (typeof(FightNumber) === "undefined"){
        createCookie('MGBFightTimes',parseFloat($($('.nd_mess_info')[0]).html().substring(60,62)),1);
        window.location='https://www.marketglory.com/account';
    }

    try{
        createCookie('MGBFightTimes',parseFloat($($('.nd_mess_info')[0]).html().substring(60,62)),1);
    }catch(ex){
        createCookie('MGBFightTimes',10,1);
    }
    if (FightNumber < 10){
        var isAttack=false;

        if (FightNumber == 0){
            isAttack=true;
        }else{
            var NextAttack;
            if ($('#timerMin_fight').text()==''){
                NextAttack=0;
            }else{
                NextAttack=parseFloat($('#timerMin_fight').text()) + 1;
            }
            if (NextAttack==9){
                ForceLogOff();
            }
            NextAttack = NextAttack + Minute;
            var AttackHour = Hour;
            if (NextAttack >= 60){
                NextAttack=NextAttack - 60;
                AttackHour = Hour + 1;
                if (AttackHour >= 24){
                    AttackHour = AttackHour - 24;
                }
            }
            createCookie('MGBNextFightHour',AttackHour,1);
            createCookie('MGBNextFightMinute',NextAttack,1);

            if (NextFightHour == Hour && NextFightMinute == Minute){
                isAttack=true;
            }
        }

        if (isAttack==true){
            var d = new Date();
            var n = d.getDate();
            var nn = n + 100;
            var m = d.getMonth();
            var mm = m + 100;
            var y = d.getFullYear();

            $.each( $('.nd_list .timeago'),function( i, val ) {
                var todaydd = nn.toString().substring(1,3);
                var todaymm = mm.toString().substring(1,3);
                var todayyyyy = y.toString();

                var LastLogindd = val.title.substring(8,10);
                var LastLoginmm = val.title.substring(5,7);
                var LastLoginyyyy = val.title.substring(0,4);
                var DayDiff=differenceDays(LastLogindd,LastLoginmm,LastLoginyyyy,todaydd,todaymm,todayyyyy);
                if (DayDiff<=DayDifferent){
                    $('.buttonFight')[i].click();
                }
            });
            $('.buttonFight')[0].click();
            UpdateStatus("No Matching Player");
        }
    }else{
        return;
    }
}

function FightView(){
    DefaultRouting();
    try{
        var NextAttack;
        if ($('#timerMin_fight').text()==''){
            NextAttack=0;
        }else{
            NextAttack=parseFloat($('#timerMin_fight').text()) + 1;
        }
        if (NextAttack==10 || NextAttack==9 || NextAttack==8){
            ForceLogOff();
        }
    }catch(ex){
    }
    UpdateStatus("Attacking Player");
    $('.nd_submit_big')[0].click();
    createCookie('MGBLastFight',parseFloat(LastFight),1);
}

function Work(){
    DefaultRouting();

    var NextWork;

    if (typeof(NextWorkHour) === "undefined" || NextWorkHour == null){
        console.log('1');
        if (typeof($('.nd_mess_error')[0]) === "undefined"){
            $($('.buttonWork')[0]).click();
        }
        NextWork = parseFloat($($('.nd_mess_error')[0]).html().substring(91,93));
        if ($($('.nd_mess_error')[0]).html().substring(94,99)=='hours'){
            NextWork = NextWork + Hour - 24;
            createCookie('MGBNextWorkHour',NextWork,1);
        }
        window.location='https://www.marketglory.com/account';
    }

    if (NextWorkHour == Hour && (typeof(NextWorkMinute) === "undefined" || NextWorkMinute == null)){
        if (typeof($('.nd_mess_error')[0]) === "undefined"){
            $($('.buttonWork')[0]).click();
        }
        NextWork = parseFloat($($('.nd_mess_error')[0]).html().substring(91,93));
        if ($($('.nd_mess_error')[0]).html().substring(94,100)=='Minute'){
            NextWork = NextWork + Minute - 60;
            createCookie('MGBNextWorkMinute',NextWork,1);
        }
        window.location='https://www.marketglory.com/account';
    }

    if (NextWorkHour == Hour && NextWorkMinute == Minute){
        $($('.buttonWork')[0]).click();
    }
}

function Food(){
    DefaultRouting();
    if (Minute == '01'){
        $('.nd_submit_inv')[0].click();
    }
}

function UpdateStatus(AppendData){
        StatusData='';
        $('#StatusData').html("");

        StatusData += "Count : " + count + "<br />";
        StatusData += "LoginState : " + LoginState + "<br />";
        StatusData += "State : " + State + "<br />";
        StatusData += "Time : " + Hour + ":" + Minute + ":" + Second + "<br />";
        StatusData += "Money : " + Money + "<br />";
        StatusData += "Fight : " + FightNumber + "<br />";
        StatusData += "Next Work : " + NextWorkHour + ":" + NextWorkMinute + "<br />";
        StatusData += "Next Fight : " + NextFightHour + ":" + NextFightMinute + "<br />";

        if (AppendData!=''){
            StatusData += "Current : " + AppendData + "<br />";
        }
        if (ErrorMessage!=''){
            StatusData += "Error : " + ErrorMessage + "<br />";
        }

        $('#StatusData').html(StatusData);
}
function timerun(){
    count++;

    if (count==1){
        $('body').append('<div id="StatusData" style="position: fixed;top: 150px;left: 0px;width: 200px;heigth: 500px;background-color: white;display: block;"></div>');
        return false;
    }

    CheckLoginTime();

    try{
        Hour = parseFloat($('#site_timer').text().substring(0, 2));
        Minute = parseFloat($('#site_timer').text().substring(3, 5));
        Second = parseFloat($('#site_timer').text().substring(6, 8));
        Money = parseFloat($('.ms_x .right b')[0].innerHTML);
        Stamina = parseFloat($('.ms_holder .right b')[0].innerHTML);
        FightNumber = readCookie('MGBFightTimes');
        LastFight = readCookie('MGBLastFight');
        NextWorkHour = readCookie('MGBNextWorkHour');
        NextWorkMinute = readCookie('MGBNextWorkMinute');
        NextFightHour = readCookie('MGBNextFightHour');
        NextFightMinute = readCookie('MGBNextFightMinute');
    }catch(ex){
        ErrorMessage=ex;
    }

    UpdateStatus('');

    if (Hour==0){
        eraseCookie("MGBFightTimes");
        eraseCookie("MGBLastFight");
        eraseCookie("MGBNextWorkHour");
        eraseCookie("MGBNextWorkMinute");
    }

    if (State=='Home'){
        //HomeRoute();
        HomeRouteV2();
    }else if (State=='LogIn'){
         Login();
    }else if (State=='LogInSite'){
         LoginSite();
    }else if (State=='LogOff'){
         LogOff();
    }else if (State=='Fight'){
         Fight();
    }else if (State=='FightHistory'){
         FightHistory();
    }else if (State=='FightView'){
         FightView();
    }else if (State=='Work'){
         Work();
    }else if (State=='WorkHistory'){
         WorkHistory();
    }else if (State=='Food'){
         Food();
    }else{
        BackToHome();
    }
}

function BackToHome(){
    window.location='https://www.marketglory.com/account';
}

function WorkHistory(){
    DefaultRouting();
    //ForceLogOff();
    window.location='https://www.marketglory.com/account';
}

function FightHistory(){
    DefaultRouting();
    //ForceLogOff();
    window.location='https://www.marketglory.com/account';
}

function LogOff(){
    window.location='https://www.marketglory.com';
}

function Login(){
    window.location='https://www.marketglory.com/account_login';
}

function ForceLogOff(){
    $('._mr_logout_but')[0].click();
    //window.location='https://www.marketglory.com/account';
}

function CheckLoginTime(){
    LoginState=false;
    $.each(LoginTime,function( i, val ) {
        if (Hour==val){
            LoginState=true;
            return false;
        }
    });
}
var islogin=false;
function LoginSite(){
    if (islogin==true){
        return false;
    }
    if (count>1){
        if (LoginState){
            eraseCookie("MGBFightTimes");
            eraseCookie("MGBLastFight");
            eraseCookie("MGBNextWorkHour");
            eraseCookie("MGBNextWorkMinute");
            var LastLoginUser=readCookie('MGBLastLoginUser');
            /*if (typeof(NextWorkMinute) === "undefined" || NextWorkMinute == null){
                $("input[name='character_name']")[0].value=LoginUser[0];
                $("input[name='character_password']")[0].value=LoginPassword[0];
                createCookie('MGBLastLoginUser',LoginUser[0],1);
            }*/
            if (typeof(LastLoginUser) === "undefined" || LastLoginUser == null){
                $("input[name='character_name']")[0].value=LoginUser[0];
                $("input[name='character_password']")[0].value=LoginPassword[0];
                createCookie('MGBLastLoginUser',LoginUser[0],1);
                islogin=true;
            }

            $.each(LoginUser,function( i, val ) {
                if (LastLoginUser==val){
                    var CalcLogin= i + 1;
                    if (CalcLogin == LoginUser.length){
                        CalcLogin=0;
                    }
                    $("input[name='character_name']")[0].value=LoginUser[CalcLogin];
                    $("input[name='character_password']")[0].value=LoginPassword[CalcLogin];
                    createCookie('MGBLastLoginUser',LoginUser[CalcLogin],1);
                    islogin=true;
                }
            });
            if (islogin==false){
                $("input[name='character_name']")[0].value=LoginUser[0];
                $("input[name='character_password']")[0].value=LoginPassword[0];
                createCookie('MGBLastLoginUser',LoginUser[0],1);
                islogin=true;
            }
            $('#submit_log').click();
        }
    }
}

function DefaultRouting(){
    if (count>60){
        BackToHome();
    }
}

function differenceDays($Mindd,$Minmm,$Minyyyy,$Maxdd,$Maxmm,$Maxyyyy){
    const date1 = new Date($Minmm + '/' + $Mindd + '/' + $Minyyyy);
    const date2 = new Date($Maxmm + '/' + $Maxdd + '/' + $Maxyyyy);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function createCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';path=/;expires=' + expires.toUTCString();
}

function readCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = readCookie(key);
    createCookie(key, keyValue, '-1');
}

(function() {
    'use strict';
    if(window.location.href=='https://www.marketglory.com/account'){
        State = 'Home';
    }else if (window.location.href=='https://www.marketglory.com/'){
        State = 'LogIn';
    }else if (window.location.href=='https://www.marketglory.com/account_login'){
        State = 'LogInSite';
    }else if (window.location.href=='https://www.marketglory.com/logoff'){
        State = 'LogOff';
    }else if (window.location.href=='https://www.marketglory.com/account/fight'){
        State = 'Fight';
    }else if (window.location.href=='https://www.marketglory.com/account/fight/history'){
        State = 'FightHistory';
    }else if (window.location.href.substring(0,53)=='https://www.marketglory.com/account/fight/view_fight/'){
        State = 'FightView';
    }else if (window.location.href=='https://www.marketglory.com/account/work'){
        State = 'Work';
    }else if (window.location.href=='https://www.marketglory.com/account/work/history'){
        State = 'WorkHistory';
    }else if (window.location.href.substring(0,48)=='https://www.marketglory.com/account/market/food/'){
        State = 'Food';
    }else{
        State = '';
    }
    // Your code here...
    setInterval(timerun, Interval);
})();