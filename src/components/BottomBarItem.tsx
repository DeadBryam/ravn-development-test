import clsx from 'clsx';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type BottomBarItemProps = {
  title: string;
  icon: IconType;
  active?: boolean;
  href: string;
};

function BottomBarItem({ title, icon: Icon, active, href }: BottomBarItemProps) {
  return (
    <Link
      to={href}
      className={clsx('default-bottom-nav-item flex-1', {
        '!text-primary-4': active,
      })}
    >
      <Icon size={24} />
      <p className="text-b-s">{title}</p>
    </Link>
  );
}

export { BottomBarItem };
