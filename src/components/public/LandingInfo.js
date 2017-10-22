import React from 'react';

const LandingInfo = () =>
  (
    <div className="c-landing__container">
      <h1 className="c-landing__subTitle">Here&#39;s how it works</h1>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 1</h3>
      <p className="c-landing__subText">Snap a few photos of the damage from various angles.</p>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 2</h3>
      <p className="c-landing__subText">Describe the damage including vehicle make, model, plus some contact info.</p>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 3</h3>
      <p className="c-landing__subText">Choose the quote that best suits you.</p>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 4</h3>
      <p className="c-landing__subText">Get your car fixed!</p>
      <span className="c-landing__whitespace" />
      <p className="c-landing__subText"><strong>
        That&#39;s it! After we receive the photos and description,
        we&#39;ll send it off to shops near you for quotes. We never
        share your contact info until you choose a quote you&#39;re happy with.
        Once connected, you will work directly with the body shop to restore
        your car to its former glory!
      </strong></p>
    </div>
  );

export default LandingInfo;
