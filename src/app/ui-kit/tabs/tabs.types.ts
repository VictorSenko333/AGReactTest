export interface TabsProps {
  config: {
    label: string;
    value: string;
  }[]
  value: number;
  setValue: (val: number) => void;
  onTabClick?: (value: string) => void;
}