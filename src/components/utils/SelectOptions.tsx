import { forwardRef } from "react";
import { selectOptionFocusHandle } from "../../lib/utils";

interface Option {
  [key: string]: any;
}

interface SelectOptionsProps {
  optionsHeight: number;
  optionsWidth: string;
  isShowingOptions: boolean;
  options: Option[]; // Assuming the 'options' prop is an array of objects
  customOptionTitle: ((option: Option) => string) | undefined; // A function to get the custom title for the option
  valueKey: string;
  titleKey: string;
  emptyOptionsMessage: string;
  handleSelectTriggerClick: () => void; // The handleSelectTriggerClick function is not async
  handleOptionClick: (option: Option) => void; // The handleOptionClick function is not async
}

const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  (
    {
      optionsHeight = 300,
      optionsWidth = "inherit",
      isShowingOptions,
      options,
      customOptionTitle,
      valueKey,
      titleKey,
      emptyOptionsMessage,
      handleSelectTriggerClick,
      handleOptionClick,
    },
    ref
  ) => {
    return (
      <div
        style={{
          maxHeight: optionsHeight,
          width: optionsWidth,
          display: isShowingOptions ? "block" : "none",
        }}
        className="absolute overflow-auto px-[10px] shadow-lg bg-white rounded-b-[5px] z-50"
      >
        {options && options.length > 0 && (
          <div
            style={{
              maxHeight: optionsHeight,
            }}
            ref={ref}
            tabIndex={0}
            className="cursor-pointer scroll-smooth overflow-auto pb-[10px]"
          >
            {options.map((option) => {
              return (
                <div
                  className={`p-[10px] text-[14px]`}
                  key={option[valueKey] || option}
                  onMouseDown={() => handleOptionClick(option)}
                  onKeyDown={(event) =>
                    selectOptionFocusHandle(
                      event,
                      () => handleOptionClick(option),
                      handleSelectTriggerClick
                    )
                  }
                  tabIndex={0}
                >
                  <span>
                    {customOptionTitle
                      ? customOptionTitle(option)
                      : option[titleKey]}
                  </span>
                </div>
              );
            })}
            {options && options.length < 1 && Boolean(emptyOptionsMessage) && (
              <div className="p-[20px]">{emptyOptionsMessage}</div>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default SelectOptions;
