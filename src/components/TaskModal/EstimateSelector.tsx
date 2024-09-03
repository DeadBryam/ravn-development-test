import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { RiIncreaseDecreaseFill } from 'react-icons/ri';
import { Else, If, Then } from 'react-if';

import { PointEstimate } from '@/__generated__/types';
import { convertPoints } from '@/utils';

import { ErrorMessage } from '../Form';
import { Tag } from '../Tag';

type EstimateSelectorProps = {
  name: string;
  className?: string;
};

function EstimateSelector({ name, className }: EstimateSelectorProps) {
  const points = useMemo(() => Object.values(PointEstimate), []);

  const {
    field: { value },
    field,
  } = useController({
    name,
  });

  const onChange = useCallback(
    (point: PointEstimate) => {
      field.onChange(point);
    },
    [field]
  );

  const currentValue: string | undefined = useMemo(() => {
    if (!value) return undefined;
    return `${convertPoints(value)} points`;
  }, [value]);

  return (
    <Menu>
      <MenuButton className={className}>
        <If condition={Boolean(currentValue)}>
          <Then>
            <Tag className="bg-transparent">
              <RiIncreaseDecreaseFill size={20} />
              <p className="whitespace-nowrap">{currentValue}</p>
            </Tag>
          </Then>
          <Else>
            <Tag>
              <RiIncreaseDecreaseFill size={20} />
              <p>Estimate</p>
            </Tag>
          </Else>
        </If>
        <ErrorMessage name={name} />
      </MenuButton>
      <MenuItems anchor="bottom" className="default-dropdown">
        <p className="dropdown-title">Estimate</p>
        {points.map((point, index) => (
          <MenuItem key={index}>
            <Tag className="bg-transparent hover:bg-neutral-4" onClick={onChange.bind(null, point)}>
              <RiIncreaseDecreaseFill size={20} />
              <p>{convertPoints(point)} points</p>
            </Tag>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export { EstimateSelector };
