import { loadTranslation } from "@/utils/translation";
import { GetStaticProps } from "next";
import CreateOrganization from "@/components/Premium/PremiumCreate/CreateOrganization";
import AddUsers from "@/components/Premium/PremiumCreate/AddUsers";
import CreateAndPay from "@/components/Premium/PremiumCreate/CreateAndPay";
import { useState } from "react";

const Create = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <div className="container">
        <div className="max-w-lg mx-auto">
          {step === 1 && <CreateOrganization onChangeStep={setStep} />}
          {step === 2 && <AddUsers onChangeStep={setStep} />}
          {step === 3 && <CreateAndPay onChangeStep={setStep} />}
        </div>
      </div>
    </>
  );
};

export default Create;

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
