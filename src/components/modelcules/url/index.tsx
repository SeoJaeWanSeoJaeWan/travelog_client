import UrlStyle from "./url.style";
import { CgClose } from "react-icons/cg";

const Url = () => {
  return (
    <UrlStyle.UrlList>
      <UrlStyle.Url>
        <a
          href={"https://www.naver.com"}
          target={"_blank"}
          className="text-ellipsis"
        >
          https://www.naver.com https://www.naver.com https://www.naver.com
        </a>
      </UrlStyle.Url>
      <UrlStyle.Url>
        <a
          href={"https://www.naver.com"}
          target={"_blank"}
          className="text-ellipsis"
        >
          https://www.naver.com https://www.naver.com https://www.naver.com
        </a>

        <UrlStyle.UrlDeleteButton>
          <CgClose size={16} />
        </UrlStyle.UrlDeleteButton>
      </UrlStyle.Url>
    </UrlStyle.UrlList>
  );
};

export default Url;
