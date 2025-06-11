import React from 'react';
import { useParams } from 'react-router-dom';
import SummerDazeMP3 from '../audio/SummerDaze.mp3';
import AttentionMP3 from '../audio/Attention.mp3';
import HeatMP3 from '../audio/열기.mp3';
import JoggingMP3 from '../audio/조깅.mp3';
import SummerfestaMP3 from '../audio/Summerfesta.mp3';
import EverblueMP3 from '../audio/Everblue.mp3';
import MATWFMP3 from '../audio/MATWF.mp3';
import DriveMP3 from '../audio/Drive.mp3';

const musicData = [
  {
    url: 'SummerDaze',
    title: 'Summer Daze',
    artist: '수진',
    cover: 'https://musicmeta-phinf.pstatic.net/album/031/635/31635225.jpg?type=r360Fll&v=20240524122228',
    audio: SummerDazeMP3,
    lyrics: `
            Summer daze it takes me up so high
            That moment when I knew this seemed so right, hey
            Your touch like heaven love me through the night
            I don't wanna hold back, this time
            I just wanna know that you're mine

            It feels like I'm floating
            No way to know where we're going
            Got me so haunted oh
            It feels like you've noticed
            The never ending devotion
            Got me so haunted oh

            Yeah
            I miss when we were drinking
            You know it got me thinking
            About you all the time
            Ain't nobody better
            Just tell me how you wanna do this
            Baby now if you're ready to go

            I'm letting everyone see it
            Who cares if they don't believe it?
            Not running from the feeling
            We're creating
            You gotta know I mean it
            Cuz I waited so long

            It feels like I'm floating
            No way to know where we're going
            Got me so haunted oh
            It feels like you've noticed
            The never ending devotion
            Got me so haunted oh`
  },
  {
    url: 'Attention',
    title: 'Attention',
    artist: 'NewJeans',
    cover: 'https://musicmeta-phinf.pstatic.net/album/007/795/7795016.jpg?type=r360Fll&v=20240221013522',
    audio: AttentionMP3,
    lyrics: `
            You and me
            내 맘이 보이지
            한참을 쳐다봐
            가까이 다가가
            You see
            You see, ey ey ey ey

            One, two, three
            용기가 생겼지
            이미 아는 네 눈치
            고개를 돌려 천천히
            여기
            You see
            여기 보이니

            Looking for attention 너야겠어
            확실하게 나로 만들겠어
            Stop, eyyy
            Drop the question
            Drop the, drop the question
            Want attention
            Wanna want attention

            You give me butterflies you know
            내 맘은 온통 paradise
            꿈에서 깨워주지 마

            You got me looking for attention
            You got me looking for attention
            가끔은 정말
            헷갈리지만
            분명한 건
            Got me looking for attention

            널 우연히 마주친 척할래
            못 본 척 지나갈래
            You're so fine
            Gotta gotta get to know ya
            나와 나와 걸어가 줘

            지금 돌아서면
            I need ya, need ya, need ya
            To look at me back
            Hey 다 들켰었나
            널 보면 하트가 튀어나와

            난 사탕을 찾는 baby (baby)
            내 맘은 설레이지
            Eyyy, drop the question
            Drop the, drop the question
            Want attention
            Wanna want attention

            You give me butterflies you know
            내 맘은 온통 paradise
            꿈에서 깨워주지 마

            You got me looking for attention
            You got me looking for attention
            가끔은 정말
            헷갈리지만
            분명한 건
            Got me looking for attention

            You got me looking for attention
            You got me looking for attention
            가끔은 정말
            헷갈리지만
            분명한 건
            Got me looking for attention

            A T T E N T I on
            Attention is what I want
            A T T E N T I on
            Attention is what I want
            A T T E N T I on
            Attention is what I want
            A T T E N T I on
            You got me looking for attention`
  },
  {
    url: 'Heat',
    title: '열기',
    artist: '이달의 소녀',
    cover: 'https://musicmeta-phinf.pstatic.net/album/002/496/2496191.jpg?type=r360Fll&v=20241003050022',
    audio: HeatMP3,
    lyrics: `
            Ayy 뜨거워진 열기
            Eyy 멈춰줄래 Windy
            You know you know
            You know you know
            Hey 원래 그런 거야
            High 오를수록 숨차
            You know you know

            하나도 겁낼 필요 없는데
            나랑 높이 위로 붕붕
            하늘 높이 위로 붕붕
            우리에겐 시간이 좀 모자라
            나랑 높이 위로 붕붕
            하늘 높이 위로 붕붕

            오늘 딱 하루 너를 초대할게
            내일 내 맘이 전부 변하기 전에

            무겁게 안고 있는 걱정들은 여기 두고 가
            이제 발이 떠 Tonight

            더 높이 붕붕 뜰래 위로
            더 높이 붕붕 뜰래 위로

            Hey 더 멀리 가도 좋아
            Right 알 수 없는 비행
            콜록콜록 You know you know
            Try 손을 잡는 구름
            Time 어느샌가 훌쩍
            You know you know
            You know you know

            오늘 딱 하루 너를 초대할게
            내일 내 맘이 전부 변하기 전에
            무겁게 안고 있는 걱정들은 여기 두고 가
            이제 발이 떠 Tonight

            더 높이 붕붕 뜰래 위로
            더 높이 붕붕 뜰래 위로

            눈으로 보아도 너는 믿을 수가 없지
            지금 기분을 다 다 다 알아
            끝난 게 아니야
            알 수 없는 우리 비행
            널 데려가 더 위로

            오늘 난 너를 위해 준비했어
            아름다운 별 반짝 빛나고 있어
            여기서 끝이 아냐 고갤 들고 나를 찾아봐
            저기 달이 뜬 Tonight

            더 날아보자Trust me
            더 채워줄게 하늘 위
            더 높이 붕붕 뜰래 위로
            더 날아보자 Trust me
            더 채워줄게 하늘 위
            더 높이 붕붕 뜰래 위로`
  },
  {
    url: 'Jogging',
    title: 'Jogging',
    artist: 'LUCY',
    cover: 'https://musicmeta-phinf.pstatic.net/album/004/785/4785607.jpg?type=r360Fll&v=20250205161520',
    audio: JoggingMP3,
    lyrics: `
            그대 멀리 떠난다면
            홀로 어딜 가고 싶은가요
            그 한숨 돌릴 새도 없이
            또 내 세상은 빙글빙글 돌아가

            반대로 내가 가고 싶은 대로만 간다면
            그저 틀린 길만 나올까
            오늘도 우린 쉬지 않고 달렸잖아
            마라톤 하듯이

            그러다 머리 핑 돌아
            가끔 한 번은
            동네 한번 빙 돌아
            마음 편하게
            너는 빛보다
            밝게 빛나

            급하게 가지마 그렇게 머물러줘
            푸른 바람처럼
            그런 너이기를

            몸은 괜히 뻐근하고
            오늘따라 괜히 나른하죠
            같은 일상 속에서
            하루에 날 위한 시간은 얼마나 있을까

            반대로 내가 가고 싶은 대로만 간다면
            그저 틀린 길은 아닐 걸

            오늘도 우린 쉬지 않고 달렸잖아
            마라톤 하듯이

            그러다 머리 핑 돌아
            가끔 한 번은
            동네 한번 빙 돌아
            마음 편하게
            너는 빛보다
            밝게 빛나

            급하게 가지마 그렇게 머물러줘
            내일을 그리던

            날 잃어버리고 있다면
            그런 그댄 행복하다 할 수 있나요
            지금까지 하고 싶은 것들
            바래왔던 것들 전부
            잊고 있던 너잖아
            이제 너를 힘들게 하지마

            더는 안가 정해진 길론
            돌아가 넌 푸른빛을 따라
            한 번 더 뛸 수 있다면
            그땐 너의 맘이 닿는 곳까지
            달려가고 있기를`
  },
  {
    url: 'Summerfesta',
    title: 'Summerfesta',
    artist: 'IVE',
    cover: 'https://musicmeta-phinf.pstatic.net/album/031/883/31883600.jpg?type=r360Fll&v=20240628180827',
    audio: SummerfestaMP3,
    lyrics: `
            봐 지금 네 맘이 뭐를 원하는지
            Why 타는 갈증에 목이 마르는지

            Try 우린 필요해 뭔가 색다른 특별함
            Oh that's alright
            Yeah I'm alright

            타오르는 Passion
            더는 숨길 수가 없어 No more no more
            솔직하게 Action 너의
            맘이 가는 대로 Let's go let's go

            시원하게
            Drink your heart out
            소리쳐봐 What you want it
            It's so easy-fizzy

            다시 한번
            Drink your heart out
            온몸 가득 짜릿하지
            It's so easy-fizzy
            Baby you can

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah

            Ah
            Now 번져와 번져와 번져와 feels like
            Wow
            자 즐겨봐 즐겨봐 즐겨봐 Festa
            파도쳐오는 파란 Energy (Yeah)
            매 순간이 기분 좋은 Challenge (Yeah)
            한계는 없는걸
            이제 확실히 느껴 Real possibility

            남들의 눈치 따윈 보지 않아
            기회는 내 손으로 골라잡아
            목표를 향한 My thirsty
            단숨에 적셔 Exciting
            축제는 끝날 리 없어
            Awesome woo

            차오르는 Tension
            더는 숨길 생각 없어 No more no more
            솔직하게 Action 너의
            맘이 가는 대로 Let's go let's go

            시원하게
            Drink your heart out
            소리쳐봐 What you want it
            It's so easy-fizzy

            다시 한번
            Drink your heart out
            온몸 가득 짜릿하지
            It's so easy-fizzy
            Baby you can

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah (Oh oh yeah)

            You can drink your (Woo)
            Drink your heart out (You can drink your heart out)
            You can drink your
            Drink your heart out (You can drink your heart out)
            You can drink your (Baby)
            Drink your heart out
            (You can drink your heart out)

            Don't be afraid (Don't be afraid yeah)
            Drink your heart out
            어떤 것도 가능하지 (Woah)
            It's so easy-fizzy
            다시 한번 (다시 한번)

            Drink your heart out (Drink your heart out)
            찾아왔던 즐거움이 (Oh oh oh oh)
            있어 바로 여기 (Baby you can)
            Baby you can

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah

            Drink drink
            You can drink your heart out
            Baby you can drink your heart out
            Yeah yeah`
  },
  {
    url: 'Everblue',
    title: 'Everblue',
    artist: 'Omoinotake',
    cover: 'https://musicmeta-phinf.pstatic.net/album/006/690/6690898.jpg?type=r360Fll&v=20250109104007',
    audio: EverblueMP3,
    lyrics: `
            白む空に 吐き出すため息は
            하얗게 물드는 하늘에 내뱉는 한숨은
            시라무 소라니 하키다스 타메이키와


            無色透明で まるで空っぽみたい
            무색투명해서 마치 텅 빈 것만 같아
            무쇼쿠토우메이데 마루데 카라포미타이


            ページをめくれば景色を変えるノベル
            페이지를 넘기면 풍경이 바뀌는 소설
            페-지오 메쿠레바 케시키오 카에루 노베루


            カレンダーめくっても変われもしない僕
            달력을 넘겨도 변하지 않는 나
            카렌다 메쿳테모 카와테모 시나이 보쿠


            擦る瞼 満員の電車の中
            눈을 비비는 만원 전철 안에서
            코스루 마부타 만인노 덴샤노 나카


            まるで誰かの人生のエキストラみたい
            마치 누군가의 인생의 엑스트라 같아
            마루데 다레카노 진세이노 에키스토라미타이


            ただ欲しかったのは今を生きる理由
            단지 원했던 건 지금을 살아가는 이유
            타다 호시캇타노와 이마오 이키루 리유


            イメージしてた未来にどれだけ近づけただろう
            상상했던 미래에 얼마나 가까워졌을까
            이메지시테타 미라이니 도레다케 치카즈케타다로우


            My life いつの日にかカラフル
            My life 언젠가는 컬러풀하게
            마이 라이프 이츠노 히니카 카라후루


            色のない 雨がいつか虹を描くように
            색 없는 비가 언젠가 무지개를 그리듯이
            이로노나이 아메가 이츠카 니지오 에가쿠요우니


            My life どんな色のエンドロール
            My life 어떤 색의 엔딩 크레딧
            마이 라이프 돈나 이로노 엔도로-루


            涙さえも 塗り重ねて描くキャンバス
            눈물조차도 덧칠하며 그려가는 캔버스
            나미다사에모 누리카사네테 에가쿠 캰바스


            青い願い 挫折の赤い痛み
            파란 소망과 좌절의 붉은 아픔
            아오이 네가이 자세츠노 아카이 이타미


            混ざる色味はまるでカサブタみたい
            섞이는 색감은 마치 딱지 같아
            마자루 이로미와 마루데 카사부타미타이


            瞬きも忘れて夢の中にいるんだ
            눈을 깜빡이는 것 조차 잊은 채 꿈속에 있어
            마바타키모 와스레테 유메노 나카니 이룬다


            何度夜が明けても覚めもしないほど深く
            몇 번이나 날이 새도 깨어나지 않을 만큼 깊이
            난도 요루가 아케테모 사메모시나이호도 후카쿠


            My life 傷跡さえ隠さず
            My life 상처조차 숨기지 않고
            마이 라이프 키즈아토사에 카쿠사즈


            胸を占める不安さえも 滲ませたっていいさ
            가슴을 채우는 불안함마저도 물들여도 좋아
            무네오 시메루 후안사에모 니지마세탓테 이이사


            My life 成れやしないジーニアス
            My life 천재가 될 순 없겠지만
            마이 라이프 나레야시나이 지-니아스


            だから僕のありのままを描くキャンバス
            그래서 있는 그대로의 나를 그리는 캔버스
            다카라 보쿠노 아리노마마오 에가쿠 캰바스


            どんな僕でいたい?
            어떤 내가 되고 싶어?
            돈나 보쿠데 이타이?


            どんなふうに生きたい?
            어떻게 살아가고 싶어?
            돈나 후우니 이키타이?


            問いかけをパレットに落として探した僕の色
            질문을 팔레트에 떨어뜨려 찾아낸 나만의 색
            토이카케오 파렛토니 오토시테 사가시타 보쿠노 이로


            理想や模倣などいらない 答えはそこにはない
            이상이나 모방따윈 필요 없어 답은 거기에 없어
            리소우야 모호우나도 이라나이 코타에와 소코니와 나이


            身体中を駆けるこの想いを今描く
            온몸을 달리는 이 마음을 지금 그려
            카라다쥬우오 카케루 코노 오모이오 이마 에가쿠


            My life いつの日にかカラフル
            My life 언젠가는 컬러풀하게
            마이 라이프 이츠노 히니카 카라후루


            色のない 雨がいつか虹を描くように
            색 없는 비가 언젠가 무지개를 그리듯이
            이로노나이 아메가 이츠카 니지오 에가쿠요우니


            My life どんな色のエンドロール
            My life 어떤 색의 엔딩 크레딧
            마이 라이프 돈나 이로노 엔도로-루


            涙さえも 塗り重ねて描くキャンバス
            눈물마저도 겹겹이 칠해가는 캔버스
            나미다사에모 누리카사네테 에가쿠 캰바스`
  },
  {
    url: 'MATWF',
    title: '야간비행',
    artist: '백예린',
    cover: 'https://musicmeta-phinf.pstatic.net/album/002/938/2938375.jpg?type=r360Fll&v=20230331162814',
    audio: MATWFMP3,
    lyrics: `
            푸른 빛을 품은 그대를 찾아서
            난 지금 어딘가로 야간비행
            차가운 바람을 뚫고 날아가

            전에 봤던 빛, 그 꽃을 찾아서
            난 지금 어딘가로 야간비행
            확실한 게 없어도 난 달려가

            또 해가 뜰 때쯤
            내 힘이 사라진대도
            그대의 찻잔에 띄워 놓고 싶은
            아무도 모르는 그 꽃을 찾아서
            그대 몰래 떠나는
            나만의 야간비행

            꿈에서 봤던 빛, 그 꽃을 찾아서
            난 지금 어딘가로 야간비행
            내일이 없다고 해도 달려가

            또 해가 뜰 때쯤
            내 힘이 사라진대도
            그대의 찻잔에 띄워 놓고 싶은
            아무도 모르는 그 꽃을 찾아서
            그대 몰래 떠나는
            나만의`
  },
  {
    url: 'Drive',
    title: 'Drive',
    artist: '김아름',
    cover: 'https://musicmeta-phinf.pstatic.net/album/005/770/5770460.jpg?type=r360Fll&v=20230331131210',
    audio: DriveMP3,
    lyrics: `
            어젯밤 일은 잊어주겠니 잠든 척 그냥 지나가줘
            아무 말 없이 곁에 있어줘 깨우지 말고

            요즘 따라 자꾸 어색해지는 너와 나의 Tension
            Never ever 마지막일지 몰라

            이대로 어딘가 멀리 떠나고파
            이 밤의 끝을 지나 더욱 뜨거워져
            어둠이 더 깊어진 우리 둘만의 밤
            화려한 불빛이 춤을 추네

            모두 잠든 밤 별빛을 타고 날아가고파
            더 짙어지는 파도 소릴 따라가 찬란한 긴 여행을

            지나간 일은 묻지 말아줘 모른 척 그냥 넘어가줘
            넌 대답 없이 나를 안아줘 날 놓지 말아줘

            창 틈새로 살짝 바람이 불면 나를 데려가줘
            Never ever 마지막일지 몰라

            이대로 어딘가 멀리 떠나고파
            이 밤의 끝을 지나 더욱 뜨거워져
            어둠이 더 깊어진 우리 둘만의 밤
            화려한 불빛이 춤을 추네

            모두 잠든 밤 별빛을 타고 날아가고파
            더 짙어지는 파도 소릴 따라가 찬란한 긴 여행을

            이대로 어딘가 멀리 떠나고파
            이 밤의 끝을 지나 더욱 뜨거워져
            어둠이 더 깊어진 우리 둘만의 밤
            화려한 불빛이 춤을 추네

            모두 잠든 밤 별빛을 타고 날아가고파
            더 짙어지는 파도 소릴 따라가 찬란한 긴 여행을`
  },
];

const MusicPlayer = () => {
  const { url } = useParams();
  const song = musicData.find((m) => m.url === url);

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <img src={song.cover} alt={song.title} style={styles.cover} />
        <h2 style={styles.songTitle}>{song.title}</h2>
        <h3 style={styles.songArtist}>{song.artist}</h3>
        <audio controls style={styles.audio}>
          <source src={song.audio} type="audio/mp3" />
        </audio>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <h3 style={styles.lyricsTitle}>가사</h3>
        <div style={styles.lyricsBox}>
          <pre style={styles.lyrics}>{song.lyrics}</pre>
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
  },
  cover: {
    width: '100%',
    maxWidth: '18.75rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
  },
  songTitle: {
    color: 'rgb(33, 155, 94)',
  },
  songArtist: {
    color: 'rgb(33, 155, 94)',
  },
  audio: {
    width: '100%',
    maxWidth: '25rem',
    marginTop: '1rem',
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
  lyricsTitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: 'rgb(33, 155, 94)'
  },
  lyricsBox: {
    height: '100%',
  },
  lyrics: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.6',
    textAlign: 'left',
    color: '#444',
    fontFamily: 'NanumSquareNeo, sans-serif'
  }
};

export default MusicPlayer;
