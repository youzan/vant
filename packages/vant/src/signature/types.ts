import type { ComponentPublicInstance } from 'vue';
import type { SignatureProps } from './Signature';

export type SignatureExpose = {
  resize: () => void;
};

export type SignatureInstance = ComponentPublicInstance<
  SignatureProps,
  SignatureExpose
>;

export type SignatureThemeVars = {
  signaturePadding?: string;
  signatureContentHeight?: string;
  signatureContentBackground?: string;
  signatureContentBorder?: string;
};
