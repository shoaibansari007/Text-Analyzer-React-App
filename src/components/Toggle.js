import { Switch } from "@headlessui/react";

function Toggle({ enabled, setEnabled }) {
  return (
    <div className="relative z-40 flex flex-row gap-2 pl-4 overflow-hidden text-blue-900 rounded-full sm:bg-white before:w-28 before:h-8 sm:before:bg-blue-300/80 before:rotate-45 before:absolute before:-z-30 before:top-2 before:right-3">
      <p className="hidden m-2 mr-0 sm:block">Theme</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full m-2 ml-0`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition `}
        />
      </Switch>
    </div>
  );
}

export default Toggle;
