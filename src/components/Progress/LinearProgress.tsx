import { styled } from '@mui/material';
import MuiLinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';

export { LinearProgressProps };

const LinearProgress = styled(MuiLinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

export { LinearProgress };
