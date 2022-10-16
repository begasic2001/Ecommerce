import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const Login = styled.section`
  margin-top: 15rem;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 4rem;
  border: solid 1px #eee;
  width: 50rem;

  h3 {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 3rem;

  button {
    ${m.boxSize('100%', '5rem')}

    margin-top: 3rem;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 1.6rem;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const FormItem = styled.section`
  position: relative;

  & + & {
    margin-top: 2.5rem;
  }

  input {
    ${m.boxSize('100%', '5rem')}
    padding: 0 2rem;
    border: solid 1px ${({ theme: { colors } }) => colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:focus {
      border: solid 2px #d29eff;
    }

    &:not(:placeholder-shown) ~ label,
    &:focus ~ label {
      top: 0;
      left: 1rem;
      padding: 0 1rem;
      background-color: #fff;
      color: #d29eff;
      font-size: 1.2rem;
    }
  }

  label {
    top: 50%;
    position: absolute;
    left: 2rem;
    color: #ccc;
    pointer-events: none;
    transform: translateY(-50%);
    transition: ${({ theme }) => theme.transition};
  }

  .toggle-show {
    ${m.flexCenter()}
    ${m.boxSize('3rem')}
    
    position: absolute;
    top: 50%;
    right: 2rem;
    z-index: 3;
    background-color: #fff;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ForgotPass = styled.div`
  ${m.flexBox('flex-end')}
  margin-top: 2rem;
  font-style: italic;
`;

export const Register = styled.p`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: solid 1px #eee;
  color: ${({ theme: { colors } }) => colors.secondaryText};
  font-style: italic;
  text-align: center;
  `;
