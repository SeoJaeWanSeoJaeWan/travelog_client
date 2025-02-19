import Title from "@/components/atoms/title";
import PinDetailStyle from "./pinDetail.style";
import Close from "@/components/atoms/close";
import { useRef, useState } from "react";
import LinkForm from "@/components/modelcules/linkForm";
import Pin from "@/components/atoms/pin";
import ListButton from "@/components/atoms/listBox";
import HoverForm from "@/components/atoms/hoverForm";
import PinSelector from "@/components/modelcules/pinSelector";
import ImageUpload from "@/components/atoms/imageUpload";
import InputForm from "@/components/modelcules/inputForm";
import usePinFormUpdate from "@/hooks/utils/usePinFormUpdate";
import Url from "@/components/modelcules/url";
import { MdDelete } from "react-icons/md";
import numberWithCommas from "@/utils/numberWithCommas";
import { useGetPin, useRemovePin } from "@/hooks/apis/pin/query/usePin";
import useDeletePin from "@/hooks/apis/pin/mutation/useDeletePin";
import convertImage from "@/utils/convertImage";
import useMap from "@/hooks/utils/useMap";
import { FaImage } from "react-icons/fa6";

interface DayDetailProps {
  onOutBoard: () => void;
  onShowBoard: () => void;
}

const PinDetail = (props: DayDetailProps) => {
  const { onOutBoard, onShowBoard } = props;

  const [isAddLink, setisAddLink] = useState(false);
  const data = useGetPin();
  const pinRef = useRef<HTMLDivElement>(null);
  const removePin = useRemovePin();
  const deletePin = useDeletePin();
  const { addRightClick, removeRightClick } = useMap();

  const { submitPinForm, submitPinPosition, submitInputForm, submitFileForm } =
    usePinFormUpdate(data);

  if (!data) return null;

  const handleToggleAddLink = () => {
    setisAddLink((prev) => !prev);
  };

  const handleCloseAddLink = () => {
    setisAddLink(false);
  };

  const handleClosePin = () => {
    if (pinRef.current) {
      pinRef.current.classList.add("hide");
    }
  };

  const handleDeletePin = () => {
    deletePin(data.id, handleClosePin);
  };

  const handleAnimationEnd = () => {
    if (pinRef.current) {
      if (pinRef.current.classList.contains("hide")) {
        pinRef.current.classList.remove("hide");
        removePin();
      }
    }
  };

  const handleUpdatePinPosition = () => {
    onOutBoard();
    addRightClick((lat, lng) => {
      submitPinPosition(lat, lng, () => {
        removeRightClick();
        onShowBoard();
      });
    }, onShowBoard);
  };

  return (
    <>
      <PinDetailStyle.Container
        ref={pinRef}
        onAnimationEnd={handleAnimationEnd}
      >
        <div>
          <Close onClick={handleClosePin} />

          <HoverForm
            radius={"10px 10px 0 0"}
            className="image"
            Form={(hiddenForm) => (
              <ImageUpload onChange={submitFileForm(hiddenForm)} />
            )}
          >
            {data.picture ? (
              <PinDetailStyle.Image src={convertImage(data.picture)} />
            ) : (
              <PinDetailStyle.IconBox>
                <FaImage size={30} />
              </PinDetailStyle.IconBox>
            )}
          </HoverForm>
          <PinDetailStyle.PinBox>
            <HoverForm
              radius={"50%"}
              className="pin"
              Form={(hiddenForm) => (
                <PinSelector
                  className={"pin"}
                  onClick={submitPinForm(hiddenForm)}
                />
              )}
            >
              <Pin name={data.pinType.name} width={"30px"} />
            </HoverForm>
          </PinDetailStyle.PinBox>

          <PinDetailStyle.Wrapper>
            <PinDetailStyle.TitleLine>
              <HoverForm
                className="title"
                hidden
                Form={(hiddenForm) => (
                  <InputForm
                    type="input"
                    className="title"
                    maxLength={24}
                    defaultValue={data.title}
                    onSubmit={submitInputForm("title", hiddenForm)}
                  />
                )}
              >
                <Title as={"h4"} width={"100%"}>
                  {data.title}
                </Title>
              </HoverForm>
              <PinDetailStyle.DeleteButton onClick={handleDeletePin}>
                <MdDelete size={18} />
              </PinDetailStyle.DeleteButton>
            </PinDetailStyle.TitleLine>

            <HoverForm
              className="description"
              hidden
              Form={(hiddenForm) => (
                <InputForm
                  type="textarea"
                  className="description"
                  maxLength={200}
                  defaultValue={data.description}
                  onSubmit={submitInputForm("description", hiddenForm)}
                />
              )}
            >
              <PinDetailStyle.Description>
                {data.description}
              </PinDetailStyle.Description>
            </HoverForm>

            <PinDetailStyle.TotalPrice>
              <HoverForm
                className="price"
                hidden
                Form={(hiddenForm) => (
                  <InputForm
                    type="input"
                    inputMode="number"
                    className="price"
                    defaultValue={data.price.toString()}
                    onSubmit={submitInputForm("price", hiddenForm)}
                  />
                )}
              >
                비용 : <strong>{numberWithCommas(data.price)}</strong>원
              </HoverForm>
            </PinDetailStyle.TotalPrice>

            <Url pinUrl={data.pinUrl} />

            <ListButton
              buttons={[
                { text: "위치 변경", onClick: handleUpdatePinPosition },
                {
                  text: "링크 추가",
                  onClick: handleToggleAddLink,
                },
              ]}
            />
          </PinDetailStyle.Wrapper>
        </div>
      </PinDetailStyle.Container>

      {isAddLink && <LinkForm onClose={handleCloseAddLink} id={data.id} />}
    </>
  );
};

export default PinDetail;
