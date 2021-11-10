let dbPack = 0
var map1_x=36.666805;
var map1_y=127.9784147;
var map2_x=36.666805;
var map2_y=127.9784147;




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
window.onload = function call_db_name() {
    // if (doubleSubmitCheck_db()) return;
    fetch('/detail/api-call/?query='.concat(488605302))
        .then((response) => response.json())
        .then((results) => dbPack = results)
        .then((dbPack) => {
            mapping(dbPack)
            //doubleSubmitFlag = false
            console.log(dbPack) //
        })
}


function mapping(input){
    map1_x=input.base_result[0].lat
    map1_y=input.base_result[0].lng
    map2_x=input.base_result[0].lat
    map2_y=input.base_result[0].lng
    var target_mountain_1 = new naver.maps.LatLng(map1_x,map1_y );
    var target_mountain_2 = new naver.maps.LatLng(map2_x, map2_y);
    var target_m1 = new naver.maps.LatLng(map1_x, map1_y);
    var target_m2 = new naver.maps.LatLng(map2_x, map2_y);


        var map = new naver.maps.Map('short-map_img_1', {
            center: target_mountain_1,
            mapTypeId: naver.maps.MapTypeId.HYBRID,
            zoom: 14,
            minZoom: 14,
            maxZoom: 12,
        }),
        marker_2 = new naver.maps.Marker({
            map: map,
            position: target_m1,
        });



        var map_2 = new naver.maps.Map('short-map_img_2', {
                center: target_mountain_2,
                zoom: 10,
                minZoom: 3,
                maxZoom: 12,
            }),
            marker_default = new naver.maps.Marker({
                map: map_center,
                draggable: false,
                position: target_m2,
            });


        }



const lat_entry = document.getElementById("cordsLat")
const lng_entry = document.getElementById("cordsLng")
const zoom_entry = document.getElementById("zoomLv")



var imageSrc = "https://storage.cloud.google.com/cloud_moa/korea/marker.png",
    imageSize = new kakao.maps.Size(35, 39), // 35,39 
    imageOption = { offset: new kakao.maps.Point(27, 30) };

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
var marker_png = new kakao.maps.Marker({
    position: markerPosition_png,
    image: markerImage
});

var plan = function(x, y, z) {
    if (x == 0 & y == 1 & z == 14) {
        return "https://storage.cloud.google.com/cloud_moa/korea/top_ver1.png";
    } else if (x == 0 & y == 0 & z == 14) {
        return "https://storage.cloud.google.com/cloud_moa/korea/bottom_ver1.png";
    } else {
        return 'https://storage.cloud.google.com/cloud_moa/korea/null.png';
    }
};

kakao.maps.Tileset.add('PLAN',
    new kakao.maps.Tileset(
        256, 256, plan, '', false, 14, 14));

var node = document.getElementById('map_png');
var map_png = new kakao.maps.Map(node, {
    mapTypeId: kakao.maps.MapTypeId.PLAN,
    $scale: false,
    draggable: false, //wgs84 -> google / naver ? -> daum ? gpd ## 
    center: new kakao.maps.LatLng(36.466805, 127.6784147),
    level: 14
});
marker_png.setMap(map_png);
////////////////////////////////////////////////////////////////////////














