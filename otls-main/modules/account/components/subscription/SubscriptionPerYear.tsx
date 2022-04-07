import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { SubscriptionCardProps } from "modules/account/views/Subscription";

const SubscriptionPerYear = (props: SubscriptionCardProps) => {
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
              gap: "2.5rem",
            }}
          >
            <Heading variant="subTitle">
              <span className="text-capitalize">
                {i18n._(/*i18n*/ "one year subscription")}
              </span>
            </Heading>
            <div className="d-flex">
              {[
                {
                  id: 1,
                  title: i18n._(/*i18n*/ "next payment"),
                  value: "$20",
                },
                {
                  id: 2,
                  title: i18n._(/*i18n*/ "due on"),
                  value: "01/22/2022",
                },
                {
                  id: 3,
                  title: i18n._(/*i18n*/ "subscription ends on"),
                  value: "12/22/2022",
                },
              ].map((item) => (
                <div className="d-flex w-100 position-relative" key={item.id}>
                  <div className="position-absolute top-0 left-0 primary-line h-100" />
                  <div
                    className="d-flex flex-column align-items-start"
                    style={{
                      gap: 3,
                      marginLeft: "25px",
                    }}
                  >
                    <Text isCapitalized={true} variant="title">
                      <span>{item.title}</span>
                    </Text>
                    <Heading variant="title">
                      <span>{item.value}</span>
                    </Heading>
                  </div>
                </div>
              ))}
            </div>
            <div className="action d-flex align-content-end justify-content-end">
              <button
                className="btn outline-none"
                type="button"
                onClick={() => setSubscribe && setSubscribe(false)}
              >
                <Text
                  variant="subTitle"
                  isCapitalized={false}
                  customClass="text-uppercase"
                >
                  <span>{i18n._(/*i18n*/ "cancel")}</span>
                </Text>
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default SubscriptionPerYear;
