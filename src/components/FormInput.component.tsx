import {
  NumberInput as MantineNumberInput,
  TextInput as MantineTextInput,
  NumberInputProps,
  NumberInputStylesNames,
  Select,
  SelectProps,
  SelectStylesNames,
  Styles,
  TextInputProps,
  TextInputStylesNames,
  useMantineTheme
} from "@mantine/core";
import {
  DateInput,
  DateInputProps
} from "@mantine/dates";

import { useState } from "react";

export const getDefaultStyle = (
  isFocus: boolean,
  isError: boolean
):
  | Styles<TextInputStylesNames | NumberInputStylesNames | SelectStylesNames>
  | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : isFocus
    ? "#603991"
    : theme.colors["secondary-text"][5];
  return {
    input: {
      ":focus": {
        border: "2px solid",
        color
      },
      borderWidth: "2px",
      borderRadius: theme.radius.sm,
      color,
      marginTop: "8px"
    },
    label: {
      fontWeight: 600,
      color
    },
    error: {
      marginTop: 8
    }
  };
};

export const TextInput = ({ onFocus, onBlur, ...props }: TextInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <MantineTextInput
        className="text-primaryBlue"
        size="lg"
        styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};

export const MyNumberInput = ({
  onFocus,
  onBlur,
  ...props
}: NumberInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <MantineNumberInput
      size="lg"
      styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      {...props}
    />
  );
};

export const SelectInput = ({ onFocus, onBlur, ...props }: SelectProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Select
      size="lg"
      styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      searchable
      nothingFound="Tidak Ada Opsi"
      {...props}
    />
  );
};

export const DatePickerInput = ({
  onFocus,
  onBlur,
  ...props
}: DateInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <DateInput
      size="lg"
      locale="id"
      styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      maw={2000}
      {...props}
    />
  );
};
