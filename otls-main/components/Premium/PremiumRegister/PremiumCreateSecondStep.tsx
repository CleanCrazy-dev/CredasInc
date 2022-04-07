import {
  PremiumCreateSubTitle,
  PremiumCreateTitle,
} from "./PremiumCreateParts";
import { i18n } from "@lingui/core";
import PaymentInvoice from "../PaymentInvoice/PaymentInvoice";
import { useState } from "react";
import { PremiumCreateStepProps } from "./PremiumCreateFirstStep";
import PremiumCreatePayment from "../PremiumCreatePayment/PremiumCreatePayment";

const PremiumCreateSecondStep = ({ onChangeStep }: PremiumCreateStepProps) => {
  const [paymentType, setPaymentType] = useState<"card" | "check">("card");

  return (
    <>
      <PremiumCreateTitle>{i18n._(/*i18n*/ "Subscriber")}</PremiumCreateTitle>
      <PremiumCreateSubTitle>
        {i18n._(/*i18n*/ "Payment")}
      </PremiumCreateSubTitle>
      <PremiumCreatePayment
        paymentType={paymentType}
        onChangePaymentType={setPaymentType}
      />
      <div className="mt-10">
        <PaymentInvoice
          items={[
            {
              name: i18n._(/*i18n*/ "1 Year Membership"),
              price: 500,
            },
          ]}
          fees={[
            {
              name: i18n._(/*i18n*/ "Tax"),
              price: 50,
            },
          ]}
        />
      </div>
      <div className="flex justify-end gap-x-2 mt-6">
        <button
          className="btn btn-outline-secondary btn-lg py-3 !border-gray-400"
          onClick={() => onChangeStep(1)}
        >
          {i18n._(/*i18n*/ "back")}
        </button>
        <button className="btn btn-primary btn-lg py-3">
          {paymentType === "card" && i18n._(/*i18n*/ "Pay")}
          {paymentType === "check" && i18n._(/*i18n*/ "Done")}
        </button>
      </div>
    </>
  );
};

export default PremiumCreateSecondStep;
