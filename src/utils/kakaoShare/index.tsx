const KakaoShare = (key: string) => {
  Kakao.Share.sendDefault({
    objectType: "text",
    text: `여행 일정을 공유합니다. [${key}] 코드를 홈페이지의 불러오기에 입력해주세요.`,
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      webUrl: "https://developers.kakao.com",
    },
  });
};

export default KakaoShare;
