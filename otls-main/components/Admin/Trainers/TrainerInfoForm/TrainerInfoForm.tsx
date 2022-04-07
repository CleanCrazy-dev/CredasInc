import { OtlsLink } from "@/components/Icons";
import {
  InputField,
  InputSelect,
  InputSelectOptionProps,
} from "@/components/Input";
import { i18n } from "@lingui/core";
import styles from "./trainerInfoForm.module.scss";

export interface TrainerInfoFormProps {
  organizationSelectOptions: InputSelectOptionProps[];
  trainingLevelSelectOptions: InputSelectOptionProps[];
  locationStatesSelectOptions: InputSelectOptionProps[];
  // can contain a callback prop for inputs change handler
  // can contain an object with inputs default values
}

const TrainerInfoForm = (formProps: TrainerInfoFormProps) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 gx-5 gy-2">
      <div>
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Name")}
          labelPoition="side"
          htmlProps={{ defaultValue: "Jake Peralta" }}
        />
      </div>
      <div>
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Email")}
          labelPoition="side"
          htmlProps={{ defaultValue: "rholt@b99.com" }}
        />
      </div>

      <div>
        <InputSelect
          label={i18n._(/*i18n*/ "Organization")}
          labelPoition="side"
          htmlProps={{ defaultValue: "option_1" }}
          options={formProps.organizationSelectOptions}
        />
      </div>
      <div>
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Phone")}
          labelPoition="side"
          htmlProps={{ defaultValue: "(123) 456-7890" }}
        />
      </div>
      <div>
        <InputSelect
          label={i18n._(/*i18n*/ "Training Level")}
          labelPoition="side"
          htmlProps={{ defaultValue: "option_2" }}
          options={formProps.trainingLevelSelectOptions}
        />
      </div>
      <div>
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "Address")}
          labelPoition="side"
          htmlProps={{
            defaultValue: "123 Police Lane",
          }}
        />
      </div>
      <div className={styles.order_section_before_address}>
        <InputField
          type="date"
          label={i18n._(/*i18n*/ "Completed On")}
          labelPoition="side"
          htmlProps={{ defaultValue: "2021-01-21" }}
        />
      </div>
      <div className={styles.order_section_address}>
        <div className="row gx-3">
          <div className="col-sm-8 col-md-9 offset-sm-4 offset-md-3">
            <div className="row gx-2 gy-2">
              <div className="col">
                <div className="input-group flex-nowrap">
                  <InputField
                    type="text"
                    containerClassName="w-100"
                    htmlProps={{ defaultValue: "Brooklyn" }}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group flex-nowrap">
                  <InputSelect
                    htmlProps={{ defaultValue: "option_3" }}
                    options={formProps.locationStatesSelectOptions}
                    containerClassName="w-100"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group flex-nowrap">
                  <InputField
                    type="number"
                    containerClassName="w-100"
                    htmlProps={{ defaultValue: 1111 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.order_section_9}>
        <InputField
          type="text"
          label={i18n._(/*i18n*/ "CTIP Rating")}
          labelPoition="side"
          htmlProps={{
            defaultValue: "surveylink.com",
            className: "text-decoration-underline",
          }}
          icon={<OtlsLink />}
          iconPosition="end"
        />
      </div>
    </div>
  );
};

export default TrainerInfoForm;
