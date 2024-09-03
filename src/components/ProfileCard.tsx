import clsx from 'clsx';

import { User } from '@/__generated__/types';
import { parseDate } from '@/utils';

type ProfileCardProps = {
  user: User;
  className?: string;
};

function ProfileCard({ user, className }: ProfileCardProps) {
  const data = [
    {
      label: 'Email',
      value: user.email,
    },
    {
      label: 'Type',
      value: user.type,
    },
    {
      label: 'Created At',
      value: parseDate(user.createdAt, { format: 'dd MMM, yyyy' }),
    },
    {
      label: 'Updated At',
      value: parseDate(user.updatedAt, { format: 'dd MMM, yyyy' }),
    },
  ];

  return (
    <div className={clsx('flex flex-col items-center justify-center rounded-lg gap-2 p-6 border max-w-80 w-full border-neutral-3', className)}>
      <p className="text-b-l">User Details</p>
      <img src={user?.avatar ?? 'https://avatar.iran.liara.run/public'} alt="avatar" className="rounded-full size-32" />
      <p>{user.fullName}</p>
      <hr className="w-full border-neutral-3" />
      <div className="flex flex-col gap-3 w-full">
        {data.map(({ label, value }) => (
          <div key={label} className="flex justify-between w-full gap-4">
            <p className="font-semibold">{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProfileCard };
