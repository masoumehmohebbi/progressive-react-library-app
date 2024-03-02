import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchRemmemerMe() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div dir="ltr">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-primary-800" : "bg-primary-400"}
          relative inline-flex h-[20px] w-[42px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-[20.5px]" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[18px] transform rounded-full bg-secondary-0 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
