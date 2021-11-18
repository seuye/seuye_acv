let dbPack = 0
var map1_x=36.666805;
var map1_y=127.9784147;
var map2_x=36.666805;
var map2_y=127.9784147;
var lnglat_toil=[]
var lnglat_path_1=[]
var lnglat_path_2=[]
var markerList = [];



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
    // if (doubleSubmitCheck_db()) return;
    fetch('/detail/gpx-code/?query='.concat(700006))
        .then((response) => response.json())
        .then((results) => dbPack = results)
        .then((dbPack) => {
            mapping(dbPack)
            //doubleSubmitFlag = false
            console.log(dbPack) //
        })
    }

function mapping(input){
    if (dbPack.hasOwnProperty("toil")==true){
        lnglat_toil=[]
        for (i of dbPack.toil){
            console.log(i)
            lnglat_toil.push(new naver.maps.LatLng(i.lat,i.lng))
            }
        } else {} 



    lnglat_path_1=[];
    for (i of dbPack.details.base[0][0].geometry){
        lnglat_path_1.push(new naver.maps.LatLng(i[1],i[0]))
        }
  
    console.log("호출성공")


    map1_x=input.lat
    map1_y=input.lng
    map2_x=input.lat
    map2_y=input.lng
    var target_mountain_1 = new naver.maps.LatLng(map1_x,map1_y );
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
        }), polyline = new naver.maps.Polyline({
        
            path:lnglat_path_1,
            strokeColor:'#FF0000',
            strokeOpacity: 1,
            stokeWeight: 7,
            map:map_1
            })
        

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

        


        for (var i=0, ii=lnglat_toil.length; i<ii; i++) {
                marker_toil = new naver.maps.Marker({
                map: map_1,
                draggable: false,
                // icon: {
                //     url: 'https://storage.googleapis.com/cloud_moa/korea/blackyk.png',
                //     size: new naver.maps.Size(100, 100),
                //     origin: new naver.maps.Point(0, 0),
                //     anchor: new naver.maps.Point(11, 35)
                // },
                position:lnglat[i],
                
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


