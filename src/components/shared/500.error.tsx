import type { NextErrorPageProps} from 'src/types/common.type';

const InternalServerError = ({ error }: NextErrorPageProps) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {`Intenal Server Error 500 ${error.message}`}
    </div>
  );
};

export default InternalServerError;
