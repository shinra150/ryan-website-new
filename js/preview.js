

$(function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    var imglist = $("#show>img");
    for (var i = 0; i < imglist.length; i++) {
        imglist[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
    $(".close")[0].onclick=function () {
        modal.style.display = "none";
    }
});