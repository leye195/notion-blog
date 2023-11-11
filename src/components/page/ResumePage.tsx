"use client";

import { useMedia } from "react-use";
import styled from "styled-components";

import { getBreakpointQuery } from "@/libs/utils";
import breakpoints from "@/styles/breakpoints";
import Flex from "@/components/common/Flex";
import Tag from "@/components/common/Tag";

const P = styled.p`
  ${breakpoints.down("md")} {
    font-size: 14px;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const Ul = styled.ul`
  ${breakpoints.down("md")} {
    font-size: 14px;
  }
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
          <b>Hello! </b>
          {isMdDown && <br />}
          <b>I am YoungJae Lee</b>
        </h1>
        <Flex $direction="column" $gap="4px">
          <ul className="flex flex-col gap-2 text-[18px] pl-[24px] mb-[12px]">
            <li>
              <b>Github:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="https://github.com"
                target="_blank"
              >
                Github URL
              </Anchor>
            </li>
            <li>
              <b>Blog:</b>{" "}
              <Anchor className="text-blue-500" href="#" target="_blank">
                Blog URL
              </Anchor>
            </li>
            <li>
              <b>Email:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="mailto:youremail@naver.com"
              >
                mailto:youremail@naver.com
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
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              molestias.
            </P>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              molestias.
            </P>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              molestias.
            </P>
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
                  <Anchor href="#" target="_blank">
                    Company1
                  </Anchor>
                </b>
              </h3>
              <small className="text-[16px]">20XX.XX ~ </small>
              <span className="text-[16px]">Frontend Developer</span>
            </div>
            <Flex
              className="border-blue-400  border-l-4 pl-4"
              $direction="column"
              $gap="12px"
            >
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Team2</b>
                </h3>
                <small className="text-[16px]">2022.08 ~</small>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor href="#" target="_blank">
                        Project
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
                  </Flex>
                  <P>Lorem ipsum dolor sit amet consectetur adipisicing elit</P>
                  <div className="pl-[24px]">
                    <Ul>
                      <li>perspiciatis modi dolores libero tenetur nam.</li>
                      <li>perspiciatis modi dolores libero tenetur nam.</li>
                      <li>perspiciatis modi dolores libero tenetur nam.</li>
                      <li>
                        perspiciatis modi dolores libero tenetur nam.
                        <Ul className="pl-[18px]">
                          <li>
                            perspiciatis modi dolores libero tenetur nam.
                            perspiciatis modi dolores libero tenetur nam.
                          </li>
                        </Ul>
                      </li>
                    </Ul>
                  </div>
                </div>
              </div>
              <hr className="w-full  bg-slate-50" />
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Team1</b>
                </h3>
                <small className="text-[16px]">20XX.XX ~ 20XX.XX</small>
                <div>
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor href="#" target="_blank">
                        Project
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2022.xx ~ 2022.xx)</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="next-i18next" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                  </Flex>
                  <P>perspiciatis modi dolores libero tenetur nam.</P>
                  <div className="pl-[24px]">
                    <Ul>
                      <li>perspiciatis modi dolores libero tenetur nam.</li>
                      <li>perspiciatis modi dolores libero tenetur nam.</li>
                    </Ul>
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
            <Ul className="text-[18px] flex flex-col gap-1  pl-[24px]">
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>NextJS</li>
              <li>JavaScript, TypeScript</li>
              <li>Emotion, Styled-Component</li>
            </Ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Back-End</b>
            </h3>
            <Ul className="text-[18px] flex flex-col gap-1  pl-[24px]">
              <li>Node.js</li>
            </Ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Etc</b>
            </h3>
            <Ul className="text-[18px] flex flex-col gap-1 pl-[24px]">
              <li>Git / Github</li>
              <li>Jira</li>
            </Ul>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumePage;
