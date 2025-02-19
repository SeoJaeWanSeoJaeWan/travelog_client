import numberWithCommas from "@/utils/numberWithCommas";
import PrintTemplateStyle from "./printTemplate.style";
import { useEffect, useRef, useState } from "react";
import usePrintLog from "@/hooks/apis/log/query/usePrintLog";
import { useReactToPrint } from "react-to-print";
import convertImage from "@/utils/convertImage";
import { QRCodeSVG } from "qrcode.react";

interface ImageLoad {
  [key: number]: boolean;
}

const PrintTemplate = () => {
  const [printLog, setPrintLog] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const query = usePrintLog(printLog);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    onAfterPrint: () => {
      window.close();
    },
  });

  const [imageLoad, setImageLoad] = useState<null | ImageLoad>(null);
  const allLoad = imageLoad ? Object.values(imageLoad).every((v) => v) : false;

  const loadImage = (id: number) => {
    const newImageLoad = { ...imageLoad };
    newImageLoad[id] = true;
    setImageLoad(newImageLoad);
  };

  useEffect(() => {
    const childMessage = (e: MessageEvent) => {
      if (e.data.type !== "child") {
        return;
      }

      setPrintLog(e.data.id);
    };

    window.addEventListener("message", childMessage);

    return () => {
      window.removeEventListener("message", childMessage);
    };
  }, []);

  useEffect(() => {
    if (query.isSuccess) {
      const imageLoad = {} as ImageLoad;
      query.data.days.forEach(({ pins }) => {
        pins.forEach(({ id, picture }) => {
          if (picture) {
            imageLoad[id] = false;
          }
        });
      });

      setImageLoad(imageLoad);
    } else {
      setImageLoad(null);
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (allLoad) {
      reactToPrintFn();
    }
  }, [allLoad]);

  if (!query.isSuccess || !imageLoad) {
    return null;
  }

  const data = query.data;

  return (
    <PrintTemplateStyle.Container ref={contentRef}>
      <PrintTemplateStyle.Title>{data.title}</PrintTemplateStyle.Title>
      <PrintTemplateStyle.TotalPrice>
        총 여행 경비 : <strong>{numberWithCommas(data.logPriceSummary)}</strong>
        원
      </PrintTemplateStyle.TotalPrice>

      {data.days.map(({ dayPriceSummary, pins }, idx) => (
        <PrintTemplateStyle.DayContainer key={idx}>
          <PrintTemplateStyle.DayTitle>
            Day {idx + 1}
          </PrintTemplateStyle.DayTitle>
          <PrintTemplateStyle.DayPrice>
            일일 경비 : {numberWithCommas(dayPriceSummary)}원
          </PrintTemplateStyle.DayPrice>

          {pins.map(({ id, title, description, price, pinUrl, picture }) => (
            <PrintTemplateStyle.PinConteinr key={id}>
              <PrintTemplateStyle.PinContentContainer>
                <PrintTemplateStyle.PinContentBox>
                  <PrintTemplateStyle.PinTitle>
                    {title}
                  </PrintTemplateStyle.PinTitle>
                  <PrintTemplateStyle.PinDescription>
                    {description}
                  </PrintTemplateStyle.PinDescription>
                </PrintTemplateStyle.PinContentBox>
                {picture && (
                  <PrintTemplateStyle.PinImage
                    src={convertImage(picture)}
                    alt={title}
                    onLoad={() => loadImage(id)}
                  />
                )}
              </PrintTemplateStyle.PinContentContainer>

              <PrintTemplateStyle.PinPrice>
                경비 : {numberWithCommas(price)}원
              </PrintTemplateStyle.PinPrice>

              <PrintTemplateStyle.PinUrlContainer>
                {pinUrl.map(({ url, title, id }) => (
                  <PrintTemplateStyle.PinUrl key={id}>
                    <QRCodeSVG value={url} size={80} />
                    <p>{title}</p>
                  </PrintTemplateStyle.PinUrl>
                ))}
              </PrintTemplateStyle.PinUrlContainer>
            </PrintTemplateStyle.PinConteinr>
          ))}
        </PrintTemplateStyle.DayContainer>
      ))}
    </PrintTemplateStyle.Container>
  );
};

export default PrintTemplate;
