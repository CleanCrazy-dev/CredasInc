import { loadTranslation } from "@/utils/translation";
import { GetStaticProps } from "next";
import PremiumCreateFirstStep from "@/components/Premium/PremiumRegister/PremiumCreateFirstStep";
import PremiumCreateSecondStep from "@/components/Premium/PremiumRegister/PremiumCreateSecondStep";
import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <div className="container">
        <div className="max-w-lg mx-auto">
          {step === 1 && <PremiumCreateFirstStep onChangeStep={setStep} />}
          {step === 2 && <PremiumCreateSecondStep onChangeStep={setStep} />}
        </div>
      </div>
    </>
  );
};

export default Register;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};
