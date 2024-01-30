import styled from "styled-components";

export const ContainerStyle = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderStyle = styled.header`
  h1 {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const FooterStyle = styled.footer`
  font-size: 90%;
  text-align: center;
  & > a {
    text-decoration: underline;
  }
`;

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;

export const MemberCardStyle = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export const MemberButtonStyle = styled.button`
  flex: 1;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: ${({ backColor }) => backColor};
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ backColor }) => backColor};
`;

export const FormInputStyle = styled.input`
  padding: 0.7rem;
  border: none;
`;

export const FormTextAreaStyle = styled.textarea`
  padding: 0.7rem;
  border: none;
  min-height: 150px;
  line-height: 1.6;
`;

export const FormBottomStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
`;

export const FormSelectStyle = styled.select`
  margin-right: auto;
  padding: 0.3rem;
  border-radius: 6px;
  background: #f1f1f1;
`;

export const ButtonStyle = styled.button`
  padding: 0.3rem;
  border-radius: 6px;
  background: #f1f1f1;
`;

export const ListUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListliStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
`;

export const ListImgStyle = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 6px;
`;

export const ListWrapperStyle = styled.div`
  flex-shrink: 1;
  overflow: hidden;
`;

export const ListNameStyle = styled.span`
  font-weight: bold;
`;

export const ListContentStyle = styled.p`
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArticleStyle = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const ArticleHeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;

  span {
    font-weight: bold;
  }

  time {
    font-size: 90%;
  }
`;

export const ArticleContentStyle = styled.div`
  padding: 0.7rem;
  min-height: 150px;
  line-height: 1.6;
`;

export const ArticleBottomStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem;

  span {
    margin-right: auto;
  }
`;
