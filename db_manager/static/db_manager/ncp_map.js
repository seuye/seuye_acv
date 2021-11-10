var HOME_PATH = window.HOME_PATH || '.';
//참고 
var target_mountain_1 = new naver.maps.LatLng(36.666805, 127.9784147);
var target_mountain_2 = new naver.maps.LatLng(36.666805, 127.9784147);
var target_m1 = new naver.maps.LatLng(36.666805, 127.9784147);
var target_m2 = new naver.maps.LatLng(36.666805, 127.9784147);

// 중앙값은 하드코딩
var markerPosition_png = new kakao.maps.LatLng(37.461378, 127.656469);
var markerPosition_check = new kakao.maps.LatLng(34.461378, 127.656469);

var map = new naver.maps.Map('map_1', {
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

var map_center = new naver.maps.Map('map_center', {
        center: target_mountain_2,
        zoom: 10,
        minZoom: 3,
        maxZoom: 12,
    }),
    marker_default = new naver.maps.Marker({
        map: map_center,
        draggable: false,
        position: target_m2,
    }),
    marker_center = new naver.maps.Marker({
        map: map_center,
        draggable: true,
        position: target_m2,
    });


const lat_entry = document.getElementById("cordsLat")
const lng_entry = document.getElementById("cordsLng")
const zoom_entry = document.getElementById("zoomLv")


naver.maps.Event.addListener(marker_center, 'dragend', function(e) {
    map_center.setCenter(marker_center.getPosition())
    lat_entry.value = marker_center.getPosition()["_lat"];
    lng_entry.value = marker_center.getPosition()["_lng"];
    zoom_entry.value = map_center.getZoom();
});


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















////////////////////////////////////////////////////////////////////////
var map_png_check = new kakao.maps.Map(
    document.getElementById('map_png_check'), {
        center: new kakao.maps.LatLng(36.466805, 127.6784147), //korea 중앙값 동경 128도 02분 02.5초, 북위 38도 03분 37.5초 35.8026655,125.6299364,
        level: 14
    });
var center = map.getCenter();
var png_overlay = new kakao.maps.Tileset({
    width: 256,
    height: 256,
    getTile: function(x, y, z) {
        var div = document.createElement('div');
        div.innerHTML = x + ', ' + y + ', ' + z;
        div.style.fontSize = '36px';
        div.style.fontWeight = 'bold';
        div.style.lineHeight = '256px'
        div.style.textAlign = 'center';
        div.style.color = '#4D4D4D';
        div.style.border = '1px dashed #ff5050';
        return div;
    }
});
kakao.maps.Tileset.add('TILE_NUMBER', png_overlay);
var markerPosition_2 = new kakao.maps.LatLng(34.461378, 127.656469); //
var marker_png_check = new kakao.maps.Marker({
    position: markerPosition_2,
});
map_png_check.addOverlayMapTypeId(kakao.maps.MapTypeId.TILE_NUMBER);
marker_png_check.setMap(map_png_check);
////////////////////////////////////////////////////////////////////////