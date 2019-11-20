const EventEmitter = require("events");

module.exports = class Creator extends EventEmitter {
  constructor(name, context, promptModules) {
    super();

    this.name = name;
    this.context = process.env.VUE_CLI_CONTEXT = context;
    const { presetPrompt, featurePrompt } = this.resolveIntroPrompts();
    this.presetPrompt = presetPrompt;
    this.featurePrompt = featurePrompt;
    this.outroPrompts = this.resolveOutroPrompts();
    this.injectedPrompts = [];
    this.promptCompleteCbs = [];
    this.afterInvokeCbs = [];
    this.afterAnyInvokeCbs = [];

    this.run = this.run.bind(this);

    const promptAPI = new PromptModuleAPI(this);
    promptModules.forEach(m => m(promptAPI));
  }
};
