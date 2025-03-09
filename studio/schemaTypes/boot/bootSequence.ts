export default {
  name: "bootSequence",
  title: "Boot Sequence",
  type: "document",
  __experimental_actions: ["update", "publish"], // Only allow editing & publishing
  fields: [
    {
      name: "initialMessage",
      title: "Initial Boot Message",
      type: "string",
      description: "The first message displayed when the boot sequence starts",
    },
    {
      name: "biosMessage",
      title: "BIOS Loading Message",
      type: "string",
      description: "Message displayed during BIOS initialization",
    },
    {
      name: "biosCompleteMessage",
      title: "BIOS Complete Message",
      type: "string",
      description: "Message displayed when BIOS initialization is complete",
    },
    {
      name: "systemCheckHeader",
      title: "System Check Header",
      type: "string",
      description: "Header text for the system diagnostics section",
    },
    {
      name: "systemChecks",
      title: "System Check Messages",
      type: "array",
      of: [{ type: "string" }],
      description: "List of system component check messages",
    },
    {
      name: "bootCompleteMessage",
      title: "Boot Complete Message",
      type: "string",
      description: "Message displayed when boot sequence is complete",
    },
    {
      name: "welcomeMessage",
      title: "Welcome Message",
      type: "string",
      description: "Welcome message displayed after boot is complete",
    },
    {
      name: "promptSymbol",
      title: "Command Prompt Symbol",
      type: "string",
      description: 'Symbol displayed at the command prompt (e.g., ">", "$")',
    },
    {
      name: "enterButtonText",
      title: "Enter Button Text",
      type: "string",
      description: "Text displayed on the enter system button",
    },
  ],
};
