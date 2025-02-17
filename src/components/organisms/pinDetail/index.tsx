import Title from "@/components/atoms/title";
import PinDetailStyle from "./pinDetail.style";
import Close from "@/components/atoms/close";
import { useState } from "react";
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
import Marker from "@/components/modelcules/marker/indext";
import Line from "@/components/atoms/line";
import numberWithCommas from "@/utils/numberWithCommas";

interface PinDetailProps {
  handleStep: (step: number) => void;
}

const PinDetail = (props: PinDetailProps) => {
  const { handleStep } = props;
  const [isAddLink, setisAddLink] = useState(false);
  const {
    submitInputForm,
    // submitFileForm
  } = usePinFormUpdate();
  // 1

  const [className, setClassName] = useState("");
  const [index, setIndex] = useState(2);

  const handleNext = () => {
    if (className === "hide") handleStep(index);
  };

  const handleToggleAddLink = () => {
    setisAddLink((prev) => !prev);
  };

  const handleCloseAddLink = () => {
    setisAddLink(false);
  };

  return (
    <>
      <PinDetailStyle.Container
        className={className}
        onAnimationEnd={handleNext}
      >
        <Marker
          lat={33.450701}
          lng={126.570667}
          name={"쇼핑"}
          onClick={() => {
            console.log("click");
          }}
        />
        <Marker
          lat={33.451701}
          lng={126.570667}
          name={"식사"}
          onClick={() => {
            console.log("click");
          }}
        />

        <Line
          path={[
            [
              { lat: 33.450701, lng: 126.570667 },
              { lat: 33.451701, lng: 126.570667 },
            ],
          ]}
        />
        <Close
          onClick={() => {
            setClassName("hide");
            setIndex(2);
            setisAddLink(false);
          }}
        />

        <HoverForm
          radius={"10px 10px 0 0"}
          className="image"
          Form={(hiddenForm) => <ImageUpload onChange={hiddenForm} />}
        >
          <PinDetailStyle.Image
            src={
              "https://img.freepik.com/premium-vector/hand-painted-watercolor-abstract-background_889452-11415.jpg"
            }
          />
        </HoverForm>
        <PinDetailStyle.PinBox>
          <HoverForm
            radius={"50%"}
            className="pin"
            Form={() => <PinSelector className={"pin"} />}
          >
            <Pin name="관광지" width={"30px"} />
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
                  onSubmit={submitInputForm("title", hiddenForm)}
                />
              )}
            >
              <Title as={"h4"} width={"100%"}>
                123
              </Title>
            </HoverForm>
            <PinDetailStyle.DeleteButton>
              <MdDelete size={18} />
            </PinDetailStyle.DeleteButton>
          </PinDetailStyle.TitleLine>

          <PinDetailStyle.Description>
            <HoverForm
              className="description"
              hidden
              Form={(hiddenForm) => (
                <InputForm
                  type="textarea"
                  className="description"
                  onSubmit={submitInputForm("description", hiddenForm)}
                />
              )}
            >
              123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
            </HoverForm>
          </PinDetailStyle.Description>

          <PinDetailStyle.TotalPrice>
            <HoverForm
              className="price"
              hidden
              Form={(hiddenForm) => (
                <InputForm
                  type="input"
                  className="price"
                  onSubmit={submitInputForm("price", hiddenForm)}
                />
              )}
            >
              비용 : <strong>{numberWithCommas(1000000)}</strong>원
            </HoverForm>
          </PinDetailStyle.TotalPrice>

          <Url />

          <ListButton
            buttons={[
              { text: "위치 변경", onClick: () => {} },
              {
                text: "링크 추가",
                onClick: handleToggleAddLink,
              },
            ]}
          />
        </PinDetailStyle.Wrapper>
      </PinDetailStyle.Container>

      {isAddLink && <LinkForm onClose={handleCloseAddLink} />}
    </>
  );
};

export default PinDetail;
