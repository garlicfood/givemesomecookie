/*
CCJ,0
HBM,1
OR,2
IHA,3
OREO,4
W,5
MM,6
TCL,7
MAC,8
DJ,9
ME,10
RC,11
BM,12
ABB,13
MS,14
MC,15
SS,16
LS,17
AM,18
CF,19
NCC,20
PA,21
BBS,22
WD,23
ZAH,24
CC,25
C,26 
31Y,27
G,28
CJ,29
WBJ,30
V,31
CM,32
NB,33
*/


const qnaList = [
    {
      q: '1. 아이스크림의 식감은?',
      a: [
        { answer: 'A)아이스크림도 씹는 맛이지!!', type: [3,5, 9, 11,10,12,13,17,19,21,16] },
        { answer: 'B)부드럽게 싹~!', type: [31,26,28,2,6,18,27] },
        { answer: 'C) A,B둘 사이 어딘가..?', type: [20, 4,32,15,23,25] },
      ]
    },
    {
      q: '2. 지금 혈중당농도는?',      
      a: [
        { answer: 'A) 70%~(지금 먹고 끝!)', type: [18,7,31,4,28,8] },
        { answer: 'B) 50%(그럭저럭..)', type: [22,26,1,14] },
        { answer: 'C) ~30%(당 급속충전)', type: [11,25,29,5,21,32,2,16] },
      ]
    },
    {
      q: '3. 현재 다이어트 중이지만 아이스크림은 포기 못해!!',
      a: [
        { answer: 'A) 아이스크림은 살안쪄! 살은 내가쪄ㅜㅜ(포기,,)', type: [22,4,30,2,27,18] },
        { answer: 'B) 칼로리 낮은 아이스크림은 괜찮지 않을까..?(절충)', type: [15,7,9,31,6,28,0,8] },
        { answer: 'C) 맛있게 먹으면 0칼로리~!(포기 못해)', type: [19,17,20,10,11,21,13,32] },
      ]
    },
    {
      q: '4.좋아하는 과일은?',
      a: [
        { answer: 'A) 사과', type: [18] },
        { answer: 'B) 딸기', type: [29,30,23,22,14]},
        { answer: 'C) 수박', type: [6] },
        { answer: 'C) 망고', type: [1] },
      ]
    },


    {
      q: '5. 지금 내 기분은?',
      a: [
        { answer: "A) I'm Happy~", type: [6,14,18,29,30,22,23,1] },
        { answer: "B) Soso... ", type: [31,28,2,27] },
        { answer: "C) I'm Angry!!", type: [3,5, 9, 11,10,12,13,17,19,21,16 ] },
        { answer: "D) I'm Sad,,", type: [0,10,26,19,4,8,32] },
      ]
    },

  
    {
      q: '6.좋아하는 토핑은?',
      a: [
        { answer: 'A) 칩', type: [32,15] },
        { answer: 'B) 볼', type: [10,19] },
        { answer: 'C) 크런치 ', type: [12,19,4,17] },
        { answer: 'D) 젤리 ', type: [9] },
        { answer: 'E) 떡 ', type: [11] },
        { answer: 'F) 팝핑 ', type: [16] },
        { answer: 'G) 견과류 ', type: [3,21,24,13,5,] },
      ]
    },
    {
      q: '7.나는 민초단이다?!',
      a: [
        { answer: 'A) 민초단!!', type: [15] },
        { answer: 'B) 반민초단!!', type: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32 ] },
      ]
    },
    {
      q: '8. 평소 녹차나 말차를 즐겨먹는다?',
      a: [
        { answer: 'A) YES!!! ', type: [28,19] },
        { answer: 'B) Nope!.', type: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32 ] },
      ]
    },
    {
      q: '9.신호등하면 가장 먼저 떠오르는 불은?',
      a: [
        { answer: 'A) 빨간불', type: [0,22,29,23,14 ] },
        { answer: 'B) 노란불', type: [31,25,7,1,3,20,11] },
        { answer: 'C) 초록불', type: [28,21,19,15,33,16 ,6,9,2,18] },
      ]
    },
    {
      q: '10. 내 삶의 가치관은? ',
      a: [
        { answer: 'A) 다다익선', type: [17,13,12,24,23] },
        { answer: 'B) One and Olny', type: [0,16,15,2,21,28,25] },
        { answer: 'C) Blance', type: [29,30,14,5,21,4,8] },
      ]
    },
    {
      q: '11. 내가 원하는 연애 스타일은? ',
      a: [
        { answer: 'a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: [12,13,15,1,17,22,10,11] },
        { answer: 'b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: [7,4,21,8,15,0,16,30] },
        { answer: 'c. 연애는 마음가는대로! 불타오르는 연애가 최고지.', type: [0,7,27,2, 23,3,19,27] },
      ]
    },
    {
      q: '12.연인과 가장 챙기고 싶은 기념일은?',
      a: [
          { answer: 'E)50일', type: [7,27,2 ]  },
          { answer: 'F)100일', type: [12,15] },
          { answer: 'G)200일', type: [4,21,8] },
          { answer: 'H)1년', type: [25,33,18] },
          { answer: 'I)1000일', type: [5,11] },
          { answer: 'J)5년', type: [32,19,14] },

      ]
    },
  {
      q: '13.가장 좋아하는 요일은?',
      a: [
        { answer: 'A)월', type: [7,1,33,20 ] },
        { answer: 'B)화', type: [22,11,27,2 ]  },
        { answer: 'C)수', type: [25,33,18,19] },
        { answer: 'D)목', type: [29,5,0,11 ]  },
        { answer: 'E)금', type: [13,4,21,8 ]  },
        { answer: 'F)토', type: [17,10,14 ]  },
        { answer: 'G)일', type: [15,24,28,26]  },
      ]
    },
  {
      q: '14.공휴일중 가장 기다려지는 날은?',
      a: [
        { answer: 'A)설', type: [15,0,30]  },
        { answer: 'B)추석', type: [13,1 ]  },
        { answer: 'C)크리스마스', type: [23,3,27] },
        { answer: 'D)어린이날', type: [16,21,29 ] },

   
      ]
    },
  {
      q: '15.무지개의 색 중 가장 좋아하는 색은?',
      a: [
        { answer: 'A)빨강', type: [12,0,3]  },
        { answer: 'B)주황', type: [32,2,19,14]  },
        { answer: 'C)노랑', type: [17,22,10,11] },
        { answer: 'D)초록', type: [7,4,21,8] },
        { answer: 'E)파랑', type: [13,15,1] },
        { answer: 'F)남색', type: [15,16,30] },
        { answer: 'G)보라', type:[25,26,9,11] },
   
      ]
    }
  ]
  
  const infoList = [
    {
      name: '체리 초코 쥬빌레',
      desc: '체리쥬빌레와 초콜릿의 달콤한 만남!'
    },
    {
      name: '꿀.바.망',
      desc: '허니망고 아이스크림과 바나나 아이스크림 속에 망고 다이스가 쏙쏙!'
    },
    {
      name: '오버 더 레인보우 샤베트',
      desc: '파인애플 샤베트, 라즈베리 샤베트, 오렌지 샤베트에, 상큼한 레몬&라임 샤베트가 어우러진 제품'
    },
    {
      name: '아이스 허니버터 아몬드',
      desc: '버터 스카치 아이스크림과 바닐라 아이스크림 속에 단짠단짠 허니버터 아몬드가 쏙쏙'
    },
    {
      name: '오레오 쿠키 앤 크림',
      desc: '부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!'
    },
    {
      name: '월넛',
      desc: '고소하고 향긋한 호두 아이스크림에 호두가 듬뿍 들어있는 제품'
    },
    {
      name: '머스크 메론',
      desc: '후레쉬한 메론의 진하고 부드러운 맛'
    },
    {
      name: '트리플 치즈 러브',
      desc: '뉴욕 치즈케이크, 카라멜 치즈케이크, 까망베르 치즈 세가지 치즈 아이스크림의 조화!'
    },
    {
      name: '매드 어바웃 초콜릿',
      desc: '초콜릿 첨가로 더욱 깔끔하게 즐기는 아이스크림'
    },
    {
      name: '디노 젤리',
      desc: '파인애플 & 그린 애플 아이스크림에 알록달록 공룡젤리가 콩콩!'
    },
    {
      name: '엄마는 외계인',
      desc: '밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림'
    },
    {
      name: '쫀떡궁합',
      desc: '고소한 흑임자, 인절미 아이스크림에 쫄깃한 떡리본과 바삭한 프랄린 피칸이 쏙쏙!'
    },
    {
      name: '봉쥬르 마카롱',
      desc: '부드러운 크림치즈 아이스크림과 마카롱, 초콜릿의 달콤한 만남!'
    },
    {
      name: '아몬드 봉봉',
      desc: '입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게!'
    },
    {
      name: '우유에 빠진 딸기',
      desc: '설(雪)목장 유기농 우유와 산청딸기의 싱그러운 만남!'
    },
    {
      name: '민트 초콜릿 칩',
      desc: '쿨한 그녀들의 선택! 상쾌한 민트향에 초코칩까지!'
    },
    {
      name: '슈팅스타',
      desc: '톡톡 터지는 팝핑 캔디와 스프링클 캔디,상큼한 체리 시럽이 들어있는 제품'
    },
    {
      name: '사랑에 빠진 딸기',
      desc: '크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍 들어있는 아이스크림'
    },
    {
      name: '애플 민트',
      desc: '상큼한 사과와 시원한 민트향이 기분까지 상쾌하게'
    },
    {
      name: '초코나무 숲',
      desc: '2014년 아이스크림 콘테스트 1위 선정작!'
    },
    {
      name: '뉴욕 치즈케이크',
      desc: '부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림'
    },
    {
      name: '피스타치오 아몬드',
      desc: '피스타치오향과 아몬드가 만나 고소함이 두배!'
    },
    {
      name: '베리베리 스트로베리',
      desc: '새콤상큼 딸기 과육이 듬뿍!'
    },
    {
      name: '바람과 함께 사라지다',
      desc: '블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각'
    },
    {
      name: '자모카 아몬드 훠지',
      desc: '깊고 풍부한 자모카 아이스크림에 고소한 아몬드와 초콜릿 훠지 시럽이 들어있는 제품'
    },
    {
      name: '이상한 나라의 솜사탕',
      desc: '부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행'
    },
    {
      name: '초콜릿',
      desc: '진하고 부드러운 정통 초콜릿 아이스크림'
    },
    {
      name: '31요거트',
      desc: '유산균이 살아있는 오리지널 요거트 아이스크림'
    },
    {
      name: '그린티',
      desc: '엄선된 녹차를 사용한 싱그러운 그린티 아이스크림'
    },
    {
      name: '체리쥬빌레',
      desc: '체리과육이 탱글탱글 씹히는 체리 아이스크림'
    },
    {
      name: '워싱턴 블루베리 쥬빌레',
      desc: '고품질의 워싱턴주 블루베리 아이스크림과 블루베리향 사베트가 어우러진 맛'
    },
    {
      name: '바닐라',
      desc: '부드럽고 깔끔한 바닐라 아이스크림'
    },
    {
      name: '초콜릿 무스',
      desc: '초콜릿 칩이 들어있는 진한 초콜릿 아이스크림'
    },
    {
      name: '북극곰 폴라베어',
      desc: '폴라베어처럼 쿨~한 민트 아이스크림에 크런치가 쏙쏙!'
    },
  ]