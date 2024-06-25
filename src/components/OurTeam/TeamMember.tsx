import Image from 'next/image';

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  position: string;
}

const TeamMember = (props: TeamMemberProps) => {
  return (
    <div>
      <Image width={292} height={309} alt={props.name} src={props.imageUrl} quality={100} className='rounded'/>
      <div className='mt-4 flex flex-col gap-2'>
        <p className='h5-headline text-blue-700'>{props.name}</p>
        <p className='b3m-body-reg text-blue-700'>{props.position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
