let map = L.map('map').setView([34.689, 135.186], 15);
/*
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
}).addTo(map);
*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([34.69028621708549, 135.18513540569265]).addTo(map)
    .bindPopup('Pane Ho Maretta<br>JR元町駅から徒歩５分。種類が豊富。特にお惣菜系のパンやダマンドが人気')
L.marker([34.68862493532794, 135.183880954027166]).addTo(map)
    .bindPopup('BOULANGERIE Nao<br>JR元町駅から徒歩７分。ハードトーストが名物。バケットやデニッシュもおすすめ。')
L.marker([34.689620986013175, 135.18909058856016]).addTo(map)
    .bindPopup('イスズベーカリー<br>JR元町駅から徒歩3分。神戸で一番有名なパン屋さん。食パンと総菜パンのほか、バナナ、キャラメル、クロワッサンなどの菓子パンが人気。')
L.marker([34.68500311105285, 135.18340958129883]).addTo(map)
    .bindPopup('アンダーグラウンドベーカリー<br>地下鉄海岸線みなと元町駅から徒歩3分。スコーンやチーズケーキ,マフィンなど洋菓子も取り扱っている。すぐに完売してしまうので、開店時間を確認すると良い。')
L.marker([34.687385048287176, 135.186866460465]).addTo(map)
    .bindPopup('パン焼きどころ　RIKI<br>JR元町駅から徒歩7分。デニッシュ系からスイーツ系など幅広い商品が並んでいる。サクサク食感とバターの風味が楽しめるクロワッサンが人気。')

    map.locate({
        setView: true,     
        maxZoom: 16,       
        enableHighAccuracy: true 
    });

    


  // 現在地用の赤色円形アイコンを定義
const redCircleIcon = L.divIcon({
    className: 'red-circle-marker',
    html: '<div class="red-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],   // アイコンの中心（10px, 10px）を現在地座標に合わせる
    popupAnchor: [0, -10]   // ポップアップの表示位置を少し上にズラす
});

map.on('locationfound', function(e) {
    let radius = e.accuracy / 2;

    // 現在地マーカーだけに redCircleIcon を適用
    L.marker(e.latlng, { icon: redCircleIcon }).addTo(map)
        .bindPopup("あなたの現在地（誤差 約 " + Math.round(radius) + "m）").openPopup();

    L.circle(e.latlng, radius).addTo(map);
});