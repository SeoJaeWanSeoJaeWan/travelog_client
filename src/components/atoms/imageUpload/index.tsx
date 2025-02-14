import { InputHTMLAttributes, useEffect, useRef } from "react";

const ImageUpload = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return (
    <input type="file" ref={inputRef} hidden accept="image/*" {...props} />
  );
};

export default ImageUpload;
