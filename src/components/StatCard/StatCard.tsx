import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '../ui/card';
import NumberFlow from '@number-flow/react';

type StatCardProps = {
  count: number;
  className: string;
  footerTitle: string;
  bgPattern: string;
};

const StatCard = ({
  count,
  className,
  footerTitle,
  bgPattern
}: StatCardProps) => {
  return (
    <Card
      className={cn(
        'relative z-30 w-full overflow-hidden px-3 py-6',
        className
      )}
    >
      <div
        className={cn(
          'absolute -right-8 top-0 -z-10 h-full w-full bg-right bg-no-repeat',
          bgPattern
        )}
      />
      <CardContent className="p-0">
        <span className="text-Heading-40 font-bold text-counter-neutral-900 md:text-Heading-64 lg:text-Heading-64">
          <NumberFlow value={count} />
        </span>
        <CardFooter className="p-0">
          <span className="text-Regular-20 text-counter-neutral-900">
            {footerTitle}
          </span>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default StatCard;
