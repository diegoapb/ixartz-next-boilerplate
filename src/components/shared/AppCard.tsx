import { Card } from '@mui/material';


type Props = {
  children: JSX.Element | JSX.Element[];
};

const AppCard = ({ children }: Props) => {
  // const customizer = useSelector((state: AppState) => state.customizer);

  return (
    <Card
      sx={{ display: 'flex', p: 0 }}
      elevation={false ? 9 : 0}
      variant={!false ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

export default AppCard;
