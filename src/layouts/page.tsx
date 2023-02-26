import { FunctionComponent, PropsWithChildren } from "react";

interface IPageLayoutProps {
  title: string;
}
const PageLayout: FunctionComponent<PropsWithChildren<IPageLayoutProps>> = ({
  children,
  title,
}) => {
  return (
    <div className="flex flex-col pt-[41px] xl:pt-[71px] pl-[41px] pr-[41px] xl:pl-[87px] xl:pr-[77px] pb-[71px] w-full h-full">
      <h1 className="text-primary text-2xl font-bold pb-5 xl:pb-10">{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
