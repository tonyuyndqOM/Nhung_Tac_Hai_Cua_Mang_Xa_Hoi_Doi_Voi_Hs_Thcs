function openpage(n) {
    $("#main").html(pages[n]);
    $("title").html(titles[n]);
}
$(() => {
    openpage(0);
    navbtn.forEach((v,i,a) => {
        $("#navbar").append(`<a class="content" id="nav${i}">${v}</a>`);
        $(`#nav${i}`).attr("href",`javascript:openpage(${i})`);
    });
});
