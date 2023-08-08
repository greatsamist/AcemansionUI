import { FC, useRef, useState } from "react";

import { ArrowDownRight } from "lucide-react";
import SelectOptions from "./SelectOptions";
import FormLabel from "./FormLabel";
import useClickOutside from "../../hooks/useClickOutside";

interface Option {
  [key: string]: any;
}

interface FormSelectProps {
  id?: string;
  labelName: string;
  required?: boolean;
  placeholder?: string;
  value?: any;
  onChange?: (option: Option) => void;
  options: Option[];
  customOptionTitle?: ((option: Option) => string) | undefined;
  titleKey?: string;
  valueKey?: string;
  maximumTitleLength?: number;
  containerWidth?: string;
  disabled?: boolean;
  optionsHeight?: number;
  optionsWidth?: string;
  emptyOptionsMessage?: string;
}

const FormSelect: FC<FormSelectProps> = ({
  labelName,
  placeholder,
  value,
  onChange,
  options,
  customOptionTitle,
  titleKey = "title",
  valueKey = "value",
  maximumTitleLength = 40,
  containerWidth = "100%",
  disabled,
  optionsHeight = 200,
  optionsWidth = "inherit",
  emptyOptionsMessage = "No options available",
}) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, () => setIsShowingOptions(false));

  const handleSelectTriggerClick = () => setIsShowingOptions(!isShowingOptions);
  const handleOptionClick = (option: Option) => {
    onChange?.(option);
    setIsShowingOptions(false);
  };

  const getFormattedSelectedOptionTitle = (option: Option | null) => {
    const title = customOptionTitle
      ? customOptionTitle(option!)
      : option?.[titleKey];
    if (title?.length! > maximumTitleLength) {
      return `${title!.substring(0, maximumTitleLength)}...`;
    }
    return title;
  };

  return (
    <div className="relative mb-5">
      <FormLabel labelName={labelName} />
      <div
        ref={selectRef}
        style={{ width: containerWidth }}
        className={`relative  ${disabled ? "pointer-events-none" : ""}`}
        onFocus={() => {
          setIsShowingOptions(true);
        }}
      >
        <div
          className={`h-10 border-b-2 border-ace-black bg-transparent font-display text-lg flex items-center justify-between cursor-pointer`}
          onMouseDown={() => handleSelectTriggerClick()}
        >
          {getFormattedSelectedOptionTitle(value) ? (
            <span className="text-lg text-display uppercase">
              {getFormattedSelectedOptionTitle(value)}
            </span>
          ) : (
            <span className="text-lg text-display uppercase text-muted-foreground">
              {placeholder}
            </span>
          )}
          <ArrowDownRight size={30} />
        </div>

        <SelectOptions
          options={options}
          customOptionTitle={customOptionTitle}
          titleKey={titleKey}
          valueKey={valueKey}
          handleOptionClick={handleOptionClick}
          handleSelectTriggerClick={handleSelectTriggerClick}
          ref={optionsRef}
          optionsHeight={optionsHeight}
          optionsWidth={optionsWidth}
          isShowingOptions={isShowingOptions}
          emptyOptionsMessage={emptyOptionsMessage}
        />
      </div>
    </div>
  );
};

export default FormSelect;
