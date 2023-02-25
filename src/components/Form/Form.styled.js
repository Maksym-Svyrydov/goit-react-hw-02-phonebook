import styled from 'styled-components';

export const Form = styled.form`
  width: 75%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${'' /* outline: 1px solid tomato; */}
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 6px solid rgba(50, 57, 65, 1);
  background: #c4c4c4; ;
`;
export const InputHeader = styled.h1`
  font-weigh: 400;
  font-size: 20px;
`;
export const InputName = styled.input`
  width: 70%;
  height: 12%;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
`;
export const InputNumber = styled.input`
  width: 70%;
  height: 12%;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
`;
export const InputBtn = styled.button`
  width: 72%;
  height: 20%;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 6px;
  color: #ffff;

  background: rgba(50, 57, 65, 1);
  &:hover {
    color: #ffff;
    border: 2px solid rgba(#009eff);
    background: #009eff;
  }
`;
