$(document).ready(function () {
    // 1. 簡易スライドショー
    let currentSlide = 0;
    const slides = $('.slide');
    slides.eq(0).addClass('active');
    setInterval(function () {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }, 5000);

    // 2. 検索フィルタリング（ボタン）
    $('.filter-btn').on('click', function () {
        const tag = $(this).data('tag');
        alert(tag + " カテゴリーの検索機能はDB実装時に有効化されます。");
    });

    // 3. 検索ボタン押下時の処理
    $('#search-submit').on('click', function () {
        alert('この機能はDBが実装されてから有効になります。');
    });

    // 4. 登録機能のバリデーション（← ここを独立させました）
    // $('#store-form').on('submit', function (e) {
        // e.preventDefault();

        // const gmap = $('input[name="gmap_url"]').val();
        // const tabelog = $('input[name="tabelog_url"]').val();

        // if (!gmap && !tabelog) {
            // alert('Google Mapと食べログのURLはどちらかは入力してください。\nこの機能はDBが実装されてから有効になります。');
        // } else {
            // alert('入力内容が確認されました。\nこの機能はDBが実装されてから有効になります。');
        // }
    // });
    // 4. 登録機能（デモのため、入力チェックをスキップしてアラートを表示）
    $('#store-form').on('submit', function (e) {
        e.preventDefault(); // 画面遷移を停止

        // 常にこちらのメッセージを表示
        alert('Google Mapと食べログのURLはどちらかは入力してください。\nこの機能はDBが実装されてから有効になります。');
    });

});