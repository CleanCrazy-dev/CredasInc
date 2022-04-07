import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { SubscriptionCardProps } from "modules/account/views/Subscription";
import React from "react";

const SubscriptionFree = (props: SubscriptionCardProps) => {
  const { i18n, setSubscribe } = props;
  return (
    <div
      className="d-flex flex-column"
      style={{
        gap: "1.5rem",
      }}
    >
      <Heading variant={"title"}>
        <h1 className="title text-capitalize">
          {i18n._(/*i18n*/ "subscription")}
        </h1>
      </Heading>
      <Card
        body={
          <div
            className="d-flex flex-column"
            style={{
              gap: "1.5rem",
            }}
          >
            <Heading variant="subTitle" customClass="text-capitalize">
              <h3> {i18n._(/*i18n*/ "free membership")}</h3>
            </Heading>
            <div>
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={() => setSubscribe && setSubscribe(true)}
              >
                {i18n._(/*i18n*/ "upgrade now")}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SubscriptionFree;
