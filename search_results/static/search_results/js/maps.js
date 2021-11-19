let dbPack = 0
var map1_x=36.666805;
var map1_y=127.9784147;
var map2_x=36.666805;
var map2_y=127.9784147;
var lnglat_toil=[]
var lnglat_path_1=[]
var lnglat_path_2=[]
var markerList = [];
var markerPosition_png_list=[]

for (var i=0; i<10; i++){
    var map_info_lat = document.getElementById( 'map_png_'+i ).getAttribute( 'lat' );
    var map_info_lng = document.getElementById( 'map_png_'+i ).getAttribute( 'lng' );


    var markerPosition_png = new kakao.maps.LatLng(parseFloat(map_info_lat), parseFloat(map_info_lng));


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
    

    var node = document.getElementById('map_png_'+i);


    var map_png = new kakao.maps.Map(node, {
        mapTypeId: kakao.maps.MapTypeId.PLAN,
        $scale: false,
        draggable: false, //wgs84 -> google / naver ? -> daum ? gpd ## 
        center: new kakao.maps.LatLng(36.466805, 127.6784147),
        level: 14,
    });

    marker_png.setMap(map_png);
};
////////////////////////////////////////////////////////////////////////


