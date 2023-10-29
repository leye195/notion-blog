"use client";

import { useMedia } from "react-use";

import { getBreakpointQuery } from "@/libs/utils";
import breakpoints from "@/styles/breakpoints";
import Flex from "@/components/common/Flex";
import Tag from "@/components/common/Tag";
import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: underline;
`;

const ResumePage = () => {
  const isMdDown = useMedia(getBreakpointQuery(breakpoints.down("md")), false);

  return (
    <Flex
      className="max-w-[1000px] mx-auto p-[16px]"
      $direction="column"
      $gap="8px"
    >
      <Flex $direction="column">
        <h1 className="text-[42px]">
          <b>안녕하세요! 저는 이영재 입니다.</b>
        </h1>
        <Flex $direction="column" $gap="4px">
          <ul className="flex flex-col gap-2 text-[18px] pl-[24px] mb-[12px]">
            <li>
              <b>Github:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="https://github.com/leye195"
                target="_blank"
              >
                https://github.com/leye195
              </Anchor>
            </li>
            <li>
              <b>Blog:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="https://github.com/leye195"
                target="_blank"
              >
                blog link
              </Anchor>
            </li>
            <li>
              <b>Email:</b>{" "}
              <Anchor className="text-blue-500" href="mailto:leye195@naver.com">
                mailto:leye195@naver.com
              </Anchor>
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="w-full" $direction="column" $gap="20px">
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Introduction</b>
          </h2>
          <div>
            <p>
              3년차 웹 프론트엔드로 SuperTree(PlayDapp) 에서 블록체인 웹
              서비스를 개발하고 있습니다.
            </p>
            <p>
              개발자로서 묵묵하게 주어진 일들만 처리하는것이 아닌 그외 일들도
              주도적으로 찾아 진행하는것을 좋아합니다. 한 가지 예로 서비스
              성능을 분석하며{" "}
              <Anchor
                href="https://dantechblog.netlify.app/posts/bundle-size"
                target="_blank"
              >
                번들 사이즈 개선
              </Anchor>{" "}
              작업을 진행한 경험이 있습니다.
            </p>
            <p>
              현재에 만족하지 않고 지속적으로 성장하기 위해 노력하고 있으며 제가
              경험한 것들이 누군가에게는 도움이 될 수 있기를 바라며 블로그에
              글을 작성하고 있습니다.
            </p>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Work Experience</b>
          </h2>
          <Flex $direction={isMdDown ? "column" : "row"} $gap="22px">
            <div>
              <h3 className="text-[22px] mb-1">
                <b>
                  <Anchor href="https://supertree.co/" target="_blank">
                    SuperTree
                  </Anchor>
                </b>
              </h3>
              <small className="text-[16px]">2020.10 ~ </small>
              <span className="text-[16px]">Frontend Developer</span>
            </div>
            <Flex
              className="border-blue-400  border-l-4 pl-4"
              $direction="column"
              $gap="12px"
            >
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Tournament 개발팀</b>
                </h3>
                <small className="text-[16px]">2022.08 ~</small>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://tournament.playdapp.com"
                        target="_blank"
                      >
                        PlayDapp Tournaments
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2022.08 ~ )</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="rtk(redux-toolkit)" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                    <Tag name="etherjs" type="outline" size="sm" />
                    <Tag name="wagmi" type="outline" size="sm" />
                  </Flex>
                  <p>
                    재화(Gold,Ticket) 소비를 통해 참여한 Single 및 Multi 게임
                    플레이 순위 및 대결 결과에 따른 보상을 제공하는 BlockChain
                    Game Platform 입니다. TF로 합류하여 서비스 소프트런칭에
                    기여하였으며 이후 정식으로 팀에 합류하여 서비스 개발 및
                    개선에 참여하고 있습니다
                  </p>
                  <div className="pl-[24px]">
                    <ul>
                      <li>프론트 개발환경 및 프로젝트 구조 설정</li>
                      <li>
                        iframe을 통한 game client 연동 및 postMessage를 활용한
                        이벤트 통신 작업
                      </li>
                      <li>
                        점검 페이지 노출
                        <ul className="pl-[18px]">
                          <li>
                            nextjs의 middleware api 활용을 통한 점검 진행 중인
                            경우 점검페이지로 redirect, 아닌 경우 입력 경로로
                            접근하도록 처리
                          </li>
                        </ul>
                      </li>
                      <li>가상화폐(ERC-20) 보상 출금 기능 추가</li>
                      <li>
                        Ticket NFT Convert 기능 구현
                        <ul className="pl-[18px]">
                          <li>
                            MarketPlace에서 구매한 Ticket NFT를 토너먼트내에서
                            사용 할 수 있게 하기 위한 기능입니다
                          </li>
                        </ul>
                      </li>
                      <li>
                        Paypal 티켓 구매 기능 추가
                        <ul className="pl-[18px]">
                          <li>
                            Paypal을 통해 티켓 좀 더 쉽게 구매 할 수 있도록 지원
                            - `react-paypal-js` 지원 버튼위젯 및 이벤트 함수
                            활용
                          </li>
                        </ul>
                      </li>
                      <li>
                        Guest 로그인 기능 추가
                        <ul className="pl-[18px]">
                          <li>
                            Wallet 로그인 같은 Web3 환경에 익숙하지 않은
                            유저들도 서비스를 체험 및 경험을 통해 참여 하도록
                            유도하기 위해 Guest 로그인을 지원합니다
                          </li>
                        </ul>
                      </li>
                      <li>유저 및 트래픽 분석을 위한 GA, Mixpanel 연동</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="w-full  bg-slate-50" />
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Marketplace 개발팀</b>
                </h3>
                <small className="text-[16px]">2020.10 ~ 2022.08</small>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://market.playdapp.com"
                        target="_blank"
                      >
                        PlayDapp MarketPlace
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2020.10 ~ 2022.08)</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="redux" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                    <Tag name="etherjs" type="outline" size="sm" />
                  </Flex>
                  <p>NFT를 거래할 수 있는 C2C 마켓플레이스 서비스 입니다.</p>
                  <div className="pl-[24px]">
                    <ul>
                      <li>v1/v2 리뉴얼 프론트엔드 개발</li>
                      <li>
                        NFT 상세 페이지
                        <ul className="pl-[18px]">
                          <li>NFT(ERC-721) 구매 기능 구현</li>
                          <li>Order(판매 제안) cancel 기능 구현</li>
                        </ul>
                      </li>
                      <li>
                        My Offers 페이지
                        <ul className="pl-[18px]">
                          <li>Offer(판매 제안) 승인 기능 구현</li>
                          <li>Offer Table, OfferAccept 모달 컴포넌트 구현</li>
                        </ul>
                      </li>
                      <li>
                        Email 인증 페이지
                        <ul className="pl-[18px]">
                          <li>email 인증 요청 기능 구현</li>
                          <li>email 인증 결과 페이지</li>
                        </ul>
                      </li>
                      <li>
                        OOZ 티징 페이지
                        <ul className="pl-[18px]">
                          <li>
                            마켓내 등록될 IPX (라인프렌즈)의 OOZ NFT 관련 티징
                            페이지 작업으로 IPX 측 디자이너와 협업을 통해 개발한
                            페이지로 one page scroll 형식으로 한 번에 한 페이지
                            씩 노출되도록 구현 진행
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://tournament.playdapp.com"
                        target="_blank"
                      >
                        ItemManager
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2022.03 ~ 2022.04)</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="recoil" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                  </Flex>
                  <p>
                    Multihoming 2.0 버전 지원을 위한 ItemManager에 내구제 기능
                    적용 작업을 진행하였습니다. itemManager는 유저가 소유하고
                    있는 nft를 스테이킹 하고 게임내 일일임무, PvP 보상을
                    받아갈수 있도록 해주는 서비스 입니다
                  </p>
                  <div className="pl-[24px]">
                    <ul>
                      <li>
                        Repair 기능 구현
                        <ul className="pl-[18px]">
                          <li>
                            유저가 itemManager에 스테이킹한 nft들에 대해서 PLA를
                            지불하여 내구도를 수리 할 수 있도록 로직을 구현하여
                            지속적으로 보상을 받아갈 수 있도록 하였습니다.
                          </li>
                        </ul>
                      </li>
                      <li>
                        공통 컴포넌트 개발
                        <ul className="pl-[18px]">
                          <li>
                            각 페이지에서 공통적으로 보여줘야 하는 내구도
                            게이지, 경고 메시지 등 컴포넌트들에 대해 모듈화를
                            진행하여 UI를 구성
                          </li>
                        </ul>
                      </li>
                      <li>
                        멀티 월렛 지원 - walletConnect
                        <ul className="pl-[18px]">
                          <li>
                            기존에 portis 월렛을 통한 로그인 만 지원하는 경우
                            portis 월렛 제품 자체에서 에러가 발생하여 로그인이
                            안되는 이슈가 많아 walletConnect 월렛 로그인도
                            추가적으로 지원하여 유저가 다른 경로를 통해 로그인을
                            할 수 있도록 개선 하였습니다.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://geodomain.event.playdapp.com"
                        target="_blank"
                      >
                        GEO.DOMAIN Promotion
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2022.02 ~ 2022.03)</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="next-i18next" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                  </Flex>
                  <p>GEO.DOMAIN NFT 이벤트 프로모션 페이지 입니다.</p>
                  <div className="pl-[24px]">
                    <ul>
                      <li>
                        GEO.DOMAIN NFT 오픈 이벤트 프로모션 프로젝트 환경 구성
                        및 페이지 구현
                      </li>
                      <li>i18n 활용 영어, 한글 다국어 지원</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Skills</b>
          </h2>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Front-End</b>
            </h3>
            <ul className="text-[18px] flex flex-col gap-1  pl-[24px]">
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>NextJS</li>
              <li>JavaScript, TypeScript</li>
              <li>Emotion, Styled-Component</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Back-End</b>
            </h3>
            <ul className="text-[18px] flex flex-col gap-1  pl-[24px]">
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Etc</b>
            </h3>
            <ul className="text-[18px] flex flex-col gap-1 pl-[24px]">
              <li>Git / Github</li>
              <li>Jira</li>
            </ul>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumePage;
