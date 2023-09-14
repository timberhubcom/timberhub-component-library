import { styled } from '@mui/material';
import MuiLinearProgress, {
  linearProgressClasses,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material/LinearProgress';

export type LinearProgressProps = MuiLinearProgressProps;

export const LinearProgress = styled(MuiLinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));
