import usePrintLog from "@/hooks/apis/log/query/usePrintLog";
import PrintStyle from "./print.style";
import numberWithCommas from "@/utils/numberWithCommas";
import { QRCodeSVG } from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef } from "react";

interface PrintProps {
  printLog: number | null;
}

const Print = (props: PrintProps) => {
  const { printLog } = props;
  const query = usePrintLog(printLog);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  console.log(query);

  useEffect(() => {
    if (query.isSuccess) {
      reactToPrintFn();
    }
  }, [query.isSuccess]);

  if (!query.isSuccess) {
    return null;
  }

  const data = query.data;

  return (
    <PrintStyle.Container ref={contentRef}>
      <PrintStyle.Title>{data.title}</PrintStyle.Title>
      <PrintStyle.TotalPrice>
        총 여행 경비 : <strong>{numberWithCommas(data.logPriceSummary)}</strong>
        원
      </PrintStyle.TotalPrice>

      {data.days.map(({ dayPriceSummary, pins }, idx) => (
        <div key={idx}>
          <PrintStyle.DayTitle>Day {idx + 1}</PrintStyle.DayTitle>
          <PrintStyle.DayPrice>
            일일 경비 : {numberWithCommas(dayPriceSummary)}원
          </PrintStyle.DayPrice>

          {pins.map(
            ({ id, title, description, price, pinType, pinUrl, picture }) => (
              <div key={id}>
                <PrintStyle.PinContentContainer>
                  <PrintStyle.PinContentBox>
                    <PrintStyle.PinTitle>{title}</PrintStyle.PinTitle>
                    <PrintStyle.PinDescription>
                      {description}
                    </PrintStyle.PinDescription>
                    <PrintStyle.PinPrice>
                      경비 : {numberWithCommas(price)}원
                    </PrintStyle.PinPrice>
                  </PrintStyle.PinContentBox>
                  {picture && <PrintStyle.PinImage src={picture} alt={title} />}
                </PrintStyle.PinContentContainer>

                <PrintStyle.PinUrlContainer>
                  {pinUrl.map(({ url, title, id }) => (
                    <PrintStyle.PinUrl key={id}>
                      <QRCodeSVG value={url} size={80} />
                      <p>{title}</p>
                    </PrintStyle.PinUrl>
                  ))}
                </PrintStyle.PinUrlContainer>
              </div>
            )
          )}
        </div>
      ))}
    </PrintStyle.Container>
  );
};

export default Print;
