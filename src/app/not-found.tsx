import MainButton from '@/components/shared/ui/MainButton';

export default async function NotFoundPage() {
  return (
    <div className='mx-auto flex max-w-[65rem] flex-col items-center justify-center px-4 py-10 md:gap-10 md:px-10 lg:flex-row lg:gap-6'>
      <div className="flex items-center justify-center bg-[url('/images/ellipse-bg.png')] bg-contain bg-center bg-no-repeat font-montserrat text-[10rem] font-semibold text-gold-400 md:text-[15rem] xl:w-1/2">
        404
      </div>
      <div className='flex w-full flex-col items-center gap-6 md:gap-10 lg:items-start xl:w-1/2'>
        <div className='flex flex-col items-center gap-4 text-center md:gap-6 lg:items-start lg:text-left'>
          <h1 className='h4-headline-med md:h2-headline'>
            Страница не найдена
          </h1>
          <p className='b3m-body-reg md:b2m-body-reg text-blue-700'>
            К сожалению, страница, которую вы ищете, возможно, была
            переименована, перемещена или удалена.
          </p>
        </div>
        <MainButton label='На главную' size='m' route='/' />
      </div>
    </div>
  );
}
