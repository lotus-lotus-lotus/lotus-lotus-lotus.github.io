console.log("main.jsを読み込みました。")

$(document).ready(function() {
    $('#good').click(function() {
        alert('ありがとうございます！');
        console.log('ありがとうございます！');
    });

    $('#bad').click(function() {
        alert('お力になれず申し訳ございません...');
        console.log('お力になれず申し訳ございません...');
    });
});

function slide() {
    $("#appear").slideToggle();
}
