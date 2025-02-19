declare const Kakao: {
  init: (key: string) => void;
  Share: {
    sendDefault: (data: {
      objectType: string;
      text: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    }) => void;
  };
};
