import { useState } from 'react';
import styled from 'styled-components';
const Hangul = require('hangul-js');

const KeyboardJinyoung = ({ setIsKeyboardClicked }) => {
  const [inputValue, setInputValue] = useState([]);
  const [isShiftClicked, setIsShiftClicked] = useState(false);
  const [isEngClicked, setIsEngClicked] = useState(false);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const firstDoubleLettersKr = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ'];
  const firstLettersKr = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'];
  const secondLettersKr = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'];
  const thirdLettersKr = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'];

  const firstLettersEn = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondLettersEn = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdLettersEn = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const handlingShift = () => setIsShiftClicked(!isShiftClicked);

  const handlingLanguage = () => {
    setIsEngClicked(!isEngClicked);
    setIsShiftClicked(false);
  };

  const addLetter = (el) => {
    setInputValue([...inputValue, el]);
  };

  return (
    <KeyboardJinyoungContainer>
      <div className='fog' onClick={() => setIsKeyboardClicked(false)} />
      <div className='keyboard-container'>
        <div className='input-container'>
          <input
            type='text'
            className='input'
            placeholder='마음껏 테스트 해보세요'
            value={Hangul.assemble(inputValue)}
            disabled
          />
        </div>
        <div className='keyboard'>
          <div className='menu-bar'>
            <div className='menu'>★</div>
            <div className='menu'>※</div>
            <div className='menu'>♬</div>
            <div className='menu'>☎</div>
            <div className='menu'>§</div>
            <div className='menu'>◈</div>
          </div>
          <div className='keyboard-line'>
            {nums.map((el) => {
              return (
                <button
                  className='num active'
                  key={el}
                  onClick={() => {
                    addLetter(`${el}`);
                  }}>
                  {el}
                </button>
              );
            })}
          </div>
          {isEngClicked ? (
            <>
              <div className='keyboard-line'>
                {isShiftClicked
                  ? firstLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </button>
                      );
                    })
                  : firstLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </button>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                {isShiftClicked
                  ? secondLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </button>
                      );
                    })
                  : secondLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </button>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                <button className='wide-btn active' onClick={handlingShift}>
                  Shift
                </button>
                {isShiftClicked
                  ? thirdLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </button>
                      );
                    })
                  : thirdLettersEn.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </button>
                      );
                    })}
                <button
                  className='wide-btn active'
                  onClick={() => {
                    setInputValue(inputValue.slice(0, inputValue.length - 1));
                  }}>
                  Back
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='keyboard-line'>
                {isShiftClicked
                  ? firstDoubleLettersKr.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                            isShiftClicked && setIsShiftClicked(false);
                          }}>
                          {el}
                        </button>
                      );
                    })
                  : firstLettersKr.map((el) => {
                      return (
                        <button
                          className='letter active'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                            isShiftClicked && setIsShiftClicked(false);
                          }}>
                          {el}
                        </button>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                {secondLettersKr.map((el) => {
                  return (
                    <button
                      className='letter active'
                      key={el}
                      onClick={() => {
                        addLetter(el);
                        isShiftClicked && setIsShiftClicked(false);
                      }}>
                      {el}
                    </button>
                  );
                })}
              </div>

              <div className='keyboard-line'>
                <button className='wide-btn active' onClick={handlingShift}>
                  Shift
                </button>
                {thirdLettersKr.map((el) => {
                  return (
                    <button
                      className='letter active'
                      key={el}
                      onClick={() => {
                        addLetter(el);
                        isShiftClicked && setIsShiftClicked(false);
                      }}>
                      {el}
                    </button>
                  );
                })}
                <button
                  className='wide-btn active'
                  onClick={() => {
                    setInputValue(inputValue.slice(0, inputValue.length - 1));
                  }}>
                  Back
                </button>
              </div>
            </>
          )}
          <div className='keyboard-line'>
            <button className='wide-btn active'>!@#</button>
            <button className='letter active' onClick={handlingLanguage}>
              🌐
            </button>
            <button className='letter active'>:-)</button>
            <button
              className='space active'
              onClick={() => {
                addLetter(' ');
              }}>
              Enter
            </button>
            <button
              className='letter active'
              onClick={() => {
                addLetter('.');
              }}>
              .
            </button>
            <button className='wide-btn active'>↵</button>
          </div>
        </div>
      </div>
    </KeyboardJinyoungContainer>
  );
};

const KeyboardJinyoungContainer = styled.div`
  button {
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #8c8d8f;
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .fog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 292.333px);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .keyboard-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;

    .input-container {
      padding: 10px;

      .input {
        width: 100%;
        padding: 8px 12px;
        border: none;
        border-radius: 100px;
        background-color: #f2f3f7;

        ::placeholder {
          color: ${({ theme }) => theme.colors.grayText};
          font-weight: 700;
        }
      }
    }

    .keyboard {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5px;
      background-color: #eeeef3;

      .menu-bar {
        display: flex;
        justify-content: space-around;
        width: 100vw;
        border-bottom: 1px solid #8c8d8f;
        margin-bottom: 5px;
        color: #8c8d8f;

        .menu {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
        }
      }

      .keyboard-line {
        display: flex;

        .active {
          cursor: pointer;
          &:active {
            background-color: #b7b7b7;
          }
        }

        .num {
          width: 8vw;
          height: 25px;
          margin: 3px;
        }

        .letter {
          width: 8vw;
          height: 35px;
          margin: 3px;
        }

        .wide-btn {
          width: 12.4vw;
          height: 35px;
          margin: 3px;
        }

        .space {
          width: calc(32vw + 19px);
          height: 35px;
          margin: 3px;
        }
      }
    }
  }
`;

export default KeyboardJinyoung;
