import { Button } from "antd";

const AntButton = (props) => {
  const {
    children,
    loading,
    icon,
    href,
    size,
    type = "primary",
    ...rest
  } = props;
  return (
    <>
      <Button
        {...rest}
        loading={loading}
        size={size}
        type={type}
        href={href}
        icon={icon}
      >
        {children}
      </Button>
    </>
  );
};

export default AntButton;