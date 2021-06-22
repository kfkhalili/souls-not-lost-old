import React from "react";
import { Controller } from "react-hook-form";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const camelToSentenceCase = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export const MuiController = (WrappedComponent) => {
  return (props) => {
    return (
      <Controller
        name={props.name}
        control={props.control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <WrappedComponent
            label={capitalizeFirstLetter(camelToSentenceCase(props.name))}
            error={error}
            onChange={(e) => {
              e.preventDefault();
              onChange(e);
            }}
          />
        )}
        rules={{ required: `${capitalizeFirstLetter(props.name)} required` }}
      />
    );
  };
};