import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';


type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  sx?: any;
};

const BlankCard = ({ children, className, sx }: Props) => {

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{ p: 0, border: !false ? `1px solid ${borderColor}` : 'none' , position: 'relative', sx }}
      className={className}
      elevation={false ? 9 : 0}
      variant={!false ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
