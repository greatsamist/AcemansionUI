import React, { useEffect, useRef, useState } from "react";

import { ArrowDown } from "lucide-react";
import SelectOptions from "./SelectOptions";
import FormLabel from "./FormLabel";
import useClickOutside from "../../hooks/useClickOutside";

interface Option {
  [key: string]: any;
  //   title: string;
  //   value: string;
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
}

const FormSelect: React.FC<FormSelectProps> = ({
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

  useEffect(() => {
    let searchWord = "";
    const showFoundOptions = (event: KeyboardEvent) => {
      if (!/\b[a-zA-Z1-9]\b/g.test(event.key)) return;
      searchWord += event.key.toUpperCase();
      const currentOptions =
        selectRef.current?.querySelectorAll<HTMLDivElement>(
          "div:last-of-type > div > div"
        );
      const firstElement = [...currentOptions!].find(
        (element) =>
          element.innerText.slice(0, searchWord.length).toUpperCase() ===
          searchWord
      );

      if (firstElement) {
        firstElement.focus();
        return;
      }
      searchWord = "";
    };
    if (selectRef.current && isShowingOptions) {
      window.addEventListener("keydown", showFoundOptions);
    }
    return () => window.removeEventListener("keydown", showFoundOptions);
  }, [isShowingOptions]);

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
    <div className="relative ">
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
          className={`h-[10px]  border-b-2 border-ace-black bg-transparent font-display text-lg  px-[20px] flex items-center justify-between cursor-pointer ${
            isShowingOptions ? "rounded-t-[5px]" : "rounded-[5px]"
          }`}
          onMouseDown={() => handleSelectTriggerClick()}
        >
          {getFormattedSelectedOptionTitle(value) ? (
            <span className="">{getFormattedSelectedOptionTitle(value)}</span>
          ) : (
            <span className="text-[14px] text-tc-lightGrey">{placeholder}</span>
          )}
          <ArrowDown size={55} className="fill-ace-black" />
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
        />
      </div>
    </div>
  );
};

export default FormSelect;
