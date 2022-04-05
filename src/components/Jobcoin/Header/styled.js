import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 30px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Profile = styled.div`
  display: flex;
`;

export const Address = styled.div`
  margin-right: 10px;
`;

export const SignOutLink = styled(Link)`
  text-decoration: none;
`