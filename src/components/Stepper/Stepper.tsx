import React from 'react';
import { Theme, styled } from '@mui/material/styles';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { StepIconProps } from '@mui/material/StepIcon';

const stepStateStyles = (theme: Theme) => ({
  ...theme.typography.headline_ss_xxs,
  color: `${theme.palette.grey['500']}`,
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.secondary.main,
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: theme.palette.primary.light,
  },
});

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  ...stepStateStyles(theme),
  cursor: 'pointer !important',
}));

const Connector = () => {
  return (
    <StepLabel
      sx={(theme) => ({
        '& .MuiStepLabel-label': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.grey['500'],
        },
        '& .MuiStepLabel-iconContainer': {
          display: 'none',
        },
        ...stepStateStyles(theme),
      })}
      icon={<span />}
    >
      <NavigateNext fontSize="small" />
    </StepLabel>
  );
};

const CustomStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  color: theme.palette.grey['500'],
  ...theme.typography.headline_ss_xxs,
  ...(ownerState.active && {
    color: theme.palette.secondary.main,
  }),
  ...(ownerState.completed && {
    color: theme.palette.primary.light,
  }),
}));

function CustomStepConnector(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {String(props.icon)}.
    </CustomStepIconRoot>
  );
}

export interface IStepper {
  activeStep?: number;
  steps: string[];
  onChange?: (val: number) => void;
}

const Stepper = ({ steps, onChange, activeStep = 0 }: IStepper) => {
  return (
    <MuiStepper activeStep={activeStep} connector={<Connector />}>
      {steps.map((label, index) => (
        <Step key={label}>
          <CustomStepLabel onClick={() => onChange && onChange(index)} StepIconComponent={CustomStepConnector}>
            {label}
          </CustomStepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

export { Stepper };
