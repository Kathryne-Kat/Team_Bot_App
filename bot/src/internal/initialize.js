const { BotBuilderCloudAdapter } = require("@microsoft/teamsfx");
const ConversationBot = BotBuilderCloudAdapter.ConversationBot;
const { YesActionHandler } = require("../cardActions/yesActionHandler");
const { DoHiAction } = require("../cardActions/doHiAction");
const { StartCommandHandler } = require("../commands/startCommandHandler");
const { Hello } = require("../commands/Hello");

const config = require("./config");

// Create the conversation bot and register the command and card action handlers for your app.
const conversationBot = new ConversationBot({
  // The bot id and password to create CloudAdapter.
  // See https://aka.ms/about-bot-adapter to learn more about adapters.
  adapterConfig: {
    MicrosoftAppId: config.botId,
    MicrosoftAppPassword: config.botPassword,
    MicrosoftAppType: "MultiTenant",
  },
  command: {
    enabled: true,
    commands: [new StartCommandHandler(), new Hello()],
  },
  cardAction: {
    enabled: true,
    actions: [new YesActionHandler(), new DoHiAction()],
  },
});

module.exports = {
  conversationBot,
};
