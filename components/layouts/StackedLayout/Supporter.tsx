import {
  SettingIcon,
  HelpIcon,
  BellIcon,
  ConvertShapeIcon,
  MessageIcon,
} from "@/icons";

export const Supporter = () => {
  return (
    <div className="flex items-center gap-4">
      <SettingIcon className="h-5 w-5 cursor-pointer text-white" />
      <ConvertShapeIcon className="h-5 w-5 cursor-pointer text-white" />
      <MessageIcon className="h-5 w-5 cursor-pointer text-white" />
      <div className="relative">
        <BellIcon className="h-5 w-5 cursor-pointer text-white" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-white">1</span>
        </div>
      </div>
      <HelpIcon className="h-5 w-5 cursor-pointer text-white" />
    </div>
  );
};
