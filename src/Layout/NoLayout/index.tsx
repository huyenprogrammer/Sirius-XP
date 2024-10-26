interface IProps {
  children: React.ReactNode;
}

const NoLayout = ({ children }: IProps) => {
  return <>{children}</>;
};

export default NoLayout;
