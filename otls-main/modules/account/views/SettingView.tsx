import Card from "@/components/Card";
import Switch from "@/components/Form/Switch";
import Heading from "@/components/Heading";
import Label from "@/components/Text";
import { find } from "lodash";
import { useState } from "react";

interface SubscriptionViewProps {
  i18n: any;
}

const SettingView = (props: SubscriptionViewProps) => {
  const { i18n } = props;
  const [emailPreference, setEmailPreference] = useState<any>([
    {
      id: 1,
      name: i18n._(/*i18n*/ "newsletter"),
      description: i18n._(
        /*i18n*/ "Get updates on news, events, and insights."
      ),
      type: "switch",
      checked: false,
    },
    {
      id: 2,
      name: i18n._(/*i18n*/ " notifications"),
      description: i18n._(
        /*i18n*/
        "Get notified when there are changes to your courses."
      ),
      type: "switch",
      checked: false,
    },
    {
      id: 3,
      name: i18n._(/*i18n*/ "promotions"),
      description: i18n._(
        /*i18n*/
        "Get notified when there are changes to your courses."
      ),
      type: "switch",
      checked: false,
    },
    {
      id: 4,
      name: i18n._(/*i18n*/ "updates"),
      description: i18n._(
        /*i18n*/
        "Get notified when there are changes to your courses."
      ),
      type: "switch",
      checked: false,
    },
  ]);

  const handleSwitch = (value: boolean, item: any) => {
    const newEmailPreference = emailPreference.map((preference: any) => {
      if (preference.id === item.id) {
        preference.checked = value;
      }
      return preference;
    });
    setEmailPreference(newEmailPreference);
  };
  return (
    <div
      className="d-flex flex-column"
      style={{
        gap: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Heading variant={"title"}>
        <h1 className="title text-capitalize">
          {i18n._(/*i18n*/ "Email Preferences")}
        </h1>
      </Heading>
      <div className="w-50">
        <Card
          body={
            <div
              className="d-flex flex-column"
              style={{
                gap: "2rem",
              }}
            >
              {emailPreference.map((item: any) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div
                    className="d-flex flex-column align-items-start"
                    style={{
                      gap: 4,
                    }}
                  >
                    <Label
                      variant="title"
                      isCapitalized={true}
                      customClass="font-weight-bold"
                    >
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </span>
                    </Label>

                    <Label variant="paragraph" isCapitalized={false}>
                      <span> {item.description}</span>
                    </Label>
                  </div>
                  <div>
                    <Switch
                      name={item.name}
                      checked={item.checked}
                      onChange={(e) => handleSwitch(e.target.checked, item)}
                    />
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SettingView;
