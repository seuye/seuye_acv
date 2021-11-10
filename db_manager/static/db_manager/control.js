const api_con = document.getElementById("api-info")
const api_engine = api_con.getElementsByClassName("nav-item")
const api_body = api_con.getElementsByClassName("form-select")
const api_view = api_con.getElementsByClassName("api-view")
const oApiEntry = document.querySelector("#inputApi")
const dbSearcher = document.getElementById("dbSearch")
let idx = 0
let datapack = 0
let pak_base = 0
let pak_v1 = 0
let pak_v2 = 0
let dbPack = 0

var doubleSubmitFlag = false;
var doubleSubmitFlag_db = false;

function callinfos(Object) {
    if (doubleSubmitCheck()) return;
    fetch('/admin_db/api-call/?query='.concat(Object))
        .then((response) => response.json())
        .then((results) => datapack = results)
        .then((datapack) => {

            if (datapack.base != "1번 에러") {
                pak_base = JSON.parse(datapack.base);
            } else {
                console.log("1번 0 할당");
                pak_base = ""
            };
            console.log(Object, " 1번 확인");
            if (datapack.v1 != "2번 에러") {
                pak_v1 = datapack.v1;

            } else {
                console.log("2번 0 할당");
                pak_v1 = ""
            };
            console.log(Object, " 2번 확인");
            if (datapack.v2 != "3번 에러") {
                pak_v2 = datapack.v2;
            } else {
                console.log("3번 0 할당");
                pak_v2 = ""
            };
            console.log(Object, "3번 확인");
            //1번 선택
            btnClick("api-0")
            doubleSubmitFlag = false
        })
}

function btnClick(Object) {

    var api_unselected = []
    api_unselected.push(0);
    api_unselected.push(1);
    api_unselected.push(2);

    var regex = /[^0-9]/g;
    idx = Object.replace(regex, "");
    api_unselected.splice(idx, 1);

    if (api_engine[idx].children[0].className == "nav-link") {
        console.log(Object, ":", "number:", idx, "selected")
        api_engine[idx].children[0].setAttribute("class", "nav-link active")
        api_engine[idx].children[0].setAttribute("aria-current", "page")
        draw_selection_api(idx)
        for (const curser of api_unselected) {
            api_engine[curser].children[0].setAttribute("class", "nav-link")
            api_engine[curser].children[0].removeAttribute("aria-current")
        }
        selected_api = idx
        return console.log("call info : ", selected_api)
    } else if (api_engine[idx].children[0].className = "nav-link active") {
        draw_selection_api(idx)
        return console.log("already selected")
    } else {
        return console.log("abnormal condition")
    }
}

function draw_selection_api(idx) {
    if (pak_base != 0 | pak_v1 != 0 | pak_v2 != 0) {
        var n = api_body[0].childElementCount
        while (n > 1) {
            n -= 1;
            api_body[0].removeChild(api_body[0].lastElementChild)
        }

        if (idx == 0) {
            for (i of pak_base) {
                if (pak_base[0] == "") {
                    api_body[0].children[0].innerHTML = "검색된 내용이 없습니다."
                } else {
                    api_body[0].children[0].innerHTML = "코드를 선택하세요."
                    var p = document.createElement("option")
                    var node = document.createTextNode(i["mnt_code"])
                    p.appendChild(node);
                    api_body[0].appendChild(p)
                }
            }

        } else if (idx == 1) {
            for (i of pak_v1) {
                if (pak_v1[0] == "") {
                    api_body[0].children[0].innerHTML = "검색된 내용이 없습니다."
                } else {
                    api_body[0].children[0].innerHTML = "코드를 선택하세요."
                    var p = document.createElement("option")
                    var node = document.createTextNode(i["mnt_code"])
                    p.appendChild(node);
                    api_body[0].appendChild(p)
                }
            }
        } else {
            for (i of pak_v2) {
                if (pak_v1[0] == "") {
                    api_body[0].children[0].innerHTML = "검색된 내용이 없습니다."
                } else {
                    api_body[0].children[0].innerHTML = "코드를 선택하세요."
                    var p = document.createElement("option")
                    var node = document.createTextNode(i["mnt_code"])
                    p.appendChild(node);
                    api_body[0].appendChild(p)
                }
            }
        }
    } else {
        console.log("값이 선택되지 않았습니다.")
    }
}

function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}

function selection_check() {
    console.log("change detected")
    if (pak_base == 0 && pak_v1 == 0 && pak_v2 == 0) {

    } else {
        if (idx == 0) {
            for (i of pak_base) {
                if (i["mnt_code"] == api_view[0].children[0].value) {
                    api_view[0].children[2].children[1].value = i["mnt_code"]
                    api_view[0].children[4].children[1].value = i["loc"]
                    api_view[0].children[3].children[1].value = i["mnt_name"]
                    api_view[0].children[5].children[1].value = ""
                    api_view[0].children[6].children[1].value = ""
                    api_view[0].children[7].children[1].value = ""
                    api_view[0].children[8].children[1].value = ""
                } else {}
            }
        } else if (idx == 1) {
            for (i of pak_v1) {
                if (i["mnt_code"] == api_view[0].children[0].value) {
                    api_view[0].children[2].children[1].value = i["mnt_code"]
                    api_view[0].children[3].children[1].value = i["mnt_name"]
                    api_view[0].children[4].children[1].value = i["mnt_loc_string"]
                    api_view[0].children[5].children[1].value = ""
                    api_view[0].children[6].children[1].value = ""
                    api_view[0].children[7].children[1].value = ""
                    api_view[0].children[8].children[1].value = ""
                    api_view[0].children[9].children[1].innerHTML = i["mnt_details"]
                } else {}
            }
        } else {
            for (i of pak_v2) {
                if (i["mnt_code"] == api_view[0].children[0].value) {
                    api_view[0].children[2].children[1].value = i["mnt_code"]
                    api_view[0].children[3].children[1].value = ""
                    api_view[0].children[4].children[1].value = i["mnt_locs"]
                    api_view[0].children[5].children[1].value = ""
                    api_view[0].children[6].children[1].value = ""
                    api_view[0].children[7].children[1].value = i["mnt_hght"]
                    api_view[0].children[8].children[1].value = i["mnt_info_s"]
                    api_view[0].children[9].children[1].innerHTML = i["mnt_info_l"]
                } else {}
            }
        }
    }
}

function enterkey() {
    if (window.event.keyCode == 13) {
        console.log(enter)
        callinfos(oApiEntry.value)
    }
}

function doubleSubmitCheck() {
    if (doubleSubmitFlag) {
        return doubleSubmitFlag;
    } else {
        doubleSubmitFlag = true;
        return false;
    }
}

function doubleSubmitCheck_db() {
    if (doubleSubmitFlag_db) {
        return doubleSubmitFlag_db;
    } else {
        doubleSubmitFlag_db = true;
        return false;
    }
}



function call_db_name(Object) {
    if (doubleSubmitCheck_db()) return;
    fetch('/admin_db/db-name/?query='.concat(Object))
        .then((response) => response.json())
        .then((results) => dbPack = results)
        .then((dbPack) => {
            dbPack
            doubleSubmitFlag = false
            console.log(dbPack)
        })
}

function call_db_code(Object) {
    if (doubleSubmitCheck_db()) return;
    fetch('/admin_db/db-code/?query='.concat(Object))
        .then((response) => response.json())
        .then((results) => dbPack = results)
        .then((dbPack) => {
            dbPack
            doubleSubmitFlag_db = false
            console.log(dbPack)
        })
}

function call_db_gpx(Object) {
    if (doubleSubmitCheck_db()) return;
    fetch('/admin_db/gpx-code/?query='.concat(Object))
        .then((response) => response.json())
        .then((results) => dbPack_g = results)
        .then((dbPack_g) => {
            dbPack_g
            doubleSubmitFlag_db = false
        })
}

function dr_db(dbPack) {
    dbPack.base_result[0].lat
    dbPack.base_result[0].lng
}