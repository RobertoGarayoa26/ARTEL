import {
  BatteryCharging,
  RadioTower,
  Wind,
  SunMedium,
  Lightbulb,
  type LucideProps,
} from 'lucide-react';

const map = {
  battery: BatteryCharging,
  antenna: RadioTower,
  wind: Wind,
  solar: SunMedium,
  consulting: Lightbulb,
};

export type IconKey = keyof typeof map;

export function ServiceIcon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name as IconKey] ?? BatteryCharging;
  return <Cmp {...props} />;
}
