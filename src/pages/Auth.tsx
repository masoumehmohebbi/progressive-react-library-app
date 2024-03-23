import AuthContainer from "../features/authentication/AuthContainer";

const Auth = () => {
  return (
    <div className="sm:py-5">
      <div>
        <div className="flex justify-center">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default Auth;
