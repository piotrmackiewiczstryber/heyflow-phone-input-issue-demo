'use client';

export const ContactForm = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<heyflow-wrapper flow-id="phone-number-input-issue-demo-" dynamic-height style-config='{"width": "800px"}'></heyflow-wrapper>`,
      }}
    ></div>
  );
};
