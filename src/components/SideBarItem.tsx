import clsx from 'clsx';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type SideBarItemProps = {
  title: string;
  icon: IconType;
  active?: boolean;
  href: string;
};

function SideBarItem({ title, icon: Icon, active, href }: SideBarItemProps) {
  return (
    <Link
      to={href}
      className={clsx('default-sidebar-item', {
        'actire-sidebar-item': active,
      })}
    >
      <Icon size={20} />
      <p>{title}</p>
    </Link>
  );
}

export { SideBarItem };
