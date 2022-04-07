import Heading from "@/components/Heading";
import Text from "@/components/Text";
import React from "react";
import { I18n } from "@lingui/core";
import ProgressIndicator from "@/components/ProgressIndicator";

interface CourseCardList {
  i18n: I18n;
}
const CourseCardList = (props: CourseCardList) => {
  const { i18n } = props;
  return (
    <div
      className="d-flex flex-column"
      style={{
        gap: "2rem",
      }}
    >
      <Heading variant={"title"}>
        <h1 className="title text-capitalize">
          {i18n._(/*i18n*/ "in progress")}
        </h1>
      </Heading>
      <div
        className="d-flex"
        style={{
          gap: "1rem",
        }}
      >
        {[1, 2, 3].map((item) => (
          <div className="card p-4" key={item}>
            <div className="d-flex flex-column justify-items-start">
              <Heading variant="baseText" customClass="text-left">
                <span className="text-uppercase text-left">Mental health</span>
              </Heading>
              <Text
                isCapitalized={true}
                variant="subTitle"
                customClass="text-left"
              >
                <h2 className="text-left">Course</h2>
              </Text>
            </div>
            <p className="mt-4">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <div>
              <ProgressIndicator value={item * 20} />
              <Text isCapitalized={true} variant="baseText" customClass="mt-3">
                <span className="text-lowercase">
                  {item * 20}% {i18n._(/*i18n*/ "complete")}
                </span>
              </Text>
            </div>
            <div>
              <div className="btn btn-primary mt-5 text-capitalize">
                {i18n._("continue")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardList;
