$(".popUp").click(function() {
    let idNum = this.id.slice(2, 6);
    let title = $('#js' + idNum).text();
    console.log(idNum, title)
    window.open('js' + idNum + '.html', title, 'width=800, height=563, left=50, top=50, resize=1, scrollbars=0, toolbar=0, menubar=no');
});