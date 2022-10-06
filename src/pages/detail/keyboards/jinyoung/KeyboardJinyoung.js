import { useState } from 'react';
import styled from 'styled-components';

const KeyboardJinyoung = () => {
  const [isKeyboardClicked, setIsKeyboardClicked] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isShiftClicked, setIsShiftClicked] = useState(false);
  const [isEngClicked, setIsEngClicked] = useState(false);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const firstLettersKr = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'];
  const firstDoubleLettersKr = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'];
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
    setInputValue(inputValue + el);
  };

  return (
    <KeyboardJinyoungContainer>
      <div className='fog' />
      <div className='keyboard-container'>
        <div className='input-container'>
          <input type='text' className='input' placeholder='마음껏 테스트 해보세요' value={inputValue} disabled />
        </div>
        <div className='keyboard'>
          <div className='menu-bar'>
            <div className='menu flex-center'>icon</div>
            <div className='menu flex-center'>icon</div>
            <div className='menu flex-center'>icon</div>
            <div className='menu flex-center'>icon</div>
            <div className='menu flex-center'>icon</div>
            <div className='menu flex-center'>icon</div>
          </div>
          <div className='keyboard-line'>
            {nums.map((el) => {
              return (
                <div
                  className='num flex-center hover'
                  key={el}
                  onClick={() => {
                    addLetter(el);
                  }}>
                  {el}
                </div>
              );
            })}
          </div>
          {isEngClicked ? (
            <>
              <div className='keyboard-line'>
                {isShiftClicked
                  ? firstLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </div>
                      );
                    })
                  : firstLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </div>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                {isShiftClicked
                  ? secondLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </div>
                      );
                    })
                  : secondLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </div>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                <div className='wide-btn flex-center hover' onClick={handlingShift}>
                  Shift
                </div>
                {isShiftClicked
                  ? thirdLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el.toUpperCase()}
                          onClick={() => {
                            addLetter(el.toUpperCase());
                            setIsShiftClicked(false);
                          }}>
                          {el.toUpperCase()}
                        </div>
                      );
                    })
                  : thirdLettersEn.map((el) => {
                      return (
                        <div
                          className='letter flex-center hover'
                          key={el}
                          onClick={() => {
                            addLetter(el);
                          }}>
                          {el}
                        </div>
                      );
                    })}
                <div
                  className='wide-btn flex-center hover'
                  onClick={() => {
                    setInputValue(inputValue.slice(0, inputValue.length - 1));
                  }}>
                  Back
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='keyboard-line'>
                {isShiftClicked
                  ? firstDoubleLettersKr.map((el) => {
                      return (
                        <div className='letter flex-center hover' key={el}>
                          {el}
                        </div>
                      );
                    })
                  : firstLettersKr.map((el) => {
                      return (
                        <div className='letter flex-center hover' key={el}>
                          {el}
                        </div>
                      );
                    })}
              </div>

              <div className='keyboard-line'>
                {secondLettersKr.map((el) => {
                  return (
                    <div className='letter flex-center hover' key={el}>
                      {el}
                    </div>
                  );
                })}
              </div>

              <div className='keyboard-line'>
                <div className='wide-btn flex-center hover' onClick={handlingShift}>
                  Shift
                </div>
                {thirdLettersKr.map((el) => {
                  return (
                    <div className='letter flex-center hover' key={el}>
                      {el}
                    </div>
                  );
                })}
                <div className='wide-btn flex-center hover'>Back</div>
              </div>
            </>
          )}
          <div className='keyboard-line'>
            <div className='wide-btn flex-center hover'>!@#</div>
            <div className='letter flex-center hover' onClick={handlingLanguage}>
              🌐
            </div>
            <div className='letter flex-center hover'>:-)</div>
            <div
              className='space hover'
              onClick={() => {
                addLetter(' ');
              }}
            />
            <div
              className='letter flex-center hover'
              onClick={() => {
                addLetter('.');
              }}>
              .
            </div>
            <div className='wide-btn flex-center hover'>Enter</div>
          </div>
        </div>
      </div>
    </KeyboardJinyoungContainer>
  );
};

const KeyboardJinyoungContainer = styled.div`
  .fog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 292.333px);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: #8c8d8f;
      background-color: #eeeef3;

      .menu-bar {
        display: flex;
        justify-content: space-around;
        width: 100vw;
        border-bottom: 1px solid #8c8d8f;
        margin-bottom: 5px;

        .menu {
          height: 35px;
        }
      }

      .keyboard-line {
        display: flex;

        .hover {
          cursor: pointer;
          &:hover {
            background-color: #b7b7b7;
          }
        }

        .num {
          width: 8vw;
          height: 25px;
          margin: 3px;
          border-radius: 5px;
          background-color: white;
        }

        .letter {
          width: 8vw;
          height: 35px;
          margin: 3px;
          border-radius: 5px;
          background-color: white;
        }

        .wide-btn {
          width: 12.4vw;
          height: 35px;
          margin: 3px;
          border-radius: 5px;
          background-color: white;
        }

        .space {
          width: calc(32vw + 19px);
          height: 35px;
          margin: 3px;
          border-radius: 5px;
          background-color: white;
        }
      }
    }
  }
`;

export default KeyboardJinyoung;
