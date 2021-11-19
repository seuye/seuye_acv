let dbPack = 0
var map1_x = 36.666805;
var map1_y = 127.9784147;
var map2_x = 36.666805;
var map2_y = 127.9784147;
var lnglat_toil = []
var lnglat_path_1 = []
var lnglat_path_2 = []
var markerList = [];
var target_mountain_1 = new naver.maps.LatLng(map1_x, map1_y);
var target_mountain_2 = new naver.maps.LatLng(map2_x, map2_y);
var target_m1 = new naver.maps.LatLng(map1_x, map1_y);
var target_m2 = new naver.maps.LatLng(map2_x, map2_y);
var s3_pathinfo = document.querySelector("#section_3")
var s4_timeinfo = document.querySelector("#section_4")
var s5_wethinfo = document.querySelector("#section_5")
var s6_photinfo = document.querySelector("#section_6")
var s7_costinfo = document.querySelector("#section_7")
var s8_foodinfo = document.querySelector("#section_8")





var HOME_PATH = window.HOME_PATH || '.';
//참고 

// var doubleSubmitFlag = false;
// function doubleSubmitCheck() {
//     if (doubleSubmitFlag) {
//         return doubleSubmitFlag;
//     } else {
//         doubleSubmitFlag = true;
//         return false;
//     }
// }

///detail/700007

window.onload = function call_db_name() {
    string = window.location.href.split('/');
    // if (doubleSubmitCheck_db()) return;

    //search_string = window.location.search.match(/query=([^&]*)/)[1];
    console.log(string[string.length - 2]);
    fetch('/detail/gpx-code/?query='.concat(string[string.length - 2]))
        .then((response) => response.json())
        .then((results) => dbPack = results)
        .then((dbPack) => {
            mapping(dbPack)
            draw_path(dbPack)
                //doubleSubmitFlag = false
            console.log(dbPack) //
        })
}

function mapping(input) {
    if (dbPack.hasOwnProperty("toil") == true) {
        lnglat_toil = []
        for (i of dbPack.toil) {
            console.log(i)
            lnglat_toil.push(new naver.maps.LatLng(i.lat, i.lng))
        }
    } else {}
    lnglat_path_1 = [];
    for (i of dbPack.details.base[0][0].geometry) {
        lnglat_path_1.push(new naver.maps.LatLng(i[1], i[0]))
    }

    console.log("호출성공")


    map1_x = input.lat
    map1_y = input.lng
    map2_x = input.lat
    map2_y = input.lng
    var target_mountain_1 = new naver.maps.LatLng(map1_x, map1_y);
    var target_mountain_2 = new naver.maps.LatLng(map2_x, map2_y);
    var target_m1 = new naver.maps.LatLng(map1_x, map1_y);
    var target_m2 = new naver.maps.LatLng(map2_x, map2_y);


    var map_1 = new naver.maps.Map('short-map_img_1', {
            center: target_mountain_1,
            zoom: 14,
            minZoom: 2,
            maxZoom: 15,
        }),
        marker_1 = new naver.maps.Marker({
            map: map_1,
            position: target_m1,
        }),
        polyline = new naver.maps.Polyline({

            path: lnglat_path_1,
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            stokeWeight: 7,
            map: map_1
        })




    for (var i = 0, ii = lnglat_toil.length; i < ii; i++) {
        marker_toil = new naver.maps.Marker({
            map: map_1,
            draggable: false,
            position: lnglat[i],

        });
        marker_toil.set('seq', i);

        markerList.push(marker_toil);

        icon = null;
        marker = null;

    };


    var map_2 = new naver.maps.Map('short-map_img_2', {
            center: target_mountain_2,
            zoom: 10,
            minZoom: 3,
            maxZoom: 12,
        }),
        marker_toil = new naver.maps.Marker({
            map: map_2,
            draggable: false,
            icon: {
                url: 'https://storage.googleapis.com/cloud_moa/korea/blackyk.png',
                size: new naver.maps.Size(100, 100),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(11, 35)
            },
            position: target_m2,
        });

    var map_mini = new naver.maps.Map('mini-map_img_1', {
            center: new naver.maps.LatLng(36.5786308, 127.989401),
            zoom: 6,
            minZoom: 6,
            maxZoom: 6,
            draggable: false,
        }),
        marker_1 = new naver.maps.Marker({
            map: map_mini,
            position: target_m1,
        })


}








//////////////////////////////////////////////////////////////////////// 글씨 새로 쓰기
var route_string_1 = ""
var route_string_2 = ""
var route_etc_string = ""

function draw_path(dbPack) {
    if (dbPack.route.customed_rotue == "temp") {
        route_string_1 = ""
        route_string_2 = ""
        for (i of dbPack.route.default_route.default_route_1) {
            if (dbPack.route.default_route.default_route_1[dbPack.route.default_route.default_route_1.length - 1] != i) {

                route_string_1 += i.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
                route_string_1 += "-"
            } else {
                route_string_1 += i
            };
        }
        s3_pathinfo.children[1].children[1].innerHTML = route_string_1;

        for (j of dbPack.route.default_route.default_route_2) {
            if (dbPack.route.default_route.default_route_2[dbPack.route.default_route.default_route_2.length - 1] != j) {
                route_string_2 += j.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
                route_string_2 += "-"
            } else {
                route_string_2 += j
            }
        }
        s3_pathinfo.children[1].children[3].innerHTML = route_string_2;
    } else {}
    if (dbPack.blackyk.hasOwnProperty("places_name") == true) {
        s3_pathinfo.children[1].children[4].innerHTML = "* 인증 정보 (위치는 하단 지도 참조)<br>  " + dbPack.blackyk.places_name + "(블랙야크 인증지점)"
    }
};


function draw_weather(dbPack) {
    function getTimeStamp() {

        var d = new Date();
        var s =
            leadingZeros(d.getFullYear(), 4) + '-' +
            leadingZeros(d.getMonth() + 1, 2) + '-' +
            leadingZeros(d.getDate(), 2);

        return s;
    }

    function leadingZeros(n, digits) {

        var zero = '';
        n = n.toString();

        if (n.length < digits) {
            for (i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;





    }