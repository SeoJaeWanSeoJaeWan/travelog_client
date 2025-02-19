import PinUrl from "@/types/apis/pinUrl";
import UrlStyle from "./url.style";
import { CgClose } from "react-icons/cg";
import useDeletePinUrl from "@/hooks/apis/pinUrl/mutation/useDeletePinUrl";

interface UrlProps {
  pinUrl: PinUrl[];
}

const Url = (props: UrlProps) => {
  const { pinUrl } = props;
  const deletePinUrl = useDeletePinUrl();

  const handleDeletePinUrl = (id: number) => {
    deletePinUrl(id);
  };

  return (
    pinUrl.length !== 0 && (
      <UrlStyle.UrlList>
        {pinUrl.map(({ title, url, id }) => (
          <UrlStyle.Url key={id}>
            <a href={url} target={"_blank"} className="text-ellipsis">
              {title} ({url})
            </a>

            <UrlStyle.UrlDeleteButton onClick={() => handleDeletePinUrl(id)}>
              <CgClose size={16} />
            </UrlStyle.UrlDeleteButton>
          </UrlStyle.Url>
        ))}
      </UrlStyle.UrlList>
    )
  );
};

export default Url;
