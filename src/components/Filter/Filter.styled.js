import styled from 'styled-components';

export const FilterContaner = styled.div`
  padding: 0px;
  margin: 0px;
`;
export const FilterInput = styled.input`
  padding: 5px;
  width: 60%;
  height: 12%;
  font-size: 14px;
  font-weight: 600;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
  letter-spacing: 1.2px;
  &:hover,
  :focus {
    color: #ffff;
    border: 2px solid rgba(50, 57, 65, 1);
    background: #009eff;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
