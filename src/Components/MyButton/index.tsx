import { Button } from 'react-bootstrap';

export interface MyButtonProps {
  text: string;
  variant: string;
  show: boolean;
  onClick: () => void;
}

export default function MyButton({
  text,
  variant,
  show,
  onClick,
}: MyButtonProps) {
  if (!show) {
    return null;
  }

  return (
    <Button
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
