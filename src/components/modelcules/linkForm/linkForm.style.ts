import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Container = styled(SectionStyle)`
  height: 130px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  height: 100%;
`;

const LinkFormStyle = {
  Container,
  Form,
};

export default LinkFormStyle;
