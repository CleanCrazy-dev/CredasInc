import { InputChips, InputField, InputSelect } from "@/components/Input";
import { i18n } from "@lingui/core";
import React from "react";
import PaymentInvoice from "../PaymentInvoice/PaymentInvoice";
import { PremiumCreateStepProps } from "../PremiumRegister/PremiumCreateFirstStep";
import { PremiumCreateSubTitle } from "../PremiumRegister/PremiumCreateParts";

const AddUsers = ({ onChangeStep }: PremiumCreateStepProps) => {
  return (
    <div>
      <PremiumCreateSubTitle>
        {i18n._(/*i18n*/ "Add Users")}
      </PremiumCreateSubTitle>
      <InputChips
        label={i18n._(/*i18n*/ "Email")}
        labelPoition="side"
        labelFor="create_user_email"
        validateInput="email"
        note={i18n._(/*i18n*/ "Add multiple, separate with commas")}
      />
      <div className="mt-10">
        <PaymentInvoice
          items={[
            {
              name: i18n._(/*i18n*/ "1 Year Enterprise "),
              price: 500,
            },
          ]}
          subtotalLabel={i18n._(/*i18n*/ "Enterprise Fee")}
          fees={[
            {
              name: i18n._(/*i18n*/ "0 Users"),
              price: 0,
            },
            {
              name: i18n._(/*i18n*/ "Tax"),
              price: 50,
            },
          ]}
        />
      </div>
      <p className="text-base-sm my-10">
        {i18n._(
          /*i18n*/ "Additional users added in the future will be billed the month after they are added."
        )}
      </p>
      <div className="flex justify-end gap-x-2">
        <button
          className="btn btn-outline-secondary btn-lg py-3x !border-gray-400"
          onClick={() => onChangeStep(1)}
        >
          {i18n._(/*i18n*/ "Back")}
        </button>
        <button
          className="btn btn-primary btn-lg py-3"
          onClick={() => onChangeStep(3)}
        >
          {i18n._(/*i18n*/ "Next")}
        </button>
      </div>
    </div>
  );
};

export default AddUsers;
