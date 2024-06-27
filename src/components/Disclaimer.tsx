'use client';
import { useEffect, useState } from 'react';
import Modal from './shared/ui/Modal';
import MainButton from './shared/ui/MainButton';

const DISCLAIMER_TIMEOUT = 10;
const DISCLAIMER_STORAGE = 'disclaimer';

const Disclaimer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const isConfirmed = localStorage.getItem(DISCLAIMER_STORAGE);
    if (isConfirmed && isConfirmed === 'true') {
      return;
    }
    const timer = setTimeout(() => {
      setShowModal(true);
    }, DISCLAIMER_TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onConfirm = () => {
    localStorage.setItem(DISCLAIMER_STORAGE, 'true');
    setShowModal(false);
  };

  const onCancel = () => {
    window.location.href="about:blank";

  };

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      title='Disclaimer'
      className='flex !overflow-hidden'
    >
      <div className='gold-scrollbar flex h-full max-h-[500px] grow flex-col gap-4 overflow-auto pr-3'>
        <p className='b2m-body-reg'>
          All content of this site is for informational purposes only and is
          intended for qualified investors. It is the responsibility of any
          persons who access the information contained in this website to
          observe all applicable laws and regulations of any relevant
          jurisdiction, including any jurisdiction from which they access this
          website. Accessing this website does not mean that investment products
          are offered or available in the jurisdiction from which it was
          accessed. Financial instruments mentioned on this site are only
          offered or available in jurisdictions in which and to investors to
          whom such offer or availability is lawful.
        </p>
        <p className='b2m-body-reg'>
          The material provided herein does not constitute an offer to sell or a
          solicitation of an offer to buy any shares in any fund or any other
          securities.
        </p>
        <p className='b2m-body-reg'>
          Prior to investing, investors are strongly urged to review carefully
          Private Placement Memorandum (including the risk factors described
          therein), the Offering Supplement and the Subscription Documents, to
          discuss any prospective investment in the Fund with their legal and
          tax advisers in order to make an independent determination of the
          suitability and consequences of an investment.
        </p>
        <p className='b2m-body-reg'>
          The information contained in this website, including but not limited
          to any opinions or forecasts expressed herein, is subject to change at
          any time without notice. Any research or analysis used to derive, or
          in relation to, the information has been procured from sources
          believed to be reliable by Movchan’s Group for its own use. The
          information is provided on a general basis, without taking into
          account the investment objectives, financial situation, risk tolerance
          or particular needs of any specific investor. Hedge fund investments,
          by their nature, involve a substantial degree of risk, including the
          risk of total loss of an investor’s capital.
        </p>
        <p className='b2m-body-reg'>
          Whilst Movchan’s Group companies believe that the information
          contained in this website is correct at the date of production, no
          warranty or representation, whether express or implied, is given to
          this effect. Movchan’s Group companies are under no duty to update the
          information, and expressly disclaim liability for any errors or
          omissions or any loss that may arise from use of or reliance upon the
          information. The information contained in this website is given
          without obligation and on the understanding that any person acting
          upon or in reliance on it, does so entirely at his or her own risk.
          Any information on past performance is not indicative of future
          performance. Any projections or other forward-looking statements
          regarding future events or performance of countries, markets or
          companies are not necessarily indicative of, and may differ from,
          actual events or results.
        </p>
        <p className='b2m-body-reg'>
          If you are in any doubt about any of the contents of this website, you
          should obtain independent professional advice. Nothing in this website
          constitutes or provides financial or investment advice to any persons
          or class of persons.
        </p>
        <h3 className='font-semibold'>For U.S.</h3>
        <p className='b2m-body-reg'>
          This Site is not aimed at any US Person (as defined by Regulation of
          the US Securities Act 1933) and is not for distribution and does not
          constitute an offer to or solicitation to buy any securities in the
          USA.
        </p>
        <h3 className='font-semibold'>For Switzerland</h3>
        <p className='b2m-body-reg'>
          The offer and marketing of shares of the fund in Switzerland will be
          exclusively made to, and directed at, qualified investors (the
          "Qualified Investors"), as defined in Art. 4(4) of the Swiss Federal
          Act on Financial Services ("FinSA"), i.e. institutional clients, at
          the exclusion of professional clients with opting-out pursuant to Art.
          5(3) FinSA (“Excluded Qualified Investors”). Accordingly, the funds
          managed by Movchan’s Group companies have not been and will not be
          registered with the Swiss Financial Market Supervisory Authority
          ("FINMA") and no representative or paying agent have been or will be
          appointed in Switzerland. The content of this site relating to a fund
          may be made available in Switzerland solely to Qualified Investors, at
          the exclusion of Excluded Qualified Investors
        </p>
      </div>
      <div className='mt-3 flex flex-col gap-3'>
        <h3>
          I certify that I have read the above information and that I am a
          qualified investor and non-U.S. resident
        </h3>
        <div className='flex gap-3'>
          <MainButton
            variant='outlined'
            size='s'
            action={onCancel}
            label='No'
          />
          <MainButton
            variant='contained'
            size='s'
            action={onConfirm}
            label='Yes'
          />
        </div>
      </div>
    </Modal>
  );
};

export default Disclaimer;
