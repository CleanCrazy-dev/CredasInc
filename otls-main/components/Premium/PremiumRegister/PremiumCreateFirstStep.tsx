import {
  PremiumCreateSubTitle,
  PremiumCreateTitle,
} from "./PremiumCreateParts";
import { i18n } from "@lingui/core";
import InputPlanSelect, {
  InputPlanSelectOptionType,
} from "@/components/Input/InputPlanSelect";
import { Dispatch, SetStateAction } from "react";
import { formatMoney } from "@/utils/formatter";

export interface PremiumCreateStepProps {
  onChangeStep: Dispatch<SetStateAction<number>>;
}

const PremiumCreateFirstStep = ({ onChangeStep }: PremiumCreateStepProps) => {
  return (
    <>
      <PremiumCreateTitle>{i18n._(/*i18n*/ "Subscriber")}</PremiumCreateTitle>
      <PremiumCreateSubTitle>
        {i18n._(/*i18n*/ "Select a payment option.")}
      </PremiumCreateSubTitle>
      <div className="max-w-md">
        <InputPlanSelect inputName="plan" options={PLANS_OPTIONS} />
      </div>
      <div className="max-w-md flex justify-end mt-6">
        <button
          className="btn btn-primary btn-lg py-3"
          onClick={() => onChangeStep(2)}
        >
          {i18n._(/*i18n*/ "Next")}
        </button>
      </div>
    </>
  );
};

export default PremiumCreateFirstStep;

const PLANS_OPTIONS: InputPlanSelectOptionType[] = [
  {
    name: i18n._(/*i18n*/ "Monthly"),
    price: formatMoney(30, true),
    description: `${formatMoney(30, true)}/${i18n._(/*i18n*/ "mo")}`,
    value: "monthly",
    defaultChecked: true,
  },
  {
    name: i18n._(/*i18n*/ "Annually"),
    price: formatMoney(30, true),
    description: `${formatMoney(25, true)}/${i18n._(/*i18n*/ "mo")}`,
    value: "monthly",
  },
];
