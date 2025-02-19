import usePrintLog from "@/hooks/apis/log/query/usePrintLog";
import PrintStyle from "./print.style";
import numberWithCommas from "@/utils/numberWithCommas";
import { QRCodeSVG } from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import convertImage from "@/utils/convertImage";
import { createPortal } from "react-dom";

interface PrintProps {
  printLog: number | null;
  //
  clearPrint: () => void;
}

interface ImageLoad {
  [key: number]: boolean;
}

const Print = (props: PrintProps) => {
  const { printLog, clearPrint } = props;
  const query = usePrintLog(printLog);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    onAfterPrint: clearPrint,
  });

  const [imageLoad, setImageLoad] = useState<null | ImageLoad>(null);
  const allLoad = imageLoad ? Object.values(imageLoad).every((v) => v) : false;

  const loadImage = (id: number) => {
    const newImageLoad = { ...imageLoad };
    newImageLoad[id] = true;
    setImageLoad(newImageLoad);
  };

  useEffect(() => {
    if (query.isSuccess) {
      let imageLoad = {} as ImageLoad;
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

  return createPortal(
    <PrintStyle.Container ref={contentRef}>
      <PrintStyle.Title>{data.title}</PrintStyle.Title>
      <PrintStyle.TotalPrice>
        총 여행 경비 : <strong>{numberWithCommas(data.logPriceSummary)}</strong>
        원
      </PrintStyle.TotalPrice>

      {data.days.map(({ dayPriceSummary, pins }, idx) => (
        <PrintStyle.DayContainer key={idx}>
          <PrintStyle.DayTitle>Day {idx + 1}</PrintStyle.DayTitle>
          <PrintStyle.DayPrice>
            일일 경비 : {numberWithCommas(dayPriceSummary)}원
          </PrintStyle.DayPrice>

          {pins.map(({ id, title, description, price, pinUrl, picture }) => (
            <PrintStyle.PinConteinr key={id}>
              <PrintStyle.PinContentContainer>
                <PrintStyle.PinContentBox>
                  <PrintStyle.PinTitle>{title}</PrintStyle.PinTitle>
                  <PrintStyle.PinDescription>
                    {description}
                  </PrintStyle.PinDescription>
                </PrintStyle.PinContentBox>
                {picture && (
                  <PrintStyle.PinImage
                    src={convertImage(picture)}
                    alt={title}
                    onLoad={() => loadImage(id)}
                  />
                )}
              </PrintStyle.PinContentContainer>

              <PrintStyle.PinPrice>
                경비 : {numberWithCommas(price)}원
              </PrintStyle.PinPrice>

              <PrintStyle.PinUrlContainer>
                {pinUrl.map(({ url, title, id }) => (
                  <PrintStyle.PinUrl key={id}>
                    <QRCodeSVG value={url} size={80} />
                    <p>{title}</p>
                  </PrintStyle.PinUrl>
                ))}
              </PrintStyle.PinUrlContainer>
            </PrintStyle.PinConteinr>
          ))}
        </PrintStyle.DayContainer>
      ))}
    </PrintStyle.Container>,
    document.querySelector("#print") as HTMLElement
  );
};

export default Print;
