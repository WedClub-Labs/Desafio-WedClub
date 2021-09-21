import classNames from "classnames";
import { useRef } from "react";
import { useTextField } from "react-aria";
import Cleave from "cleave.js/react";
import { CleaveOptions } from "cleave.js/options";

export type TextFieldProps = {
  isFull?: boolean;
  error?: string | boolean;
  mask?: CleaveOptions;
  hiddenLabel?: boolean;
} & Parameters<typeof useTextField>["0"];

function TextField({ error, mask, hiddenLabel, ...props }: TextFieldProps) {
  const ref = useRef(null);
  const { labelProps, inputProps } = useTextField(props, ref);

  return (
    <div className="flex flex-col">
      {props.label && (
        <label
          {...labelProps}
          className={classNames(
            "text-xs text-gray-600 pb-1",
            error ? "text-red-600" : "text-gray-600",
            { hidden: hiddenLabel }
          )}
        >
          {props.label}
        </label>
      )}
      {mask ? (
        <Cleave
          //  Current BUG https://github.com/adobe/react-spectrum/issues/1760
          {...(inputProps as any)}
          options={mask}
          className={classNames("h-8 rounded border px-3 py-1 text-sm", {
            "border-red-600 text-red-500": error,
            "bg-gray-100": props.isReadOnly,
          })}
          ref={ref}
        />
      ) : (
        <input
          //  Current BUG https://github.com/adobe/react-spectrum/issues/1760
          {...(inputProps as any)}
          options={mask}
          className={classNames("h-8 rounded border px-3 py-1 text-sm", {
            "pr-1": props.type === "date",
            "border-red-600 text-red-500": error,
            "bg-gray-100": props.isReadOnly,
          })}
          ref={ref}
        />
      )}
      <div className="h-4">
        <p
          hidden={!error}
          className="text-xs text-red-600 leading-4 whitespace-nowrap overflow-ellipsis overflow-hidden"
        >
          {error}
        </p>
      </div>
    </div>
  );
}

export default TextField;
