import React from 'react';
export interface IStepper {
    activeStep?: number;
    steps: string[];
    onChange?: (val: number) => void;
}
declare const Stepper: ({ steps, onChange, activeStep }: IStepper) => React.JSX.Element;
export { Stepper };
