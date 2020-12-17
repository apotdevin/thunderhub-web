import styled from 'styled-components';
import { Link } from '../../components/link/Link';

const S = {
  wrapper: styled.div`
    width: 100%;
    background-image: linear-gradient(to right, #fd5f00, #ffa940);
    text-align: center;
    color: white;
    padding: 8px;
  `,
};

export const Banner = () => {
  return (
    <Link href="https://getvoltage.io/" underline={'transparent'}>
      <S.wrapper>Integrated now into Voltage! Check them out here.</S.wrapper>
    </Link>
  );
};
