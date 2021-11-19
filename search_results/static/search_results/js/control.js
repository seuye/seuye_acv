var searcher=document.querySelector(".search-ex")
var search_string=""
var content_info=document.querySelectorAll(".c_info")
var searcher_1=document.querySelector(".search_value")

window.onload = function init() {
    search_string=window.location.search.match(/query=([^&]*)/)[1];
    searcher=document.querySelector(".search-ex")
    search_string=decodeURIComponent(search_string)
    searcher_1.innerHTML=search_string
    searcher.innerHTML=search_string
    }



function movePage(){
    var mnt_code = document.getElementById( 'mnt_card' ).getAttribute( 'code' );
    console.log(mnt_code);
    window.location.href='http://127.0.0.1:8000/detail/mnt_detail/'+mnt_code;
    // window.location.href='http://127.0.0.1:8000/detail/mnt_detail/';
}




    