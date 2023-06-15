import dreams from './assets/music/dreams.mp3'
import apple from './assets/music/GreenApple.mp3'
import hey from './assets/music/hey.mp3'
import fine from './assets/music/FineDining.mp3'
import god from './assets/music/God.mp3'
import stollin from './assets/music/Strollin.mp3'
import lawrence from './assets/music/Lawrence.mp3'

const data = [
  {
    id: 1,
    url: '/k/kpop1',
    title: '메버(MEVER)-K-POP',
    heading: 'BTS 달콤한 초콜릿을 3D매장에서',
    subTitle: 'K-POP 아티스트 3D굿즈샵',
    navLink: '아티스트 초콜렡/맥스타일',
    music: dreams,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=kU9eeAy9kCj'
  },
  {
    id: 2,
    url: '/k/art1',
    title: '메버(MEVER)-청담갤러리1',
    heading: '블루칩 작가와의 로맨스',
    subTitle: '청담 아트불 갤러리 1부',
    navLink: '청담 갤러리1부(단체전)',
    music: apple,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=8VDqLQx3Yi4'
  },
  {
    id: 3,
    url: '/k/art2',
    title: '메버(MEVER)-청담갤러리2',
    heading: '블루칩 작가와의 로맨스',
    subTitle: '청담 아트불 갤러리 2부',
    navLink: '청담 갤러리2부(단체전)',
    music: hey,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=32VU1LiiVZH'
  },
  {
    id: 4,
    url: '/k/art3',
    title: '메버(MEVER)-남산갤러리',
    heading: '블루칩 작가와의 로맨스',
    subTitle: '김미영 작가',
    navLink: '남산 갤러리(김미영 작가)',
    music: lawrence,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=KqoFYz7yVvr'
  },
  {
    id: 5,
    url: '/k/art4',
    title: '메버(MEVER)-종로갤러리',
    heading: '블루칩 작가와의 로맨스',
    subTitle: '종로 백영희 작가',
    navLink: '종로 갤러리 1 (백영희 작가)',
    music: stollin,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=mBfUXCVQb6g'
  },
  {
    id: 6,
    url: '/k/antique1',
    title: '메버(MEVER)-아트아카데미',
    heading: '고대 영혼이 담긴 유물을 내방으로',
    subTitle: '대전 아트아카데미',
    navLink: '대전 아트아카데미',
    music: fine,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=7smSPVHaGGq'
  },
  {
    id: 7,
    url: '/k/cafe2',
    title: '메버(MEVER)-대전자산협회',
    heading: '대전 자산협회 3D 대전자산협회',
    subTitle: '대전자산협회',
    navLink: '대전자산협회',
    music: god,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=uyR8UvaRnrh'
  },
  {
    id: 8,
    url: '/k/cafe1',
    title: '메버(MEVER)-선릉카페',
    heading: '삼익영농 프랜차이즈 3D 매장',
    subTitle: '김정준의 『대단한커피』 1호점',
    navLink: '선릉 카페(대단한 커피)',
    music: dreams,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=XEUeL5Gd51C'
  },
  {
    id: 9,
    url: '/k/hospital1',
    title: '메버(MEVER)-지인병원',
    heading: '건강검진과 진료까지 3D로 한번에',
    subTitle: '강남 지인병원',
    navLink: '강남 지인병원',
    music: apple,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=oqd3rNQ5C9S'
  },
  {
    id: 10,
    url: '/k/academy1',
    title: '메버(MEVER)-아이비터탑',
    heading: '글로발 인재를 위한 3D유학원',
    subTitle: '강남 아이비터탑',
    navLink: '강남 아이비터탑',
    music: hey,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=nekgGa51Y5H'
  },
  {
    id: 11,
    url: '/k/office1',
    title: '메버(MEVER)-삼익영농',
    heading: '10만조합원 성공을 삼익영농 3D가 함께합니다',
    subTitle: '삼익영농',
    navLink: '법인 빌딩 (삼익영농)',
    music: fine,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=8rvkG5eKRXy'
  },
  {
    id: 12,
    url: '/k/mart1',
    title: '메버(MEVER)-편의점',
    heading: '실제 쇼핑하듯 주문하세요',
    subTitle: '김정준의 "대단한 편의점"',
    navLink: '선릉 대단한 편의점',
    music: god,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=FQhqMNwEBLi'
  },
  {
    id: 13,
    url: '/k/parking1',
    title: '메버(MEVER)-지하주차장',
    heading: '테크노파크 지하주차장',
    subTitle: '부천재건축단지',
    navLink: '부천재건축단지',
    music: stollin,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=oNe9oE7bB8u'
  },
  {
    id: 14,
    url: '/k/rebuilding1',
    title: '메버(MEVER)-대진아파트',
    heading: '재건축 아파트의 3D관리 시스템',
    subTitle: '부천 아파트단지',
    navLink: '부천 대진아파트',
    music: lawrence,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=CnCv5QgtGq1'
  },
  {
    id: 15,
    url: '/k/hall1',
    title: '메버(MEVER)-부산벡스코',
    heading: '3D 행사장의 배치도를 예약해보세요',
    subTitle: '부산벡스코',
    navLink: '부산벡스코',
    music: dreams,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=De7F2AJwRAo'
  },
  {
    id: 16,
    url: '/k/building2',
    title: '메버(MEVER)-수원 관공서',
    heading: '성능 안전 점검을 3D로 한눈에 관리',
    subTitle: '수원 관공서',
    navLink: '수원 관공서',
    music: apple,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=p4ceXV1MSvG'
  },
  {
    id: 17,
    url: '/k/warship1',
    title: '메버(MEVER)-기념관',
    heading: '3D참수리호의 6명의 영웅들',
    subTitle: '용산 전쟁 기념관',
    navLink: '용산 전쟁 기념관',
    music: hey,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=b2Yhn9w1uwF'
  },
  {
    id: 18,
    url: '/k/academy2',
    title: '메버(MEVER)-고려직업전문학교',
    heading: '미네르바의 혁신을 넘어',
    subTitle: '3D AI 고려직업전문학교',
    navLink: '고려직업전문학교',
    music: stollin,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=f3qYTV3MHmB'
  },
  {
    id: 19,
    url: '/k/academy3',
    title: '메버(MEVER)-고려직업전문학교',
    heading: '미네르바의 혁신을 넘어',
    subTitle: '3D AI 고려직업전문학교',
    navLink: '고려직업전문학교 3',
    music: fine,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=aFG3kyivcVs'
  },
  {
    id: 20,
    url: '/k/academy4',
    title: '메버(MEVER)-고려직업전문학교',
    heading: '미네르바의 혁신을 넘어',
    subTitle: '3D AI 고려직업전문학교',
    navLink: '아카데미 4',
    music: fine,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=4xCsZRuhmA6'
  },
  {
    id: 21,
    url: '/k/academy5',
    title: '메버(MEVER)-고려직업전문학교',
    heading: '미네르바의 혁신을 넘어',
    subTitle: '3D AI 고려직업전문학교',
    navLink: '아카데미 5',
    music: fine,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=aFG3kyivcVs'
  },
  {
    id: 22,
    url: '/k/office2',
    title: '메버(MEVER)-크럼플 오피스',
    heading: '5층 크럼플 오피스',
    subTitle: '5층 크럼플 오피스',
    navLink: '크럼플 오피스',
    music: god,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=sVfsQSq6La8'
  },
  {
    id: 23,
    url: '/k/studio1',
    title: '메버(MEVER)-스튜디오',
    heading: '스튜디오',
    subTitle: '스튜디오',
    navLink: '스튜디오',
    music: lawrence,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=8saUqrWjNtX'
  },
  {
    id: 24,
    url: '/k/hall2',
    title: '메버(MEVER)-부산벡스코',
    heading: '3D 행사장의 배치도를 예약해보세요',
    subTitle: '부산벡스코',
    navLink: '부산벡스코 2',
    music: dreams,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=mDDYpSBHtbm'
  },
  {
    id: 25,
    url: '/k/machine1',
    title: '메버(MEVER)-부산벡스코/수원 광공서',
    heading: '성능.안전점검을 3D로 한눈에 괄리',
    subTitle: '수원 광공서',
    navLink: '벡스코/수원 광공서',
    music: apple,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=p4ceXV1MSvG'
  },
  {
    id: 26,
    url: '/k/redevelopment1',
    title: '메버(MEVER)-노량진 컵밥거리',
    heading: '재개발의 전과 후를 3D학인 해 보세요',
    subTitle: '노량진 컵밥거리',
    navLink: '노량진 컵밥거리',
    music: hey,
    matterLink: 'https://my.matterport.com/show/?play=1&share=0&wh=0&m=mDDYpSBHtbm'
  },

]

export default data