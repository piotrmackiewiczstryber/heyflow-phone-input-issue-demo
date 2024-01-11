'use client';

export const ApplyForm = () => {
  return (
    <div
      dir='ltr'
      style={{ paddingBottom: '120px' }}
      dangerouslySetInnerHTML={{
        __html: `<heyflow-wrapper
            flow-id='alnilam-signup-form'
            dynamic-height
            style-config='{"width": "800px"}'
          ></heyflow-wrapper>`,
      }}
    ></div>
  );
};
