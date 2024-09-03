import { LuLoader } from 'react-icons/lu';

import { ProfileCard } from '@/components';
import { useGetProfile } from '@/hooks';

function SettingsPage() {
  const { data, loading, error } = useGetProfile();

  if (loading) {
    return (
      <div className="flex justify-center items-center size-full gap-2">
        <LuLoader className="animate-spin" size={26} />
        <p className="text-b-xl text-neutral-1">Loading...</p>
      </div>
    );
  }

  if (error || !data?.profile) {
    return <div className="flex justify-center items-center size-full">Error fetching profile</div>;
  }

  return (
    <div className="flex flex-col size-full items-center justify-center">
      <ProfileCard user={data!.profile!} className="mt-8" />
    </div>
  );
}

export default SettingsPage;
