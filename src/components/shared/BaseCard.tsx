import { Card, CardHeader, CardContent, Divider } from '@mui/material';
// import { useSelector } from '@/store/hooks';
// import { AppState } from '@/store/store';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const BaseCard = ({ title, children }: Props) => {

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={false ? 9 : 0}
      variant={!false ? 'outlined' : undefined}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
