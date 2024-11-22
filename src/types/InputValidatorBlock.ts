// src/types/InputValidatorBlock.ts

import { Block } from "react-chatbotify";
import { ValidationResult } from "./ValidationResult";

export type InputValidatorBlock = Omit<Block, "file"> & {
  file?: (params: { files?: FileList }) => void | Promise<void>; // Updated
  validateInput?: (userInput?: string) => ValidationResult;
  validateFileInput?: (file?: File) => ValidationResult;
};