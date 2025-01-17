import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import RadioButton from "../../../../components/RadioButton/RadioButton";

export const RadioButtonDescription = () => {
  const component = useMemo(() => <RadioButton text="Selection" checked />, []);
  return (
    <RelatedComponent
      component={component}
      title="RadioButton"
      href="/?path=/docs/inputs-radiobutton--overview"
      description="Allow for a single option to be selected from a visible list."
    />
  );
};
