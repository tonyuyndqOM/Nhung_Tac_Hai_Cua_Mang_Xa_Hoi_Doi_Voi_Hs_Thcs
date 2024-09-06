function openpage(n) {
    $("#main").html(pages[n]);
    $("title").html(titles[n]);
}
$(() => {
    $("#navbar").append(`<a class="iconcontent content" id="navicon"><div class="bimgic"></div></a>`);
    $("#navicon").attr("href","javascript:openpage(0)");
    openpage(0);
    navbtn.forEach((v,i,a) => {
        $("#navbar").append(`<a class="content" id="nav${i}">${v}</a>`);
        $(`#nav${i}`).attr("href",`javascript:openpage(${i + 1})`);
    });
});