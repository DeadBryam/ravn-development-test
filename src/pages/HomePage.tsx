import { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoMdMenu } from 'react-icons/io';
import { PiSquaresFour } from 'react-icons/pi';

import { SwitchButton, TopNavigationBar } from '@/components';
import { TaskModal } from '@/components/TaskModal';
import { TaskContainer } from '@/components/TasksContainer';

function HomePage() {
  const [useGrid, setUseGrid] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const setGrid = useCallback(() => setUseGrid(true), []);
  const setList = useCallback(() => setUseGrid(false), []);
  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <div className="flex flex-col size-full">
      <TopNavigationBar />
      <div className="flex flex-row justify-between my-8 mb-4">
        <div className="flex flex-row">
          <SwitchButton active={!useGrid} onClick={setList}>
            <IoMdMenu size={24} />
          </SwitchButton>
          <SwitchButton active={useGrid} onClick={setGrid}>
            <PiSquaresFour size={24} />
          </SwitchButton>
        </div>
        <SwitchButton className="!bg-primary-4" onClick={openModal}>
          <FiPlus size={24} />
        </SwitchButton>
      </div>
      <TaskContainer className="flex-1" />
      <TaskModal open={showModal} onClose={closeModal} />
    </div>
  );
}

export default HomePage;
