import { forwardRef } from "react";
import { cn, selectOptionFocusHandle } from "../../lib/utils";

interface Option {
  [key: string]: any;
}

interface SelectOptionsProps {
  optionsHeight: number;
  optionsWidth: string;
  isShowingOptions: boolean;
  options: Option[];
  customOptionTitle: ((option: Option) => string) | undefined;
  valueKey: string;
  titleKey: string;
  emptyOptionsMessage: string;
  handleSelectTriggerClick: () => void;
  handleOptionClick: (option: Option) => void;
  isWhiteBorder?: boolean;
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
      isWhiteBorder,
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
        className={cn(
          "absolute overflow-auto shadow-lg border-b-2 b z-50",
          isWhiteBorder ? "bg-ace-black" : "bg-white"
        )}
      >
        {options && options.length > 0 && (
          <div
            style={{
              maxHeight: optionsHeight,
            }}
            ref={ref}
            tabIndex={0}
            className="cursor-pointer scroll-smooth overflow-auto pb-[14px]"
          >
            {options.map((option) => {
              return (
                <div
                  className={`px-[10px] pt-[12px] text-lg uppercase font-display`}
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
