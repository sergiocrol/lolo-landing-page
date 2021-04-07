import Image from "next/image";
import { useIntl } from "react-intl";

import StepBlock from "../FirstSection/StepBlock";
import useWidth from "../../hooks/useWidth";
import FooterNav from "../FooterNav";

import { footerContainer, bgFooter } from "../../styles/index.module.css";

const FooterSection = () => {
  const { formatMessage: f } = useIntl();
  const windowWith = useWidth();
  if (windowWith === 0) null;

  let src;
  if (windowWith <= 767) {
    src = "/static/images/ft_s.jpg";
  } else {
    src = "/static/images/ft_l.jpg";
  }

  return (
    <div className={`${footerContainer} mt-32 relative`}>
      <div className={`${bgFooter}`}>
        <Image alt="Footer Background" src={src} layout="fill" quality={100} />
      </div>
      <div className="md:px-12 md:pt-16 xl:pt-32 lg:container xl:px-0">
        <StepBlock
          image="/static/images/footer1.png"
          left={false}
          title={f({ id: "footerFirstSectionTitle" })}
          body={f({ id: "footerFirstSectionSubtitle" })}
          button={f({ id: "footerFirstSectionCTA" })}
          isFooter
          marginBottom="mb-16"
        />
        <StepBlock
          image="/static/images/footer2.png"
          left={true}
          title={f({ id: "footerSecondSectionTitle" })}
          body={f({ id: "footerSecondSectionSubtitle" })}
          button={f({ id: "footerSecondSectionCTA" })}
          // buttonUrl={process.env.NEXT_PUBLIC_CINDY_URL}
          buttonUrl="/signup/new"
          isFooter
        />
      </div>
      <FooterNav />
    </div>
  );
};

export default FooterSection;
