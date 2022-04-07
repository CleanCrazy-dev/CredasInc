import { OtlsLink } from "@/components/Icons";
import {
  InputField,
  InputSelect,
  InputSelectOptionProps,
} from "@/components/Input";
import { i18n } from "@lingui/core";
import styles from "@/pages/sessions/create/create.module.scss";

export interface CreateSessionFormProps {
  organizerSelectOptions: InputSelectOptionProps[];
  typeSelectOptions: InputSelectOptionProps[];
  repeatSelectOptions: InputSelectOptionProps[];
  timezoneSelectOptions: InputSelectOptionProps[];
  locationStatesSelectOptions: InputSelectOptionProps[];
  // can contain a callback prop for inputs change handler
  // can contain an object with inputs default values
}

const CreateSessionForm = (formProps: CreateSessionFormProps) => {
  return (
    // must use overflow-hidden since some gutters between columns are large
    // which are creating space larger than container
    <div className="overflow-hidden" data-testid="session_form">
      <div className={styles.create_form_section}>
        <div className="row row-cols-1 row-cols-lg-2 gx-5 gy-2">
          <div data-testid="full-name">
            <InputField
              type="text"
              label={i18n._(/*i18n*/ "Name")}
              labelPoition="side"
              htmlProps={{ placeholder: i18n._(/*i18n*/ "Full Name") }}
            />
          </div>
          <div data-testid="organizer">
            <InputSelect
              label={i18n._(/*i18n*/ "Organizer")}
              labelPoition="side"
              htmlProps={{ defaultValue: "option_1" }}
              options={formProps.organizerSelectOptions}
            />
          </div>
          <div data-testid="typeselectoptions">
            <InputSelect
              label={i18n._(/*i18n*/ "Type")}
              labelPoition="side"
              htmlProps={{ defaultValue: "option_2" }}
              options={formProps.typeSelectOptions}
            />
          </div>
          <div data-testid="email-address">
            <InputField
              type="text"
              label={i18n._(/*i18n*/ "Email")}
              labelPoition="side"
              htmlProps={{ placeholder: i18n._(/*i18n*/ "Email Address") }}
            />
          </div>
          <div data-testid="vrta">
            <InputField
              type="text"
              label={i18n._(/*i18n*/ "Description")}
              labelPoition="side"
              htmlProps={{ defaultValue: "VTRA Level 1 Day 1" }}
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
        </div>
      </div>
      <div className={styles.create_form_section} data-testid="session-form">
        <div className="row row-cols-1 row-cols-lg-2 gx-5 gy-4">
          <div>
            <p className={styles.create_form_section__title}>
              {i18n._(/*i18n*/ "Details")}
            </p>
            <div className="row row-cols-1 gy-2">
              <div>
                <InputField
                  type="date"
                  label={i18n._(/*i18n*/ "Date")}
                  labelPoition="side"
                  htmlProps={{
                    defaultValue: "2022-03-10",
                  }}
                />
              </div>
              <div>
                <div className="row gx-3 align-items-center">
                  <div className="col-sm-4 col-md-3">
                    <label className="form-label mb-sm-0">
                      {i18n._(/*i18n*/ "Time")}
                    </label>
                  </div>
                  <div className="col-sm-8 col-md-9">
                    <div className="row gx-2 align-items-center">
                      <div className="col">
                        <div className="input-group flex-nowrap">
                          <InputField
                            type="time"
                            containerClassName="w-100"
                            htmlProps={{
                              defaultValue: "11:00",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-auto">to</div>
                      <div className="col">
                        <div className="input-group flex-nowrap">
                          <InputField
                            type="time"
                            containerClassName="w-100"
                            htmlProps={{
                              defaultValue: "13:00",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <InputSelect
                  label={i18n._(/*i18n*/ "Time Zone")}
                  labelPoition="side"
                  htmlProps={{ defaultValue: "option_3" }}
                  options={formProps.timezoneSelectOptions}
                />
              </div>
              <div>
                <InputSelect
                  label={i18n._(/*i18n*/ "Repeat")}
                  labelPoition="side"
                  htmlProps={{ defaultValue: "option_4" }}
                  options={formProps.repeatSelectOptions}
                />
              </div>
              <div>
                <div className="row gx-3">
                  <div className="col-sm-4 col-md-3">
                    <label className="form-label mb-sm-0 pt-sm-2">
                      {i18n._(/*i18n*/ "Location")}
                    </label>
                  </div>
                  <div className="col-sm-8 col-md-9">
                    <div className="row gx-2 gy-2">
                      <div>
                        <div className="input-group flex-nowrap">
                          <InputField type="text" containerClassName="w-100" />
                        </div>
                      </div>
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
                            htmlProps={{ defaultValue: "option_5" }}
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
              <div>
                <InputField
                  type="text"
                  label={i18n._(/*i18n*/ "Video Link")}
                  labelPoition="side"
                  htmlProps={{
                    defaultValue: "https://zoomlink.com/984abc83947",
                    className: "text-decoration-underline",
                  }}
                  icon={<OtlsLink />}
                  iconPosition="end"
                />
              </div>
            </div>
          </div>
          <div>
            <p className={styles.create_form_section__title}>
              {i18n._(/*i18n*/ "Pricing & Session")}
            </p>
            <div className="row row-cols-1 gy-2">
              <div>
                <InputField
                  type="number"
                  label={i18n._(/*i18n*/ "Fee")}
                  labelPoition="side"
                  htmlProps={{ defaultValue: 100 }}
                  icon="$"
                  iconPosition="start"
                />
              </div>
              <div>
                <InputField
                  type="date"
                  label={i18n._(/*i18n*/ "RSVP by")}
                  labelPoition="side"
                  htmlProps={{ defaultValue: "2021-12-31" }}
                />
              </div>
              <div>
                <InputField
                  type="number"
                  label={i18n._(/*i18n*/ "Max Attendees")}
                  labelPoition="side"
                  htmlProps={{ defaultValue: 30 }}
                />
              </div>
              <div>
                <InputField
                  type="text"
                  label={i18n._(/*i18n*/ "Registration Link")}
                  labelPoition="side"
                  htmlProps={{
                    defaultValue:
                      "https://ctipractices.com/register/event/00001",
                    className: "text-decoration-underline",
                  }}
                  icon={<OtlsLink />}
                  iconPosition="end"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSessionForm;
