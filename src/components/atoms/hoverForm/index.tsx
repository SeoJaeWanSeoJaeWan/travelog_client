import { JSX, PropsWithChildren, useEffect, useState } from "react";
import HoverFormStyle from "./hoverForm.style";

interface HoverFormProps extends PropsWithChildren {
  className: string;
  radius?: string;
  hidden?: boolean;
  Form: (hiddenForm: () => void) => JSX.Element;
}

const HoverForm = (props: HoverFormProps) => {
  const { children, radius, Form, className } = props;
  const [isActiveForm, setIsActiveForm] = useState(false);

  const isHiddenChildren = isActiveForm && props.hidden;

  const handleToggleForm = () => {
    setIsActiveForm(!isActiveForm);
  };

  const hiddenForm = () => {
    setIsActiveForm(false);
  };

  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(`.${className}`)) {
        setIsActiveForm(false);
      }
    };

    if (isActiveForm) {
      document.addEventListener("click", clickOutSide);
    }

    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, [isActiveForm, className]);

  return (
    <>
      <HoverFormStyle.Container className={className}>
        {!isHiddenChildren && children}
        <HoverFormStyle.Background
          $radius={radius}
          onClick={handleToggleForm}
        />
      </HoverFormStyle.Container>
      {isActiveForm && Form(hiddenForm)}
    </>
  );
};

export default HoverForm;
