import React from 'react';
import { useParams } from 'react-router-dom';
import food1 from '../img/greengrapeade.png';
import food2 from '../img/tomato.png';
import food3 from '../img/watermelon.png';
import food4 from '../img/cucumber.png';
import food5 from '../img/mango.png';

// 음식 데이터 정의
const foodData = [
  {
    url: 'food1',
    name: '청포도에이드',
    image: food1,
    recipe: `
    재료 : 청포도 180g, 설탕 180g, 레몬 반 개, 식초 3T


1. 식초 3스푼을 물에 희석해서 5분 내로 청포도를 담가준 후, 흐르는 물에 꼼꼼하게 세척해 주세요.

2. 깨끗이 세척한 청포도는 물기를 제거한 후, 적당한 두께로 썰어주세요.

3. 볼에 잘게 잘라놓은 포도 180g과 설탕 180g을 넣어준 뒤, 설탕이 살짝 녹을 때까지 저어주세요.

4. 레몬 반 개를 짜서 넣어줍니다.

5. 설탕이 녹을 때까지 1 ~ 2 시간 정도 실온에서 한 번씩 저어주세요.

6. 설탕이 모두 녹은 걸 확인한 뒤, 열탕 처리된 유리병에 담아 냉장고에서 하루 정도 숙성해 주세요.

7. 완성된 수제청을 유리컵에 3스푼 정도 넣어주세요.

8. 얼음과 탄산수까지 넣으면 청포도 에이드 완성!
    `,
  },
  {
    url: 'food2',
    name: '토마토 마리네이드',
    image: food2,
    recipe: `
    재료 : 방울토마토 300g, 양파 60g, 올리브 오일 2T, 발사믹 식초 1.5T, 올리고당 1.5T, 레몬즙 1T, 소금 1/3t, 후추 1/3t

1. 방울토마토 300g은 깨끗이 세척한 후 꼭지 부분에 십자로 칼집을 넣어주세요.

2. 냄비에 토마토가 완전히 잠길 만큼의 물을 채우고, 껍질이 살짝 벌어질 정도로만 데쳐 주세요.

3. 찬물로 헹궈서 열기를 식힌 다음, 껍질을 벗겨내서 볼에 담아주세요.

4. 양파 60g은 얇은 두께로 썬 다음, 찬물에 5분 정도 담가두어서 매운맛을 빼내고, 적당한 크기로 다져주세요.

5. 토마토를 담아둔 볼에 자른 양파, 식초 1.5T, 올리브오일 2T, 레몬즙 1T, thrma 1/3t, 올리고당 1.5T, 후추 1/3t를 넣고 섞어주세요.

6. 1 ~ 2 시간 정도 냉장고에서 저온 숙성을 끝내면 토마토 마리네이드 완성!
    `,
  },
  {
    url: 'food3',
    name: '수박 화채',
    image: food3,
    recipe: `
    재료 : 수박 1/2통, 후르츠칵테일 1/2통, 우유 400ml, 사이다 200ml, 블루베리, 얼음

1. 수박 겉껍질을 깨끗하게 세척하여 끝부분을 살짝 잘라주세요. 끝이 평평해야 그릇으로 사용할 수 있습니다.

2. 수박을 반으로 잘라 아이스크림 스쿱을 활용해서 동그란 모양으로 파주세요.

3. 수박 그릇에 파준 수박과 후르츠칵테일 1/2통, 통조림 국물을 한 국자 넣어주세요.

4. 위에 블루베리와(생략 가능) 얼음을 넣어주세요.

5. 우유 400ml, 사이다 200ml를 부어주세요. (우유와 사이다의 비율은 2:1)

6. 수박 화채 완성!
    `,
  },
  {
    url: 'food4',
    name: '오이 냉국',
    image: food4,
    recipe: `
    재료 : 오이 1개, 불린 미역 1컵, 청양고추 1개, 동치미 냉면 육수 1봉(330g), 차가운 물 300ml, 식초 2T, 설탕 1T, 국간장 1T, 통깨, 얼음

1. 오이는 흐르는 물에 씻은 후 채 썰어주세요.

2. 20 ~ 30분 정도 불려준 미역은 물기를 꾹 짜서 먹기 좋게 썰어주세요. 

3. 청양고추는 1개 정도 어슷 썰어주세요.

4. 밀폐용기에 오이, 미역, 청양고추를 담아준 뒤, 식초 2T, 설탕 1T, 국간장 1T를 넣고 섞어주세요.

5. 찬물 300ml와 시판 냉면육수 1봉(330g)을 넣고 잘 저어주세요.

6. 통깨를 적당히 넣어주고 냉장고에 1 ~ 2 시간 정도 숙성한 뒤, 얼음을 넣어주면 오이 냉국 완성!
    `,
  },
  {
    url: 'food5',
    name: '망고 아이스크림',
    image: food5,
    recipe: `
    재료 : 냉동 망고 800g, 레몬즙 3T, 꿀 2T, 우유 120ml

1. 믹서기에 냉동망고 800g, 레몬즙 3T, 꿀 2T, 우유 120ml를 넣고 갈아줍니다.

2. 통에 평평하게 담아준 뒤, 냉동실에서 4시간 이상 얼려주세요.

3. 잘 얼은 망고 아이스크림을 스쿱으로 동그랗게 퍼주세요.

4. 그릇에 담아주고 냉동 망고를 올려 주면 망고 아이스크림 완성!
    `
  },
];

const Recipe = () => {
  const { url } = useParams();
  const food = foodData.find((f) => f.url === url);

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <img src={food.image} alt={food.name} style={styles.image} />
        <h2 style={styles.foodName}>{food.name}</h2>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <h3 style={styles.recipeTitle}>레시피</h3>
        <div style={styles.recipeBox}>
          <pre style={styles.recipeText}>{food.recipe}</pre>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '10rem',
    gap: '2rem',
    maxWidth: '75rem',
    margin: '0 auto',
    flexWrap: 'nowrap'
  },
  leftPanel: {
    flex: '1 1 45%',
    textAlign: 'center',
    alignContent: 'center'
  },
  image: {
    width: '100%',
    maxWidth: '25rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
  },
  rightPanel: {
    flex: '1 1 50%',
    maxHeight: '31.25rem',
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: '1rem 2rem 1rem 2rem',
    border: '2px solid rgb(38, 180, 100)',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgb(147, 192, 169, 0.605)',
  },
  foodName: {
    color: 'rgb(33, 155, 94)',
  },
  recipeTitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: 'rgb(33, 155, 94)',
  },
  recipeBox: {
    height: '100%',
  },
  recipeText: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.6',
    textAlign: 'left',
    color: '#444',
    fontFamily: 'NanumSquareNeo, sans-serif'
  },
};

export default Recipe;