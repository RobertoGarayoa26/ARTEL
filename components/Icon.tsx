import {
  BatteryCharging,
  RadioTower,
  Wind,
  SunMedium,
  type LucideProps,
} from 'lucide-react';

const map = {
  battery: BatteryCharging,
  antenna: RadioTower,
  wind: Wind,
  solar: SunMedium,
};

export type IconKey = keyof typeof map;

export function ServiceIcon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name as IconKey] ?? BatteryCharging;
  return <Cmp {...props} />;
}
