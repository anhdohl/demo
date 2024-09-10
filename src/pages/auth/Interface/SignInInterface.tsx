export interface StepTypeIF {
  screen: string;
  tabActive: string;
  step: number;
}

export interface StepTypeFunctionIF {
  ParamsForm?: ParamsFormIF,
  setParamsForm?: (value: ParamsFormIF) => void,
  StepType: StepTypeIF;
  setStepType: (value: StepTypeIF) => void
  handleSubmitFormEmail?: () => void
}

export interface ParamsFormIF {
  email: string,
  phone: string,
  code_sms: string,
  dial_code: string,
  code: string,
  password: string;
}

export interface HeaderLogoTitleLoginIF {
  title: string;
  description?: string;
}

export interface CountryListIF {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}