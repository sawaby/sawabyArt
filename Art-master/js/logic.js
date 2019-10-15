// $( window ).on( "load", changeComponent );
//   function changeComponent(_src){
// 		alert(_src);
// 		console.log(JSON.stringify(_src));
// 		$("#myImg").attr('src', _src);
// 	}

    // $("#bio").on("click", function() {

    //     $("#toBRemove").load("Profile.htm");

    // });
// $(window).on('load', loadHome);

/**
  * Disable right-click of mouse, F12 key, and save key combinations on page
  */
// window.onload = function() {
//   document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
//   }, false);
//   document.addEventListener("keydown", function(e) {
//   //document.onkeydown = function(e) {
//     // "I" key
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//       disabledEvent(e);
//     }
//     // "J" key
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//       disabledEvent(e);
//     }
//     // "S" key + macOS
//     if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
//       disabledEvent(e);
//     }
//     // "U" key
//     if (e.ctrlKey && e.keyCode == 85) {
//       disabledEvent(e);
//     }
//     // "F12" key
//     if (event.keyCode == 123) {
//       disabledEvent(e);
//     }
//   }, false);
//   function disabledEvent(e){
//     if (e.stopPropagation){
//       e.stopPropagation();
//     } else if (window.event){
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }
// };

// function loadProfile() {
//     if(document.getElementById("toBRemove")){
//         document.getElementById("toBRemove").style.height = "500px;";
//         document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="100%;" type="text/html" data="./Profile.htm" ></object>';
//         document.getElementById("toBRemove").style.padding = "0px";
//     }
//     else{
//         document.getElementById("toRemove").style.height = "500px;";
//         document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="100%;" type="text/html" data="./Profile.htm" ></object>';
//         document.getElementById("toRemove").style.padding = "0px";
//     }
 
// }
// // function loadHome() {
// //  document.getElementById("toBRemove").innerHTML='<object style="margin: 0px; overflow: hidden;" width="130%" height="100%" type="text/html" data="./Home.htm" ></object>';
// //  //document.getElementById("toBRemove").style.padding = "0px";
// // }
// function loadExhibition() {
//      if(document.getElementById("toBRemove")){
//          document.getElementById("toBRemove").style.height = "500px;";
//         document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Exhibition.htm" ></object>';
//         document.getElementById("toBRemove").style.padding = "0px";
//    } else{
//        document.getElementById("toRemove").style.height = "500px;";
//         document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Exhibition.htm" ></object>';
//         document.getElementById("toRemove").style.padding = "0px";
//     }
// }

// function loadArtworkList() {
//      if(document.getElementById("toBRemove")){
//          document.getElementById("toBRemove").style.height = "500px;";
//         document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./ArtworkASList.htm" ></object>';
//         document.getElementById("toBRemove").style.padding = "0px";
//    } else{
//        document.getElementById("toRemove").style.height = "500px;";
//         document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./ArtworkASList.htm" ></object>';
//         document.getElementById("toRemove").style.padding = "0px";
//     }
// }

// function loadContacts() {
//      if(document.getElementById("toBRemove")){
//          document.getElementById("toBRemove").style.height = "500px;";
//         document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Contacts.htm" ></object>';
//         document.getElementById("toBRemove").style.padding = "0px";
//    } else{
//        document.getElementById("toRemove").style.height = "500px;";
//         document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Contacts.htm" ></object>';
//         document.getElementById("toRemove").style.padding = "0px";
//     }
// }


// function loadBlog() {
//   if(document.getElementById("toBRemove")){
//     document.getElementById("toBRemove").style.height = "500px;";
//     document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./blog.htm" ></object>';
//     document.getElementById("toBRemove").style.padding = "0px";
//  } else{
//     document.getElementById("toRemove").style.height = "500px;";
//     document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./blog.htm" ></object>';
//     document.getElementById("toRemove").style.padding = "0px";
//   }
// }

function exhibiDetails(objID){
  alert("coming soon");
}

function loadPage(pageName){
  if(document.getElementById("toBRemove")){
    document.getElementById("toBRemove").style.height = "500px;";
    document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data= '+ escape(pageName) + ' ></object>';
    document.getElementById("toBRemove").style.padding = "0px";
 } else{
    document.getElementById("toRemove").style.height = "500px;";
    document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data= '+ escape(pageName) + ' ></object>';
    document.getElementById("toRemove").style.padding = "0px";
  }
}