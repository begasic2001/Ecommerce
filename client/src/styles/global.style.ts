import styled, { createGlobalStyle } from 'styled-components';
import { External, Internal } from './reset.style';
import PoppinsRegular from '~/fonts/poppins/Poppins-Regular.ttf';
import PoppinsLight from '~/fonts/poppins/Poppins-Light.ttf';
import PoppinsMedium from '~/fonts/poppins/Poppins-Medium.ttf';
import PoppinsSemi from '~/fonts/poppins/Poppins-SemiBold.ttf';
import PoppinsBold from '~/fonts/poppins/Poppins-Bold.ttf';
import DancingScriptMedium from '~/fonts/dancing-script/DancingScript-Medium.ttf';
import SourceSerifProLight from '~/fonts/source_serif_pro/SourceSerifPro-Light.ttf';
import SourceSerifProRegular from '~/fonts/source_serif_pro/SourceSerifPro-Regular.ttf';
import SourceSerifProSemi from '~/fonts/source_serif_pro/SourceSerifPro-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsRegular}), url(${PoppinsLight}), url(${PoppinsMedium}), url(${PoppinsSemi}), url(${PoppinsBold});
  }

  @font-face {
    font-family: 'Dancing Script';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${DancingScriptMedium});
  }

  @font-face {
    font-family: 'Source Serif Pro';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${SourceSerifProLight}), url(${SourceSerifProRegular}), url(${SourceSerifProSemi});
  }

  ${External}
  ${Internal}
`;

export const Wrapper = styled.section`
  max-width: 100vw;
  font-size: 1.4rem;
  overflow-x: hidden;
`;
