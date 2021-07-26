/*let data = [
        [37.64048657689225, 127.03732179543813, '<div style ="padding:5px">신창점</div>'],
        [37.58075465640057, 126.8132708903838, '<div style ="padding:5px">방화역점</div>'],
        [37.56421353656163, 126.81138259192639, '<div style ="padding:5px">송정역점</div>'],
        [37.571697061272005, 126.81842070793637, '<div style ="padding:5px">신방화역점</div>'],
        [37.56203637001839, 126.83867674913584, '<div style ="padding:5px">양천향교역점</div>'],
        [37.58075465640057, 126.8132708903838, '<div style ="padding:5px">발산역점</div>'],
        [37.55604883396243, 126.82580214667854, '<div style ="padding:5px">내발산점</div>'],
        [37.55026496164089, 126.83584433659524, '<div style ="padding:5px">우장산역점</div>'],
        [37.55189810048019, 126.84897643110169, '<div style ="padding:5px">강서구청점</div>'],
        [37.55999521859974, 126.85515624028119, '<div style ="padding:5px">강서홈플러스</div>'],
        [37.559382862358554, 126.86193686564245, '<div style ="padding:5px">가양이마트</div>'],
        [37.551013488139716, 126.86708670662536, '<div style ="padding:5px">등촌점</div>'],
        [37.551489819213955, 126.87481146809972, '<div style ="padding:5px">염창점</div>'],
        [37.53648521449063, 126.8633118458421, '<div style ="padding:5px">목동사거리점</div>'],
        [37.53791447708692, 126.87910469152305, '<div style ="padding:5px">목동2단지점</div>'],
        [37.52879395022653, 126.86459930608784, '<div style ="padding:5px">목동역점</div>'],
        [37.52603866008391, 126.87059670711452, '<div style ="padding:5px">목동이마트</div>'],
        [37.53495772427679, 126.84715016217869, '<div style ="padding:5px">까치산역점</div>'],
        [37.52122048297229, 126.84180923336531, '<div style ="padding:5px">신월신곡점</div>'],
        [37.521678431773935, 126.85306848870162, '<div style ="padding:5px">신정네거리점</div>'],
        [37.52603866008391, 126.87059670711452, '<div style ="padding:5px">목동이마트</div>'],
        [35.135273832997996, 129.09168626067992, '<div style ="padding:5px">대연점</div>'],
        [37.55867905463666, 126.93877229503377, '<div style = "padding:5px">신촌점</div>'],
        [37.558594003945, 126.93669090096985, '<div style="padding:5px">연대점</div>'],
        [37.55721616921479, 126.94525251160395, '<div style="padding:5px">이대역점</div>']
    ]*/

function map(){

    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.56733, 126.98043), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
            mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
        };

    // 지도를 생성한다
    let map = new kakao.maps.Map(mapContainer, mapOption);



    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {

            let lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

        });

    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        let locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
            message = 'geolocation을 사용할수 없어요..'

        displayMarker(locPosition, message);
    }


    for (let i = 0; i < data.length; i++) {
        // 지도에 마커를 생성하고 표시한다
        let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(data[i][0], data[i][1]), // 마커의 좌표
            draggable: true, // 마커를 드래그 가능하도록 설정한다
            map: map // 마커를 표시할 지도 객체
        });
        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content: data[i][2]
        });

        infowindow.open(map, marker);

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map, marker, infowindow) {
            return function () {
                infowindow.open(map, marker);
            };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow) {
            return function () {
                infowindow.close();
            };
        }
    }

    // 지도 중심 좌표 변화 이벤트를 등록한다
    kakao.maps.event.addListener(map, 'center_changed', function () {
        console.log('지도의 중심 좌표는 ' + map.getCenter().toString() + ' 입니다.');
    });

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map,
            position: locPosition
        });

        let iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
    }

}

