import clsx from 'clsx';
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri';
import { Else, If, Then } from 'react-if';

type CheckBoxProps = {
  label: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
};

function CheckBox({ label, className, active = false, onClick }: CheckBoxProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        'default-tag',
        {
          'cursor-pointer hover:bg-neutral-4': Boolean(onClick),
        },
        className
      )}
    >
      <If condition={active}>
        <Then>
          <RiCheckboxLine size={20} />
        </Then>
        <Else>
          <RiCheckboxBlankLine size={20} />
        </Else>
      </If>
      {label}
    </span>
  );
}

export { CheckBox };
