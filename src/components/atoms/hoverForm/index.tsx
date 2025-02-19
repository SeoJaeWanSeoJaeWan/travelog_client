import { JSX, PropsWithChildren, useEffect, useState } from "react";
import HoverFormStyle from "./hoverForm.style";

interface HoverFormProps extends PropsWithChildren {
  className: string;
  radius?: string;
  hidden?: boolean;
  isActive?: boolean;
  Form: (hiddenForm: () => void) => JSX.Element;
}

const HoverForm = (props: HoverFormProps) => {
  const { children, radius, hidden, isActive = true, className, Form } = props;
  const [isActiveForm, setIsActiveForm] = useState(false);

  const isHiddenChildren = isActiveForm && hidden;

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
      {!isHiddenChildren && (
        <HoverFormStyle.Container className={className}>
          {children}
          {isActive && (
            <HoverFormStyle.Background
              type={"button"}
              $radius={radius}
              onClick={handleToggleForm}
            />
          )}
        </HoverFormStyle.Container>
      )}
      {isActiveForm && Form(hiddenForm)}
    </>
  );
};

export default HoverForm;
