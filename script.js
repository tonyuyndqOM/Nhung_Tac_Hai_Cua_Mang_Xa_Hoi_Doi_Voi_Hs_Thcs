var visited = [0]
currentpage = 0
function openpage(n) {
    visited = visited.slice(0, currentpage + 1);
    visited.push(n);
    currentpage++;
    $("#main").html(pages[n]);
    $("title").html(titles[n]);
    if(n == 5) {
        window.open("https://github.com/tonyuyndqOM/Nhung_Tac_Hai_Cua_Mang_Xa_Hoi_Doi_Voi_Hs_Thcs/discussions", "_blank");
    }
}
function undopage() {
    if(currentpage == 0) {
        return;
    }
    currentpage--;
    $("#main").html(pages[visited[currentpage]]);
    $("title").html(titles[visited[currentpage]]);
}
function redopage() {
    if(currentpage + 1 == visited.length) {
        return;
    }
    currentpage++;
    $("#main").html(pages[visited[currentpage]]);
    $("title").html(titles[visited[currentpage]]);
}
$(() => {
    $("#main").html(pages[0]);
    $("title").html(titles[0]);
    $("#navbar").append(`<a class="iconcontent content" id="navicon"><div class="bimgic"></div></a>`);
    $("#navicon").attr("href","javascript:openpage(0)");
    openpage(0);
    navbtn.forEach((v,i,a) => {
        $("#navbar").append(`<a class="content" id="nav${i}">${v}</a>`);
        $(`#nav${i}`).attr("href",`javascript:openpage(${i + 1})`);
    });
    $("#navbar").append(`<div class="blankspace">`);
    $("#navbar").append(`<a class="content" id="navundo">&lt;</a>`);
    $("#navundo").attr("href","javascript:undopage()");
    $("#navbar").append(`<a class="content" id="navredo">&gt;</a>`);
    $("#navredo").attr("href","javascript:redopage()");
});
