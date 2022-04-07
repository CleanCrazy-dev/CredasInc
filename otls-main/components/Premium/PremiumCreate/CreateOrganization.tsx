import { InputField, InputSelect } from "@/components/Input";
import { i18n } from "@lingui/core";
import React from "react";
import { PremiumCreateStepProps } from "../PremiumRegister/PremiumCreateFirstStep";
import { PremiumCreateSubTitle } from "../PremiumRegister/PremiumCreateParts";

const CreateOrganization = ({ onChangeStep }: PremiumCreateStepProps) => {
  return (
    <div>
      <PremiumCreateSubTitle>
        {i18n._(/*i18n*/ "Create an Organization")}
      </PremiumCreateSubTitle>
      <div className="flex flex-col gap-y-4">
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Org Name")}
          labelPoition="side"
          labelFor="org_name"
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Contact Name")}
          labelPoition="side"
          labelFor="org_contact_name"
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Email")}
          labelPoition="side"
          labelFor="org_email"
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Phone")}
          labelPoition="side"
          labelFor="org_phone"
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Address")}
          labelPoition="side"
          labelFor="org_address"
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "City")}
          labelPoition="side"
          labelFor="org_city"
        />
        <InputSelect
          label={i18n._(/*i18n*/ "State")}
          labelPoition="side"
          htmlProps={{ defaultValue: "default" }}
          labelFor="org_state"
          options={[
            {
              title: "Select",
              htmlProps: {
                value: "default",
              },
            },
          ]}
        />
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Zip Code")}
          labelPoition="side"
          labelFor="org_zip_code"
        />
      </div>
      <div className="flex justify-end gap-x-2">
        <button
          className="btn btn-outline-secondary btn-lg py-3 mt-6 !border-gray-400"
          onClick={() => {}}
        >
          {i18n._(/*i18n*/ "Cancel")}
        </button>
        <button
          className="btn btn-primary btn-lg py-3 mt-6"
          onClick={() => onChangeStep(2)}
        >
          {i18n._(/*i18n*/ "Next")}
        </button>
      </div>
    </div>
  );
};

export default CreateOrganization;
