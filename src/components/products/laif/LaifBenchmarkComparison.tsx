import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import clsx from 'clsx';

const LaifBenchmarkComparison = async () => {
  const t = await getScopedI18n(`products.laif.benchmarkComparation`);

  const columnStyle =
    'h-full  border bg-blue-400 px-3 py-4 text-center align-middle text-white text-blue-600 flex items-center justify-center';
  const childColumnStyle =
    'h-full border bg-blue-200 px-3 py-4 text-center align-middle flex items-center justify-center';
  const rowTitleStyle =
    'h-full border px-3 py-4 align-middle flex items-center justify-start text-left';
  const rowCellStyle =
    'h-full border px-3 py-4 text-center align-middle flex items-center justify-center';

  return (
    <SectionWrapper title={t('title')}>
      <div className='no-scrollbar !max-w-screen -mr-4 w-screen overflow-x-scroll md:-mr-10 xl:mr-0 xl:w-full'>
        <div className='b3m-body-med md:b2m-body-med flex h-full w-[1240px] flex-col xl:w-full'>
          {/* head */}
          <div className='grid h-full grid-cols-10'>
            <div className='col-span-2 h-full' />
            <div className={clsx('col-span-2', columnStyle)}>
              {t('columns.0.title')}
            </div>
            <div className={clsx('col-span-2', columnStyle)}>
              {t('columns.1.title')}
            </div>
            <div className='col-span-4 h-full '>
              <div className='grid h-full grid-cols-4'>
                <div className={clsx('col-span-4', columnStyle)}>
                  {t('columns.2.title')}
                </div>
                <div className={clsx('col-span-1', childColumnStyle)}>
                  {t('columns.2.children.0')}
                </div>
                <div className={clsx('col-span-1', childColumnStyle)}>
                  {t('columns.2.children.1')}
                </div>
                <div className={clsx('col-span-1', childColumnStyle)}>
                  {t('columns.2.children.2')}
                </div>
                <div className={clsx('col-span-1', childColumnStyle)}>
                  {t('columns.2.children.3')}
                </div>
              </div>
            </div>
          </div>
          {/* row 1 */}
          <div className='grid h-full grid-cols-10 items-center bg-gray-100 text-blue-600'>
            <div className={clsx('col-span-2', rowTitleStyle)}>
              {t('rows.0.0')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.0.1')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.0.2')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.0.3')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.0.4')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.0.5')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.0.6')}
            </div>
          </div>
          {/* row 2 */}
          <div className='grid grid-cols-10 items-center bg-gray-300 text-blue-600'>
            <div className={clsx('col-span-2', rowTitleStyle)}>
              {t('rows.1.0')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.1.1')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.1.2')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.1.3')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.1.4')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.1.5')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.1.6')}
            </div>
          </div>
          {/* row 3 */}
          <div className='grid grid-cols-10 items-center bg-gray-100 text-blue-600'>
            <div className={clsx('col-span-2', rowTitleStyle)}>
              {t('rows.2.0')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.2.1')}
            </div>
            <div className={clsx('col-span-2', rowCellStyle)}>
              {t('rows.2.2')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.2.3')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.2.4')}
            </div>
            <div className={clsx('col-span-1', rowCellStyle)}>
              {t('rows.2.5')}
            </div>
            <p className={clsx('col-span-1', rowCellStyle)}>{t('rows.2.6')}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LaifBenchmarkComparison;
