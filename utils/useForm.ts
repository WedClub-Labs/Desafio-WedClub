// My own form util used in React Aria projects,
// I should publish it as a npm package some day (and test it)
import { useCallback, useMemo, useRef, useState } from "react";

type Field = {
  value: string;
  error?: boolean | string;
};

type UseFormArgs = {
  initialState?: Record<string, string>;
};

type RegisterOptions = {
  validate?: (value: string) => boolean | string;
  isRequired?: boolean;
};

const transformInitialState = (
  state: Record<string, string>
): Record<string, Field> =>
  Object.entries(state).reduce<Record<string, Field>>((state, [key, value]) => {
    state[key] = { value, error: false };

    return state;
  }, {});

function useForm({ initialState }: UseFormArgs = {}) {
  const [state, setState] = useState(transformInitialState(initialState ?? {}));
  const fieldsOptionRef = useRef<Record<string, RegisterOptions>>({});

  const setField = useCallback((field: string, value: string) => {
    setState((state) => ({
      ...state,
      [field]: { ...state[field], value },
    }));
  }, []);

  const getError = useCallback(
    (field: string, value: string): boolean | string => {
      const { validate, isRequired } = fieldsOptionRef.current[field] ?? {};
      let error: boolean | string = false;

      if (validate) {
        error = validate(value);
      }
      if (isRequired && !error && !value) {
        error = "Preenchimento Obrigatório";
      }

      return error;
    },
    []
  );

  const register = (field: string, options: RegisterOptions = {}) => {
    fieldsOptionRef.current[field] = options;

    return {
      value: state[field]?.value ?? "",

      isRequired: options.isRequired,

      onBlur: () => {
        validate([field]);
      },

      onSelectionChange: (key: string | number) => {
        setState((state) => ({
          ...state,
          [field]: { ...state[field], value: key.toString() },
        }));
      },

      onFocus: () => {
        setState((state) => ({
          ...state,
          [field]: { ...state[field], error: false },
        }));
      },

      onChange: (value: string | boolean) => {
        setState((state) => ({
          ...state,
          [field]: {
            ...state[field],
            value:
              typeof value !== "boolean"
                ? value
                : value === true
                ? "checked"
                : "unchecked",
          },
        }));
      },

      error: state[field]?.error,
    };
  };

  const validate = (fields: string[]) => {
    const fieldErrors: [string, boolean | string][] = fields.map((field) => [
      field,
      getError(field, state[field]?.value ?? ""),
    ]);

    setState((state) => {
      fieldErrors.forEach(([key, error]) => {
        state[key] = { ...state[key], error };
      });

      return { ...state };
    });

    const isValid = fieldErrors.every(([_, error]) => !error);

    return isValid;
  };

  const isValid = useMemo(() => {
    return Object.values(state).every(({ error }) => !error);
  }, [state]);

  const formState = Object.entries(state).reduce<Record<string, string>>(
    (formState, [key, { value }]) => {
      formState[key] = value;
      return formState;
    },
    {}
  );

  return { formState, isValid, register, validate, setField };
}

export default useForm;
